import { MetaHeroesAliases } from "../models";

// Definindo os aliases de categoria
export const categoryAliases: MetaHeroesAliases = {
	hc: "Carry",
	mid: "Mid",
	off: "Off",
	sup4: "Pos 4",
	sup5: "Pos 5",
	pos4: "Pos 4",
	pos5: "Pos 5",
};

// Mapeamento das propriedades dos heróis
export const dataIndexToProperty = [
	"role",
	"name",
	"matches",
	"winRate",
	"winRate9500",
	"contestRate",
	"rating",
	"radiantWinRate",
	"direWinRate",
	"expertWinRate",
	"phase1WinRate",
	"phase2WinRate",
	"phase3WinRate",
	"networth",
];

export const dataAllToProperty = [
	"name",
	"matches",
	"winRate",
	"winRate9500",
	"contestRate",
	"rating",
	"radiantWinRate",
	"direWinRate",
	"expertWinRate",
	"phase1WinRate",
	"phase2WinRate",
	"phase3WinRate",
	"networth",
];
