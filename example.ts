import { D2PtScraper } from "./src/index";

async function main() {
	try {
		const d2pt = new D2PtScraper();
		const heroesMeta = await d2pt.getHeroesMeta("hc");
		console.log("Heroes Meta:");
		console.log(heroesMeta);
	} catch (error) {
		console.error("Error fetching heroes meta:", error);
	}
}

main();
