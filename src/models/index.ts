export type Hero = {
	role?: string;
	name?: string;
	matches?: string;
	winRate?: string;
	winRate9500?: string;
	contestRate?: string;
	rating?: string;
	radiantWinRate?: string;
	direWinRate?: string;
	expertWinRate?: string;
	phase1WinRate?: string;
	phase2WinRate?: string;
	phase3WinRate?: string;
	networth?: string;
};

export type MetaHeroes = {
	All: Hero[];
	Carry: Hero[];
	Mid: Hero[];
	Off: Hero[];
};

export type MetaHeroesAliases = {
	hc: "Carry";
	mid: "Mid";
	off: "Off";
	sup4: "Pos 4";
	sup5: "Pos 5";
	pos4: "Pos 4";
	pos5: "Pos 5";
};

type MetaHeroesKeys = keyof MetaHeroes;
type MetaHeroesAliasesKeys = keyof MetaHeroesAliases;
export type metaHeroesType = MetaHeroesKeys | MetaHeroesAliasesKeys;
