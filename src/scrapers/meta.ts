import puppeteer from "puppeteer";
import { Hero, MetaHeroesAliases, metaHeroesType } from "../models";
import {
	categoryAliases,
	dataAllToProperty,
	dataIndexToProperty,
} from "../constants/constants";

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

		await page.waitForSelector("#meta-table .hero-row");
		await page.waitForSelector(".nav a");

		const navLinks = await page.$$(".nav a");

		const allHeroData: Hero[] = [];

		for (const link of navLinks) {
			const linkText = await page.evaluate((el) => el.innerText.trim(), link);

			if (linkText.includes(aliasesCategory)) {
				console.log(`Getting meta data for '${linkText}' heroes...`);

				await link.click();
				await sleep(2000);

				const heroes = await page.evaluate(
					(max_results, category, dataIndexToProperty, dataAllToProperty) => {
						const heroElements = document.querySelectorAll(
							"#meta-table .hero-row"
						);
						const heroData: Hero[] = [];

						heroElements.forEach((hero, index) => {
							if (index >= max_results) return;

							const dataElements = hero.querySelectorAll(
								"div[data-sort-value]"
							);
							const heroInfo: Partial<Hero | any> = {};

							dataElements.forEach((element: any, dataIndex: number) => {
								const property =
									category !== "All"
										? dataIndexToProperty[dataIndex]
										: dataAllToProperty[dataIndex];

								if (property) {
									heroInfo[property] = element.dataset.sortValue;
								}
							});

							heroData.push(heroInfo as Hero);
						});

						return heroData;
					},
					max_results,
					category,
					dataIndexToProperty,
					dataAllToProperty
				);

				allHeroData.push(...heroes);
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
