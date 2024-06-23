# d2pt.js

## 📃 About

<a href="https://dota2protracker.com"><img src="https://dota2protracker.com/static/svg/logo_mark.svg" align="right" width="200px"/></a>
📦 A Minimalistic Node.js DOTA PRO TRACKER SCRAPER

- [x] Get all meta heroes
- [x] Get espefic hero

### Features

- Scraping espefic information from [DOTA2 PRO TRACKER](https://dota2protracker.com/hero)
  - Meta hero
  - Hero info

## Installation

**Node.js 18 or newer is required.**

Install it locally in your project folder:

```bash
npm install d2pt.js
# Or Yarn
yarn add d2pt.js
# Or pnpm
pnpm add d2pt.js
```

## Example

Firstly, create an instance of the main class:

```javascript
const { D2PtScraper } = require("d2pt.js");
// this library supports both CJS and ESM modules:
// import { D2PtScraper } from 'd2pt.js';

const d2pt = new D2PtScraper();
```

All methods will return a **promise**. Be sure to handle them accordingly, for example:

```javascript
// Use "then" syntax
d2pt
 .getHeroesMeta("MID")
 .then((result) => {
  console.log(result);
 })
 .catch((error) => {
  console.error("Error:", error);
 });

// Use acync/await syntax
async function getMetaheroes() {
 const result = await d2pt.getHeroesMeta("MID");
 console.log(result);
}

// Will return:
// {
//   role: 'pos 1',
//   name: 'Templar Assassin',
//   matches: '2829',
//   winRate: '0.537',
//   winRate9500: '0.535',
//   contestRate: '0.5962534336020174',
//   rating: '3570',
//   radiantWinRate: '0.544',
//   direWinRate: '0.53',
//   expertWinRate: '0.588',
//   phase1WinRate: '0.497',
//   phase2WinRate: '0.531',
//   phase3WinRate: '0.583',
//   networth: '4668'
// },
//...

// Handling queryParameters
d2pt
 .getMetaheroes("MID", { max_result: 10 }) // in a form of an object
 .then((result) => {
  console.log(result);
 })
 .catch((err) => {
  console.log(err);
 });
```

## Development

First of all, clone the repository and install dev-dependencies with `npm install` (or `pnpm install` or `yarn install`).

```bash
# launch tests
npm run test
```

## Building

You can create a production version of the library with the following command.

In case if you want only to either compile or make the documentation file:

```bash
# for compilation
npm run build
```

## 💰 Support

Not required but if you want... then by all means gib me ur cash please 💰 🔫

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/gabriel.dev/)

## 👷‍♂️ Creator

[![Contributors](https://contrib.rocks/image?repo=GabrielCSTR/dota2protracker-scraper)](https://github.com/GabrielCSTR)

[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/gbrl_str) [![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?style=flat-square&logo=Twitch&logoColor=white)](https://twitch.tv/xstrdoto)

Made with 💖 and JavaScript!

## License

[MIT](https://github.com/GabrielCSTR/d2pt.js/blob/master/LICENSE)

_This project is not affiliated with [DOTA2 PRO TRACKER](https://dota2protracker.com/meta) in any way._
