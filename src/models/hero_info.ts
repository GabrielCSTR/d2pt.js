import { IheroInfo } from ".";

interface Hero {
	displayName: string;
	npc: string;
	hero_id: number;
}

export type HeroNamesType =
	| "Anti-Mage"
	| "Axe"
	| "Bane"
	| "Bloodseeker"
	| "Crystal Maiden"
	| "Drow Ranger"
	| "Earthshaker"
	| "Juggernaut"
	| "Mirana"
	| "Morphling"
	| "Shadow Fiend"
	| "Phantom Lancer"
	| "Puck"
	| "Pudge"
	| "Razor"
	| "Sand King"
	| "Storm Spirit"
	| "Sven"
	| "Tiny"
	| "Vengeful Spirit"
	| "Windranger"
	| "Zeus"
	| "Kunkka"
	| "Lina"
	| "Lion"
	| "Shadow Shaman"
	| "Slardar"
	| "Tidehunter"
	| "Witch Doctor"
	| "Lich"
	| "Riki"
	| "Enigma"
	| "Tinker"
	| "Sniper"
	| "Necrophos"
	| "Warlock"
	| "Beastmaster"
	| "Queen of Pain"
	| "Venomancer"
	| "Faceless Void"
	| "Wraith King"
	| "Death Prophet"
	| "Phantom Assassin"
	| "Pugna"
	| "Templar Assassin"
	| "Viper"
	| "Luna"
	| "Dragon Knight"
	| "Dazzle"
	| "Clockwerk"
	| "Leshrac"
	| "Nature's Prophet"
	| "Lifestealer"
	| "Dark Seer"
	| "Clinkz"
	| "Omniknight"
	| "Enchantress"
	| "Huskar"
	| "Night Stalker"
	| "Broodmother"
	| "Bounty Hunter"
	| "Weaver"
	| "Jakiro"
	| "Batrider"
	| "Chen"
	| "Spectre"
	| "Ancient Apparition"
	| "Doom"
	| "Ursa"
	| "Spirit Breaker"
	| "Gyrocopter"
	| "Alchemist"
	| "Invoker"
	| "Silencer"
	| "Outworld Destroyer"
	| "Lycan"
	| "Brewmaster"
	| "Shadow Demon"
	| "Lone Druid"
	| "Chaos Knight"
	| "Meepo"
	| "Treant Protector"
	| "Ogre Magi"
	| "Undying"
	| "Rubick"
	| "Disruptor"
	| "Nyx Assassin"
	| "Naga Siren"
	| "Keeper of the Light"
	| "Io"
	| "Visage"
	| "Slark"
	| "Medusa"
	| "Troll Warlord"
	| "Centaur Warrunner"
	| "Magnus"
	| "Timbersaw"
	| "Bristleback"
	| "Tusk"
	| "Skywrath Mage"
	| "Abaddon"
	| "Elder Titan"
	| "Legion Commander"
	| "Techies"
	| "Ember Spirit"
	| "Earth Spirit"
	| "Underlord"
	| "Terrorblade"
	| "Phoenix"
	| "Oracle"
	| "Winter Wyvern"
	| "Arc Warden"
	| "Monkey King"
	| "Dark Willow"
	| "Pangolier"
	| "Grimstroke"
	| "Hoodwink"
	| "Void Spirit"
	| "Snapfire"
	| "Mars"
	| "Dawnbreaker"
	| "Marci"
	| "Primal Beast"
	| "Muerta";

const allHeroes: Hero[] = [
	{
		displayName: "Anti-Mage",
		npc: "antimage",
		hero_id: 1,
	},
	{
		displayName: "Axe",
		npc: "axe",
		hero_id: 2,
	},
	{
		displayName: "Bane",
		npc: "bane",
		hero_id: 3,
	},
	{
		displayName: "Bloodseeker",
		npc: "bloodseeker",
		hero_id: 4,
	},
	{
		displayName: "Crystal Maiden",
		npc: "crystal_maiden",
		hero_id: 5,
	},
	{
		displayName: "Drow Ranger",
		npc: "drow_ranger",
		hero_id: 6,
	},
	{
		displayName: "Earthshaker",
		npc: "earthshaker",
		hero_id: 7,
	},
	{
		displayName: "Juggernaut",
		npc: "juggernaut",
		hero_id: 8,
	},
	{
		displayName: "Mirana",
		npc: "mirana",
		hero_id: 9,
	},
	{
		displayName: "Morphling",
		npc: "morphling",
		hero_id: 10,
	},
	{
		displayName: "Shadow Fiend",
		npc: "nevermore",
		hero_id: 11,
	},
	{
		displayName: "Phantom Lancer",
		npc: "phantom_lancer",
		hero_id: 12,
	},
	{
		displayName: "Puck",
		npc: "puck",
		hero_id: 13,
	},
	{
		displayName: "Pudge",
		npc: "pudge",
		hero_id: 14,
	},
	{
		displayName: "Razor",
		npc: "razor",
		hero_id: 15,
	},
	{
		displayName: "Sand King",
		npc: "sand_king",
		hero_id: 16,
	},
	{
		displayName: "Storm Spirit",
		npc: "storm_spirit",
		hero_id: 17,
	},
	{
		displayName: "Sven",
		npc: "sven",
		hero_id: 18,
	},
	{
		displayName: "Tiny",
		npc: "tiny",
		hero_id: 19,
	},
	{
		displayName: "Vengeful Spirit",
		npc: "vengefulspirit",
		hero_id: 20,
	},
	{
		displayName: "Windranger",
		npc: "windrunner",
		hero_id: 21,
	},
	{
		displayName: "Zeus",
		npc: "zuus",
		hero_id: 22,
	},
	{
		displayName: "Kunkka",
		npc: "kunkka",
		hero_id: 23,
	},
	{
		displayName: "Lina",
		npc: "lina",
		hero_id: 25,
	},
	{
		displayName: "Lion",
		npc: "lion",
		hero_id: 26,
	},
	{
		displayName: "Shadow Shaman",
		npc: "shadow_shaman",
		hero_id: 27,
	},
	{
		displayName: "Slardar",
		npc: "slardar",
		hero_id: 28,
	},
	{
		displayName: "Tidehunter",
		npc: "tidehunter",
		hero_id: 29,
	},
	{
		displayName: "Witch Doctor",
		npc: "witch_doctor",
		hero_id: 30,
	},
	{
		displayName: "Lich",
		npc: "lich",
		hero_id: 31,
	},
	{
		displayName: "Riki",
		npc: "riki",
		hero_id: 32,
	},
	{
		displayName: "Enigma",
		npc: "enigma",
		hero_id: 33,
	},
	{
		displayName: "Tinker",
		npc: "tinker",
		hero_id: 34,
	},
	{
		displayName: "Sniper",
		npc: "sniper",
		hero_id: 35,
	},
	{
		displayName: "Necrophos",
		npc: "necrolyte",
		hero_id: 36,
	},
	{
		displayName: "Warlock",
		npc: "warlock",
		hero_id: 37,
	},
	{
		displayName: "Beastmaster",
		npc: "beastmaster",
		hero_id: 38,
	},
	{
		displayName: "Queen of Pain",
		npc: "queenofpain",
		hero_id: 39,
	},
	{
		displayName: "Venomancer",
		npc: "venomancer",
		hero_id: 40,
	},
	{
		displayName: "Faceless Void",
		npc: "faceless_void",
		hero_id: 41,
	},
	{
		displayName: "Wraith King",
		npc: "skeleton_king",
		hero_id: 42,
	},
	{
		displayName: "Death Prophet",
		npc: "death_prophet",
		hero_id: 43,
	},
	{
		displayName: "Phantom Assassin",
		npc: "phantom_assassin",
		hero_id: 44,
	},
	{
		displayName: "Pugna",
		npc: "pugna",
		hero_id: 45,
	},
	{
		displayName: "Templar Assassin",
		npc: "templar_assassin",
		hero_id: 46,
	},
	{
		displayName: "Viper",
		npc: "viper",
		hero_id: 47,
	},
	{
		displayName: "Luna",
		npc: "luna",
		hero_id: 48,
	},
	{
		displayName: "Dragon Knight",
		npc: "dragon_knight",
		hero_id: 49,
	},
	{
		displayName: "Dazzle",
		npc: "dazzle",
		hero_id: 50,
	},
	{
		displayName: "Clockwerk",
		npc: "rattletrap",
		hero_id: 51,
	},
	{
		displayName: "Leshrac",
		npc: "leshrac",
		hero_id: 52,
	},
	{
		displayName: "Nature's Prophet",
		npc: "furion",
		hero_id: 53,
	},
	{
		displayName: "Lifestealer",
		npc: "life_stealer",
		hero_id: 54,
	},
	{
		displayName: "Dark Seer",
		npc: "dark_seer",
		hero_id: 55,
	},
	{
		displayName: "Clinkz",
		npc: "clinkz",
		hero_id: 56,
	},
	{
		displayName: "Omniknight",
		npc: "omniknight",
		hero_id: 57,
	},
	{
		displayName: "Enchantress",
		npc: "enchantress",
		hero_id: 58,
	},
	{
		displayName: "Huskar",
		npc: "huskar",
		hero_id: 59,
	},
	{
		displayName: "Night Stalker",
		npc: "night_stalker",
		hero_id: 60,
	},
	{
		displayName: "Broodmother",
		npc: "broodmother",
		hero_id: 61,
	},
	{
		displayName: "Bounty Hunter",
		npc: "bounty_hunter",
		hero_id: 62,
	},
	{
		displayName: "Weaver",
		npc: "weaver",
		hero_id: 63,
	},
	{
		displayName: "Jakiro",
		npc: "jakiro",
		hero_id: 64,
	},
	{
		displayName: "Batrider",
		npc: "batrider",
		hero_id: 65,
	},
	{
		displayName: "Chen",
		npc: "chen",
		hero_id: 66,
	},
	{
		displayName: "Spectre",
		npc: "spectre",
		hero_id: 67,
	},
	{
		displayName: "Ancient Apparition",
		npc: "ancient_apparition",
		hero_id: 68,
	},
	{
		displayName: "Doom",
		npc: "doom_bringer",
		hero_id: 69,
	},
	{
		displayName: "Ursa",
		npc: "ursa",
		hero_id: 70,
	},
	{
		displayName: "Spirit Breaker",
		npc: "spirit_breaker",
		hero_id: 71,
	},
	{
		displayName: "Gyrocopter",
		npc: "gyrocopter",
		hero_id: 72,
	},
	{
		displayName: "Alchemist",
		npc: "alchemist",
		hero_id: 73,
	},
	{
		displayName: "Invoker",
		npc: "invoker",
		hero_id: 74,
	},
	{
		displayName: "Silencer",
		npc: "silencer",
		hero_id: 75,
	},
	{
		displayName: "Outworld Destroyer",
		npc: "obsidian_destroyer",
		hero_id: 76,
	},
	{
		displayName: "Lycan",
		npc: "lycan",
		hero_id: 77,
	},
	{
		displayName: "Brewmaster",
		npc: "brewmaster",
		hero_id: 78,
	},
	{
		displayName: "Shadow Demon",
		npc: "shadow_demon",
		hero_id: 79,
	},
	{
		displayName: "Lone Druid",
		npc: "lone_druid",
		hero_id: 80,
	},
	{
		displayName: "Chaos Knight",
		npc: "chaos_knight",
		hero_id: 81,
	},
	{
		displayName: "Meepo",
		npc: "meepo",
		hero_id: 82,
	},
	{
		displayName: "Treant Protector",
		npc: "treant",
		hero_id: 83,
	},
	{
		displayName: "Ogre Magi",
		npc: "ogre_magi",
		hero_id: 84,
	},
	{
		displayName: "Undying",
		npc: "undying",
		hero_id: 85,
	},
	{
		displayName: "Rubick",
		npc: "rubick",
		hero_id: 86,
	},
	{
		displayName: "Disruptor",
		npc: "disruptor",
		hero_id: 87,
	},
	{
		displayName: "Nyx Assassin",
		npc: "nyx_assassin",
		hero_id: 88,
	},
	{
		displayName: "Naga Siren",
		npc: "naga_siren",
		hero_id: 89,
	},
	{
		displayName: "Keeper of the Light",
		npc: "keeper_of_the_light",
		hero_id: 90,
	},
	{
		displayName: "Io",
		npc: "wisp",
		hero_id: 91,
	},
	{
		displayName: "Visage",
		npc: "visage",
		hero_id: 92,
	},
	{
		displayName: "Slark",
		npc: "slark",
		hero_id: 93,
	},
	{
		displayName: "Medusa",
		npc: "medusa",
		hero_id: 94,
	},
	{
		displayName: "Troll Warlord",
		npc: "troll_warlord",
		hero_id: 95,
	},
	{
		displayName: "Centaur Warrunner",
		npc: "centaur",
		hero_id: 96,
	},
	{
		displayName: "Magnus",
		npc: "magnataur",
		hero_id: 97,
	},
	{
		displayName: "Timbersaw",
		npc: "shredder",
		hero_id: 98,
	},
	{
		displayName: "Bristleback",
		npc: "bristleback",
		hero_id: 99,
	},
	{
		displayName: "Tusk",
		npc: "tusk",
		hero_id: 100,
	},
	{
		displayName: "Skywrath Mage",
		npc: "skywrath_mage",
		hero_id: 101,
	},
	{
		displayName: "Abaddon",
		npc: "abaddon",
		hero_id: 102,
	},
	{
		displayName: "Elder Titan",
		npc: "elder_titan",
		hero_id: 103,
	},
	{
		displayName: "Legion Commander",
		npc: "legion_commander",
		hero_id: 104,
	},
	{
		displayName: "Techies",
		npc: "techies",
		hero_id: 105,
	},
	{
		displayName: "Ember Spirit",
		npc: "ember_spirit",
		hero_id: 106,
	},
	{
		displayName: "Earth Spirit",
		npc: "earth_spirit",
		hero_id: 107,
	},
	{
		displayName: "Underlord",
		npc: "abyssal_underlord",
		hero_id: 108,
	},
	{
		displayName: "Terrorblade",
		npc: "terrorblade",
		hero_id: 109,
	},
	{
		displayName: "Phoenix",
		npc: "phoenix",
		hero_id: 110,
	},
	{
		displayName: "Oracle",
		npc: "oracle",
		hero_id: 111,
	},
	{
		displayName: "Winter Wyvern",
		npc: "winter_wyvern",
		hero_id: 112,
	},
	{
		displayName: "Arc Warden",
		npc: "arc_warden",
		hero_id: 113,
	},
	{
		displayName: "Monkey King",
		npc: "monkey_king",
		hero_id: 114,
	},
	{
		displayName: "Dark Willow",
		npc: "dark_willow",
		hero_id: 119,
	},
	{
		displayName: "Pangolier",
		npc: "pangolier",
		hero_id: 120,
	},
	{
		displayName: "Grimstroke",
		npc: "grimstroke",
		hero_id: 121,
	},
	{
		displayName: "Hoodwink",
		npc: "hoodwink",
		hero_id: 123,
	},
	{
		displayName: "Void Spirit",
		npc: "void_spirit",
		hero_id: 126,
	},
	{
		displayName: "Snapfire",
		npc: "snapfire",
		hero_id: 128,
	},
	{
		displayName: "Mars",
		npc: "mars",
		hero_id: 129,
	},
	{
		displayName: "Dawnbreaker",
		npc: "dawnbreaker",
		hero_id: 135,
	},
	{
		displayName: "Marci",
		npc: "marci",
		hero_id: 136,
	},
	{
		displayName: "Primal Beast",
		npc: "primal_beast",
		hero_id: 137,
	},
	{
		displayName: "Muerta",
		npc: "muerta",
		hero_id: 138,
	},
];
