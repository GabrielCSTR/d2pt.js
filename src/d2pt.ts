import { Hero, metaHeroesType } from "./models";
import { scrapeMetaHeroes } from "./scrapers/meta";

class D2PtScraper {
	private readonly _host: string = "dota2protracker.com";
	private readonly _basePath: string = "/api/v1";

	async getHeroesMeta(
		category: metaHeroesType,
		max_result: number = 5
	): Promise<Hero[]> {
		const heroesMeta = await scrapeMetaHeroes(category, max_result);
		console.log(`Meta hero category: ${category}`);
		return heroesMeta;
	}
}

export default D2PtScraper;
