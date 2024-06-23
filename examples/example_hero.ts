import { D2PtScraper } from "../src/index";

async function main() {
	try {
		const d2pt = new D2PtScraper();
		const heroInfo = await d2pt.getHeroInfo("Anti-Mage");
		console.log("HERO_INFO:", heroInfo);
	} catch (error) {
		console.error("Error fetching heroes meta:", error);
	}
}

main();
