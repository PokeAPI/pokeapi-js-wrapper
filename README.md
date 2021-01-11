# pokeapi-js-wrapper <a href="https://pokeapi.co/api/v2/pokemon/poliwrath"><img src='https://veekun.com/dex/media/pokemon/global-link/62.png' height=50px/></a>

[![npm](https://img.shields.io/npm/v/pokeapi-js-wrapper)](https://www.npmjs.com/package/pokeapi-js-wrapper)
[![Build Status](https://travis-ci.org/PokeAPI/pokeapi-js-wrapper.svg?branch=master)](https://travis-ci.org/PokeAPI/pokeapi-js-wrapper)
[![Mocha browser tests](https://img.shields.io/badge/test-browser-brightgreen.svg)](https://pokeapi.github.io/pokeapi-js-wrapper/test/test.html)
[![codecov](https://codecov.io/gh/PokeAPI/pokeapi-js-wrapper/branch/master/graph/badge.svg)](https://codecov.io/gh/PokeAPI/pokeapi-js-wrapper)

Maintainer: [Naramsim](https://github.com/Naramsim)

A PokeAPI wrapper intended for browsers only. Comes fully asynchronous (with [localForage](https://github.com/localForage/localForage)) and built-in cache. Offers also Image Caching through the inclusion of a Service Worker. _For a Node (server-side) wrapper see: [pokedex-promise-v2](https://github.com/PokeAPI/pokedex-promise-v2)_

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Usage](#usage)
  - [Example requests](#example-requests)
- [Configuration](#configuration)
  - [Caching images](#caching-images)
- [Tests](#tests)
- [Endpoints](#endpoints)
  - [Root Endpoints list](#root-endpoints-list)
  - [Custom URLs and paths](#custom-urls-and-paths)
- [Internet Explorer 8](#internet-explorer-8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
✔ | ✔ | ✔ | ✔ | ✔ | [8+](#internet-explorer-8) ✔ |

```sh
npm install pokeapi-js-wrapper --save
```

```html
<script src="https://unpkg.com/pokeapi-js-wrapper/dist/index.js"></script>
```

## Usage

```js
const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()
```

```html
<script>
  const P = new Pokedex.Pokedex()
</script>
```

### [Example](https://jsbin.com/jedakor/5/edit?html,console) requests

```js
// with await, be sure to be in an async function (and in a try/catch)
(async () => {
  const golduck = await P.getPokemonByName("golduck")
  console.log(golduck)
})()

// or with Promises
P.getPokemonByName("eevee")
  .then(function(response) {
    console.log(response)
  })

P.resource([
  "/api/v2/pokemon/36",
  "api/v2/berry/8",
  "https://pokeapi.co/api/v2/ability/9/",
]).then( response => {
  console.log(response)
})
```

## Configuration

Pass an Object to `Pokedex()` in order to configure it. Available options: `protocol`, `hostName`, `versionPath`, `cache`, `timeout`(ms), and `cacheImages`.
Any option is optional :smile:. All the default values can be found [here](https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/src/config.js#L3-L10)

```js
const Pokedex = require("pokeapi-js-wrapper")
const customOptions = {
  protocol: "https",
  hostName: "localhost:443",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
  cacheImages: true
}
const P = new Pokedex.Pokedex(customOptions)
```

### Caching images

Pokeapi.co serves its Pokemon images through [Github](https://github.com/PokeAPI/sprites). For example, the front default DreamWorld image of Pikachu is found at this URL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg`.

`pokeapi-js-wrapper` enables browsers to cache all these images by:

  1. enabling the config parameter `cacheImages`
  2. serving [our service worker](https://raw.githubusercontent.com/PokeAPI/pokeapi-js-wrapper/master/dist/pokeapi-js-wrapper-sw.js) from the root of your project

In this way when `pokeapi-js-wrapper`'s `Pokedex` is created it will install and start the Service Worker you are serving at the root of your server. The Service Worker will intercept all the calls your HTML/CSS/JS are making to get PokeAPI's images and will cache them.

It's fundamental that you download the Service Worker [we provide](https://raw.githubusercontent.com/PokeAPI/pokeapi-js-wrapper/master/dist/pokeapi-js-wrapper-sw.js)_(Right Click + Save As)_ and you serve it from the root of your project/server. Service Workers in fact cannot be installed from a domain different than yours.

A [basic example](https://github.com/PokeAPI/pokeapi-js-wrapper/blob/master/test/example-sw.html) is hosted [here](https://pokeapi.github.io/pokeapi-js-wrapper/test/example-sw.html).

## Tests

`pokeapi-js-wrapper` can be tested using two strategies. One is with Node, since this package works with Node (although not recommended), and the other with a browser.

```js
npm test
```

Or open `/test/test.html` in your browser. A live version can be found at [`gh-pages`](https://pokeapi.github.io/pokeapi-js-wrapper/test/test.html)

## Endpoints

All the endpoints and the functions to access PokeAPI's endpoints are listed in the long table below. Each function `.ByName(name)` accepts names and ids. The only 5 functions `.ById(id)` only accept ids. You can also pass an array to each function, it will retrieve the data for each element asynchronously.

```js
P.getPokemonByName("eevee").then(function(response) {
  console.log(response)
})

P.getPokemonSpeciesByName(25).then(function(response) {
  console.log(response)
})

P.getBerryByName(["cheri", "chesto", 5]).then(function(response) {
  // `response` will be an Array containing 3 Objects
  // response.forEach((item) => {console.log(item.size)}) // 80,50,20
  console.log(response)
})

P.getMachineById(3).then(function(response) {
  console.log(response)
})
```

| Function | Mapped PokeAPI endpoint | Documentation |
| --- | --- | --- |
| `getBerryByName(name)` | [/berry/:name](https://pokeapi.co/api/v2/berry/:name/) | [Documentation](https://pokeapi.co/docs/v2#berries) |
| `getBerryFirmnessByName(name)` | [/berry-firmness/:name](https://pokeapi.co/api/v2/berry-firmness/:name/) | [Documentation](https://pokeapi.co/docs/v2#berry-firmnesses) |
| `getBerryFlavorByName(name)` | [/berry-flavor/:name](https://pokeapi.co/api/v2/berry-flavor/:name/) | [Documentation](https://pokeapi.co/docs/v2#berry-flavors) |
| `getContestTypeByName(name)` | [/contest-type/:name](https://pokeapi.co/api/v2/contest-type/:name/) | [Documentation](https://pokeapi.co/docs/v2#contest-types) |
| `getContestEffectById(id)` | [/contest-effect/:id](https://pokeapi.co/api/v2/contest-effect/:id/) | [Documentation](https://pokeapi.co/docs/v2#contest-effects) |
| `getSuperContestEffectById(id)` | [/super-contest-effect/:id](https://pokeapi.co/api/v2/super-contest-effect/:id/) | [Documentation](https://pokeapi.co/docs/v2#super-contest-effects) |
| `getEncounterMethodByName(name)` | [/encounter-method/:name](https://pokeapi.co/api/v2/encounter-method/:name/) | [Documentation](https://pokeapi.co/docs/v2#encounter-methods) |
| `getEncounterConditionByName(name)` | [/encounter-condition/:name](https://pokeapi.co/api/v2/encounter-condition/:name/) | [Documentation](https://pokeapi.co/docs/v2#encounter-conditions) |
| `getEncounterConditionValueByName(name)` | [/encounter-condition-value/:nam/](https://pokeapi.co/api/v2/encounter-condition-value/:name/) | [Documentation](https://pokeapi.co/docs/v2#encounter-condition-values) |
| `getEvolutionChainById(id)` | [/evolution-chain/:id](https://pokeapi.co/api/v2/evolution-chain/:id/) | [Documentation](https://pokeapi.co/docs/v2#evolution-chains) |
| `getEvolutionTriggerByName(name)` | [/evolution-trigger/:name](https://pokeapi.co/api/v2/evolution-trigger/:name/) | [Documentation](https://pokeapi.co/docs/v2#evolution-triggers) |
| `getGenerationByName(name)` | [/generation/:name](https://pokeapi.co/api/v2/generation/:name/) | [Documentation](https://pokeapi.co/docs/v2#generations) |
| `getPokedexByName(name)` | [/pokedex/:name](https://pokeapi.co/api/v2/pokedex/:name/) | [Documentation](https://pokeapi.co/docs/v2#pokedexes) |
| `getVersionByName(name)` | [/version/:name](https://pokeapi.co/api/v2/version/:name/) | [Documentation](https://pokeapi.co/docs/v2#version) |
| `getVersionGroupByName(name)` | [/version-group/:name](https://pokeapi.co/api/v2/version-group/:name/) | [Documentation](https://pokeapi.co/docs/v2#version-groups) |
| `getItemByName(name)` | [/item/:name](https://pokeapi.co/api/v2/item/:name/) | [Documentation](https://pokeapi.co/docs/v2#item) |
| `getItemAttributeByName(name)` | [/item-attribute/:name](https://pokeapi.co/api/v2/item-attribute/:name/) | [Documentation](https://pokeapi.co/docs/v2#item-attributes) |
| `getItemCategoryByName(name)` | [/item-category/:name](https://pokeapi.co/api/v2/item-category/:name/) | [Documentation](https://pokeapi.co/docs/v2#item-categories) |
| `getItemFlingEffectByName(name)` | [/item-fling-effect/:name](https://pokeapi.co/api/v2/item-fling-effect/:name/) | [Documentation](https://pokeapi.co/docs/v2#item-fling-effects) |
| `getItemPocketByName(name)` | [/item-pocket/:name](https://pokeapi.co/api/v2/item-pocket/:name/) | [Documentation](https://pokeapi.co/docs/v2#item-pockets) |
| `getMachineById(id)` | [/machine/:id](https://pokeapi.co/api/v2/machine/:id/) | [Documentation](https://pokeapi.co/docs/v2#machines) |
| `getMoveByName(name)` | [/move/:name](https://pokeapi.co/api/v2/move/:name/) | [Documentation](https://pokeapi.co/docs/v2#moves) |
| `getMoveAilmentByName(name)` | [/move-ailment/:name](https://pokeapi.co/api/v2/move-ailment/:name/) | [Documentation](https://pokeapi.co/docs/v2#move-ailments) |
| `getMoveBattleStyleByName(name)` | [/move-battle-style/:name](https://pokeapi.co/api/v2/move-battle-style/:name/) | [Documentation](https://pokeapi.co/docs/v2#move-battle-styles) |
| `getMoveCategoryByName(name)` | [/move-category/:name](https://pokeapi.co/api/v2/move-category/:name/) | [Documentation](https://pokeapi.co/docs/v2#move-categories) |
| `getMoveDamageClassByName(name)` | [/move-damage-class/:name](https://pokeapi.co/api/v2/move-damage-class/:name/) | [Documentation](https://pokeapi.co/docs/v2#move-damage-classes) |
| `getMoveLearnMethodByName(name)` | [/move-learn-method/:name](https://pokeapi.co/api/v2/move-learn-method/:name/) | [Documentation](https://pokeapi.co/docs/v2#move-learn-methods) |
| `getMoveTargetByName(name)` | [/move-target/:name](https://pokeapi.co/api/v2/move-target/:name/) | [Documentation](https://pokeapi.co/docs/v2#move-targets) |
| `getLocationByName(name)` | [/location/:name](https://pokeapi.co/api/v2/location/:name/) | [Documentation](https://pokeapi.co/docs/v2#locations) |
| `getLocationAreaByName(name)` | [/location-area/:name](https://pokeapi.co/api/v2/location-area/:name/) | [Documentation](https://pokeapi.co/docs/v2#location-areas) |
| `getPalParkAreaByName(name)` | [/pal-park-area/:name](https://pokeapi.co/api/v2/pal-park-area/:name/) | [Documentation](https://pokeapi.co/docs/v2#pal-park-areas) |
| `getRegionByName(name)` | [/region/:name](https://pokeapi.co/api/v2/region/:name/) | [Documentation](https://pokeapi.co/docs/v2#regions) |
| `getAbilityByName(name)` | [/ability/:name](https://pokeapi.co/api/v2/ability/:name/) | [Documentation](https://pokeapi.co/docs/v2#abilities) |
| `getCharacteristicById(id)` | [/characteristic/:id](https://pokeapi.co/api/v2/characteristic/:id/) | [Documentation](https://pokeapi.co/docs/v2#characteristics) |
| `getEggGroupByName(name)` | [/egg-group/:name](https://pokeapi.co/api/v2/egg-group/:name/) | [Documentation](https://pokeapi.co/docs/v2#egg-groups) |
| `getGenderByName(name)` | [/gender/:name](https://pokeapi.co/api/v2/gender/:name/) | [Documentation](https://pokeapi.co/docs/v2#genders) |
| `getGrowthRateByName(name)` | [/growth-rate/:name](https://pokeapi.co/api/v2/growth-rate/:name/) | [Documentation](https://pokeapi.co/docs/v2#growth-rates) |
| `getNatureByName(name)` | [/nature/:name](https://pokeapi.co/api/v2/nature/:name/) | [Documentation](https://pokeapi.co/docs/v2#natures) |
| `getPokeathlonStatByName(name)` | [/pokeathlon-stat/:name](https://pokeapi.co/api/v2/pokeathlon-stat/:name/) | [Documentation](https://pokeapi.co/docs/v2#pokeathlon-stats) |
| `getPokemonByName(name)` | [/pokemon/:name](https://pokeapi.co/api/v2/pokemon/:name/) | [Documentation](https://pokeapi.co/docs/v2#pokemon) |
| `getPokemonEncounterAreasByName(name)` | [/pokemon/:name/encounters](https://pokeapi.co/api/v2/pokemon/:name/encounters/) | [Documentation](https://pokeapi.co/docs/v2#pokemon-location-areas) |
| `getPokemonColorByName(name)` | [/pokemon-color/:name](https://pokeapi.co/api/v2/pokemon-color/:name/) | [Documentation](https://pokeapi.co/docs/v2#pokemon-colors) |
| `getPokemonFormByName(name)` | [/pokemon-form/:name](https://pokeapi.co/api/v2/pokemon-form/:name/) | [Documentation](https://pokeapi.co/docs/v2#pokemon-forms) |
| `getPokemonHabitatByName(name)` | [/pokemon-habitat/:name](https://pokeapi.co/api/v2/pokemon-habitat/:name/) | [Documentation](https://pokeapi.co/docs/v2#pokemon-habitats) |
| `getPokemonShapeByName(name)` | [/pokemon-shape/:name](https://pokeapi.co/api/v2/pokemon-shape/:name/) | [Documentation](https://pokeapi.co/docs/v2#pokemon-shapes) |
| `getPokemonSpeciesByName(name)` | [/pokemon-species/:name](https://pokeapi.co/api/v2/pokemon-species/:name/) | [Documentation](https://pokeapi.co/docs/v2#pokemon-species) |
| `getStatByName(name)` | [/stat/:name](https://pokeapi.co/api/v2/stat/:name/) | [Documentation](https://pokeapi.co/docs/v2#stats) |
| `getTypeByName(name)` | [/type/:name](https://pokeapi.co/api/v2/type/:name/) | [Documentation](https://pokeapi.co/docs/v2#types) |
| `getLanguageByName(name)` | [/language/:name](https://pokeapi.co/api/v2/language/:name/) | [Documentation](https://pokeapi.co/docs/v2#languages) |

### Root Endpoints list

For each PokeAPI's root endpoint we provide a method to get all the items served by that endpoint. By default the method will return every item in the endpoint. If needed an offset and a limit can be configured.

- `offset` is where to start. The first item that you will get. Default `0`
- `limit` is how many items you want to list. Default `100000`

> **TIP**: Do not pass any config Object to your call, since you will get every item and everything will be cached

The following snippet will get the list of Pokémon between ID 34 and ID 44

```js
const interval = {
  offset: 34,
  limit: 10,
}
P.getPokemonsList(interval).then(function(response) {
  console.log(response)
})
```

<!--
This is what you will get:

```json
{
  "count": 1050,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=43&limit=10",
  "previous": "https://pokeapi.co/api/v2/pokemon/?offset=23&limit=10",
  "results": [
    {
      "name": "nidoking",
      "url": "https://pokeapi.co/api/v2/pokemon/34/"
    },
    {
      "name": "clefairy",
      "url": "https://pokeapi.co/api/v2/pokemon/35/"
    },
    // ...
    {
      "name": "golbat",
      "url": "https://pokeapi.co/api/v2/pokemon/42/"
    },
    {
      "name": "oddish",
      "url": "https://pokeapi.co/api/v2/pokemon/43/"
    }
  ]
}
```
-->

| Function | Mapped PokeAPI endpoint |
| --- | --- |
| `getEndpointsList()` | [/](https://pokeapi.co/api/v2/) |
| `getBerriesList()` | [/berry](https://pokeapi.co/api/v2/berry/) |
| `getBerriesFirmnesssList()` | [/berry-firmness](https://pokeapi.co/api/v2/berry-firmness/) |
| `getBerriesFlavorsList()` | [/berry-flavor](https://pokeapi.co/api/v2/berry-flavor/) |
| `getContestTypesList()` | [/contest-type](https://pokeapi.co/api/v2/contest-type/) |
| `getContestEffectsList()` | [/contest-effect](https://pokeapi.co/api/v2/contest-effect/) |
| `getSuperContestEffectsList()` | [/super-contest-effect](https://pokeapi.co/api/v2/super-contest-effect/) |
| `getEncounterMethodsList()` | [/encounter-method](https://pokeapi.co/api/v2/encounter-method/) |
| `getEncounterConditionsList()` | [/encounter-condition](https://pokeapi.co/api/v2/encounter-condition/) |
| `getEncounterConditionValuesList()` | [/encounter-condition-value](https://pokeapi.co/api/v2/encounter-condition-value/) |
| `getEvolutionChainsList()` | [/evolution-chain](https://pokeapi.co/api/v2/evolution-chain/) |
| `getEvolutionTriggersList()` | [/evolution-trigger](https://pokeapi.co/api/v2/evolution-trigger/) |
| `getGenerationsList()` | [/generation](https://pokeapi.co/api/v2/generation/) |
| `getPokedexsList()` | [/pokedex](https://pokeapi.co/api/v2/pokedex/) |
| `getVersionsList()` | [/version](https://pokeapi.co/api/v2/version/) |
| `getVersionGroupsList()` | [/version-group](https://pokeapi.co/api/v2/version-group/) |
| `getItemsList()` | [/item](https://pokeapi.co/api/v2/item/) |
| `getItemAttributesList()` | [/item-attribute](https://pokeapi.co/api/v2/item-attribute/) |
| `getItemCategoriesList()` | [/item-category](https://pokeapi.co/api/v2/item-category/) |
| `getItemFlingEffectsList()` | [/item-fling-effect](https://pokeapi.co/api/v2/item-fling-effect/) |
| `getItemPocketsList()` | [/item-pocket](https://pokeapi.co/api/v2/item-pocket/) |
| `getMachinesList()` | [/machine](https://pokeapi.co/api/v2/machine/) |
| `getMovesList()` | [/move](https://pokeapi.co/api/v2/move/) |
| `getMoveAilmentsList()` | [/move-ailment](https://pokeapi.co/api/v2/move-ailment/) |
| `getMoveBattleStylesList()` | [/move-battle-style](https://pokeapi.co/api/v2/move-battle-style/) |
| `getMoveCategoriesList()` | [/move-category](https://pokeapi.co/api/v2/move-category/) |
| `getMoveDamageClassesList()` | [/move-damage-class](https://pokeapi.co/api/v2/move-damage-class/) |
| `getMoveLearnMethodsList()` | [/move-learn-method](https://pokeapi.co/api/v2/move-learn-method/) |
| `getMoveTargetsList()` | [/move-target](https://pokeapi.co/api/v2/move-target/) |
| `getLocationsList()` | [/location](https://pokeapi.co/api/v2/location/) |
| `getLocationAreasList()` | [/location-area](https://pokeapi.co/api/v2/location-area/) |
| `getPalParkAreasList()` | [/pal-park-area](https://pokeapi.co/api/v2/pal-park-area/) |
| `getRegionsList()` | [/region](https://pokeapi.co/api/v2/region/) |
| `getAbilitiesList()` | [/ability](https://pokeapi.co/api/v2/ability/) |
| `getCharacteristicsList()` | [/characteristic](https://pokeapi.co/api/v2/characteristic/) |
| `getEggGroupsList()` | [/egg-group](https://pokeapi.co/api/v2/egg-group/) |
| `getGendersList()` | [/gender](https://pokeapi.co/api/v2/gender/) |
| `getGrowthRatesList()` | [/growth-rate](https://pokeapi.co/api/v2/growth-rate/) |
| `getNaturesList()` | [/nature](https://pokeapi.co/api/v2/nature/) |
| `getPokeathlonStatsList()` | [/pokeathlon-stat](https://pokeapi.co/api/v2/pokeathlon-stat/) |
| `getPokemonsList()` | [/pokemon](https://pokeapi.co/api/v2/pokemon/) |
| `getPokemonColorsList()` | [/pokemon-color](https://pokeapi.co/api/v2/pokemon-color/) |
| `getPokemonFormsList()` | [/pokemon-form](https://pokeapi.co/api/v2/pokemon-form/) |
| `getPokemonHabitatsList()` | [/pokemon-habitat](https://pokeapi.co/api/v2/pokemon-habitat/) |
| `getPokemonShapesList()` | [/pokemon-shape](https://pokeapi.co/api/v2/pokemon-shape/) |
| `getPokemonSpeciesList()` | [/pokemon-species](https://pokeapi.co/api/v2/pokemon-species/) |
| `getStatsList()` | [/stat](https://pokeapi.co/api/v2/stat/) |
| `getTypesList()` | [/type](https://pokeapi.co/api/v2/type/) |
| `getLanguagesList()` | [/language](https://pokeapi.co/api/v2/language/) |

### Custom URLs and paths

Use `.resource()` to query any URL or path. Also this function accepts both single values and Arrays.

```js
P.resource([
  "/api/v2/pokemon/36",
  "api/v2/berry/8",
  "https://pokeapi.co/api/v2/ability/9/",
]).then(function(response) {
  console.log(response)
})

P.resource("api/v2/berry/5").then(function(response) {
  console.log(response)
})
```

## Internet Explorer 8

In order to target this browser you must load a `Promise` polyfill before `pokeapi-js-wrapper`. You can choose one of your choice, we recommend [jakearchibald/es6-promise](https://cdnjs.com/libraries/es6-promise) or [stefanpenner/es6-promise](https://github.com/stefanpenner/es6-promise)
