import { IHeroInfo } from "../models";
import { HeroNamesType } from "./../models/hero_info";
import puppeteer from "puppeteer";

/**
 * Asynchronous function that scrapes a hero page from dota2protracker.com
 * @param heroName The name of the hero to be scraped
 */
export async function scrapeHero(
	heroName: HeroNamesType
): Promise<IHeroInfo[] | null> {
	const browser = await puppeteer.launch({
		headless: true,
		defaultViewport: null,
	});

	const page = await browser.newPage();

	try {
		await page.goto(`https://dota2protracker.com/hero/${heroName}`, {
			waitUntil: "networkidle2",
		});

		await page.waitForSelector(".mt-6.flex.gap-2");

		const heroData = (await page.$$eval(
			".flex.flex-col.lg\\:flex-row.gap-2.sticky.top-1.bg-black\\/20 > div",
			(elements) => {
				return elements
					.map((element) => {
						const roleElement = element.querySelector(
							".flex.font-bold.gap-2.items-center.text-sm.lg\\:text-lg"
						) as HTMLElement;
						const winRateElement = element.querySelector(
							".text-white\\/\\[0\\.4\\].text-xs.text-center > span"
						) as HTMLElement;
						const matchesElement = element.querySelector(
							".text-white\\/\\[0\\.4\\].text-xs.text-center"
						) as HTMLElement;

						if (roleElement && winRateElement && matchesElement) {
							const role = roleElement.innerText.trim();
							const winRate = winRateElement.innerText.trim();
							const matchesText = matchesElement.innerText;

							if (matchesText) {
								const matchesMatch = matchesText.match(/(\d+) matches/);
								const playersMatch = matchesText.match(/by (\d+) Players/);

								if (matchesMatch && playersMatch) {
									const matches = matchesMatch[1];
									const players = playersMatch[1];

									return {
										role,
										winRate,
										matches,
										players,
									};
								}
							}
						}
						return null;
					})
					.filter(Boolean);
			}
		)) as IHeroInfo[];

		return heroData;
	} catch (error) {
		console.error("Error during scraping:", error);
		return null;
	} finally {
		await browser.close();
	}
}
