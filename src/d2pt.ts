import { Hero, IHeroInfo, metaHeroesType } from "./models";
import { HeroNamesType } from "./models/hero_info";
import { scrapeHero } from "./scrapers/hero";
import { scrapeMetaHeroes } from "./scrapers/meta";

/**
 * Provides access to the scraping pages dota2protracker.com. This is the first thing you do to start.
 */
export class D2PtScraper {
	private readonly _host: string = "dota2protracker.com";
	private readonly _basePath: string = "/api/v1";

	/**
	 * Asynchronous function that retrieves meta heroes in a specific category.
	 *
	 * @param {metaHeroesType} category - The category of meta heroes to be fetched.
	 *                                    This could be a value such as "mid", "hc", "all", "off", "sup4", etc.
	 * @param {number} [max_result=5] - The maximum number of heroes to return.
	 *                                  Defaults to 5 if not specified.
	 * @returns {Promise<Hero[]>} - Returns a promise that resolves to an array of Hero objects.
	 *                              Each Hero object contains relevant data for the hero in the specified category.
	 *
	 * The function performs the following operations:
	 * 1. Calls the `scrapeMetaHeroes` function with the parameters `category` and `max_result` to fetch the hero data.
	 * 2. Logs the meta hero category being fetched to the console.
	 * 3. Returns the fetched hero data as an array of Hero objects.
	 *
	 * @example
	 * // Example usage of getHeroesMeta:
	 * const topHeroes = await getHeroesMeta('mid', 3);
	 * console.log(topHeroes);
	 * // Expected output: Array of top 3 heroes in the 'mid' category.
	 */
	async getHeroesMeta(
		category: metaHeroesType,
		max_result: number = 5
	): Promise<Hero[]> {
		const heroesMeta = await scrapeMetaHeroes(category, max_result);
		return heroesMeta;
	}

	/**
	 * Asynchronous function that retrieves information about a specific hero.
	 *
	 * @param {HeroNamesType} heroName - The name of the hero to be fetched.
	 * @returns {Promise<IHeroInfo | null>} - Returns a promise that resolves to an object containing information about the hero.
	 */
	async getHeroInfo(heroName: HeroNamesType): Promise<IHeroInfo[] | null> {
		const heroInfo = await scrapeHero(heroName);
		return heroInfo;
	}
}
