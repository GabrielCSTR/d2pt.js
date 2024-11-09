import puppeteer from "puppeteer";
import { Hero, MetaHeroesAliases, metaHeroesType } from "../models";
import { categoryAliases } from "../constants/constants";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function scrapeMetaHeroes(
  category: metaHeroesType,
  max_results: number
): Promise<Hero[]> {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  const aliasesCategory =
    categoryAliases[category as keyof MetaHeroesAliases] || category;

  console.log(`Meta hero category: ${aliasesCategory}`);

  const page = await browser.newPage();

  try {
    await page.goto("https://dota2protracker.com/meta", {
      waitUntil: "networkidle2",
    });

    await page.waitForSelector("#meta-table");
    await page.waitForSelector(".nav button");

    const navLinks = await page.$$(".nav button");

    const allHeroData: Hero[] = [];

    for (const link of navLinks) {
      const linkText = await page.evaluate((el) => el.innerText.trim(), link);

      if (linkText.includes(aliasesCategory)) {
        console.log(`Getting meta data for '${linkText}' heroes...`);

        await link.click();

        await sleep(2000);

        const heroes: Hero[] = await page.evaluate(
          (category, max_results) => {
            const rows = Array.from(
              document.querySelectorAll(".tbody > div")
            ).slice(0, max_results);

            const isAllCategory = category === "All";

            return rows.map((row) => {
              const name = (
                row.querySelector(
                  isAllCategory
                    ? "div:nth-child(1) a span"
                    : "div:nth-child(2) a span"
                ) as HTMLElement
              )?.innerText;
              const rating = (
                row.querySelector(
                  isAllCategory ? "div:nth-child(3)" : "div:nth-child(4)"
                ) as HTMLElement
              )?.innerText;
              const matches = (
                row.querySelector(
                  isAllCategory ? "div:nth-child(4)" : "div:nth-child(5)"
                ) as HTMLElement
              )?.innerText;
              const winRate = (
                row.querySelector(
                  isAllCategory ? "div:nth-child(5)" : "div:nth-child(6)"
                ) as HTMLElement
              )?.innerText;
              const contestRate = (
                row.querySelector(
                  isAllCategory ? "div:nth-child(7)" : "div:nth-child(8)"
                ) as HTMLElement
              )?.innerText;
              const radiantWinRate = (
                row.querySelector(
                  isAllCategory ? "div:nth-child(8)" : "div:nth-child(9)"
                ) as HTMLElement
              )?.innerText.split("\n")[1];
              const direWinRate = (
                row.querySelector(
                  isAllCategory ? "div:nth-child(9)" : "div:nth-child(10)"
                ) as HTMLElement
              )?.innerText.split("\n")[1];

              const heroData: Hero = {
                name,
                rating,
                matches,
                winRate,
                contestRate,
                radiantWinRate,
                direWinRate,
              };
              return heroData;
            });
          },
          category,
          max_results
        );

        allHeroData.push(
          ...heroes.filter((hero): hero is Hero => hero !== undefined)
        );
      }
    }

    return allHeroData;
  } catch (error) {
    console.error("Error during scraping:", error);
    return [];
  } finally {
    await browser.close();
  }
}
