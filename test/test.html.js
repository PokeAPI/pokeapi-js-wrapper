import { Pokedex } from '../src/index.js';

mocha.setup('bdd');
const expect = chai.expect;
let P, defaultP, customP;

describe("service worker", function () {
  this.timeout(10000);

  before(async function() {
    P = await Pokedex.init({ cacheImages: true });
  });

  it("should be activated on second run", async function () {
    const registrations = await navigator.serviceWorker.getRegistrations();
    const sw = registrations.filter(serviceworker =>
      serviceworker.active.scriptURL.endsWith('pokeapi-js-wrapper-sw.js')
    );
    expect(sw).to.have.lengthOf(1);
    expect(sw[0].active.state).to.be.equal('activated');
  });
});

describe("pokedex", function () {
  this.timeout(30000);

  var id = 2;

  before(async function() {
    defaultP = await Pokedex.init();
    customP = await Pokedex.init({
      protocol: 'https',
      offset: 10,
      limit: 1,
      timeout: 10000,
      cache: false,
      cacheImages: false
    });
  });

  // --- Resource Methods ---

  describe(".resource(Mixed: array) not cached", function () {
    it("should have property name", async function () {
      const res = await customP.resource(['pokemon/37', '/pokemon/36', '/berry/8', 'https://pokeapi.co/api/v2/ability/9/']);
      expect(res[0]).to.have.property('name');
      expect(res[1]).to.have.property('name');
      expect(res[2]).to.have.property('name');
      expect(res[3]).to.have.property('name');
    });
  });

  describe(".resource(Path: string)", function () {
    it("should have property height", async function () {
      const res = await defaultP.resource('pokemon/34');
      expect(res).to.have.property('height');
    });
  });

  describe(".resource(Url: string)", function () {
    it("should have property height", async function () {
      const res = await defaultP.resource('https://pokeapi.co/api/v2/pokemon/400');
      expect(res).to.have.property('height');
    });
  });

  // --- Root Endpoints ---

  describe("Root Endpoints List", function() {
    it(".getEndpointsList()", async () => expect(await defaultP.getEndpointsList()).to.have.property("pokedex"));
    it(".getBerriesList()", async () => expect(await defaultP.getBerriesList()).to.have.property("count"));
    it(".getBerriesFirmnesssList()", async () => expect(await defaultP.getBerriesFirmnesssList()).to.have.property("count"));
    it(".getBerriesFlavorsList()", async () => expect(await defaultP.getBerriesFlavorsList()).to.have.property("count"));
    it(".getContestTypesList()", async () => expect(await defaultP.getContestTypesList()).to.have.property("count"));
    it(".getContestEffectsList()", async () => expect(await defaultP.getContestEffectsList()).to.have.property("count"));
    it(".getSuperContestEffectsList()", async () => expect(await defaultP.getSuperContestEffectsList()).to.have.property("count"));
    it(".getEncounterMethodsList()", async () => expect(await defaultP.getEncounterMethodsList()).to.have.property("count"));
    it(".getEncounterConditionsList()", async () => expect(await defaultP.getEncounterConditionsList()).to.have.property("count"));
    it(".getEncounterConditionValuesList()", async () => expect(await defaultP.getEncounterConditionValuesList()).to.have.property("count"));
    it(".getEvolutionChainsList()", async () => expect(await defaultP.getEvolutionChainsList()).to.have.property("count"));
    it(".getEvolutionTriggersList()", async () => expect(await defaultP.getEvolutionTriggersList()).to.have.property("count"));
    it(".getGenerationsList()", async () => expect(await defaultP.getGenerationsList()).to.have.property("count"));
    it(".getPokedexsList()", async () => expect(await defaultP.getPokedexsList()).to.have.property("count"));
    it(".getVersionsList()", async () => expect(await defaultP.getVersionsList()).to.have.property("count"));
    it(".getVersionGroupsList()", async () => expect(await defaultP.getVersionGroupsList()).to.have.property("count"));
    it(".getItemsList()", async () => expect(await defaultP.getItemsList()).to.have.property("count"));
    it(".getItemAttributesList()", async () => expect(await defaultP.getItemAttributesList()).to.have.property("count"));
    it(".getItemCategoriesList()", async () => expect(await defaultP.getItemCategoriesList()).to.have.property("count"));
    it(".getItemFlingEffectsList()", async () => expect(await defaultP.getItemFlingEffectsList()).to.have.property("count"));
    it(".getItemPocketsList()", async () => expect(await defaultP.getItemPocketsList()).to.have.property("count"));
    it(".getMachinesList()", async () => expect(await defaultP.getMachinesList()).to.have.property("count"));
    it(".getMovesList()", async () => expect(await defaultP.getMovesList()).to.have.property("count"));
    it(".getMoveAilmentsList()", async () => expect(await defaultP.getMoveAilmentsList()).to.have.property("count"));
    it(".getMoveBattleStylesList()", async () => expect(await defaultP.getMoveBattleStylesList()).to.have.property("count"));
    it(".getMoveCategoriesList()", async () => expect(await defaultP.getMoveCategoriesList()).to.have.property("count"));
    it(".getMoveDamageClassesList()", async () => expect(await defaultP.getMoveDamageClassesList()).to.have.property("count"));
    it(".getMoveLearnMethodsList()", async () => expect(await defaultP.getMoveLearnMethodsList()).to.have.property("count"));
    it(".getMoveTargetsList()", async () => expect(await defaultP.getMoveTargetsList()).to.have.property("count"));
    it(".getLocationsList()", async () => expect(await defaultP.getLocationsList()).to.have.property("count"));
    it(".getLocationAreasList()", async () => expect(await defaultP.getLocationAreasList()).to.have.property("count"));
    it(".getPalParkAreasList()", async () => expect(await defaultP.getPalParkAreasList()).to.have.property("count"));
    it(".getRegionsList()", async () => expect(await defaultP.getRegionsList()).to.have.property("count"));
    it(".getAbilitiesList()", async () => expect(await defaultP.getAbilitiesList()).to.have.property("count"));
    it(".getCharacteristicsList()", async () => expect(await defaultP.getCharacteristicsList()).to.have.property("count"));
    it(".getEggGroupsList()", async () => expect(await defaultP.getEggGroupsList()).to.have.property("count"));
    it(".getGendersList()", async () => expect(await defaultP.getGendersList()).to.have.property("count"));
    it(".getGrowthRatesList()", async () => expect(await defaultP.getGrowthRatesList()).to.have.property("count"));
    it(".getNaturesList()", async () => expect(await defaultP.getNaturesList()).to.have.property("count"));
    it(".getPokeathlonStatsList()", async () => expect(await defaultP.getPokeathlonStatsList()).to.have.property("count"));
    it(".getPokemonsList()", async () => expect(await defaultP.getPokemonsList()).to.have.property("count"));
    it(".getPokemonColorsList()", async () => expect(await defaultP.getPokemonColorsList()).to.have.property("count"));
    it(".getPokemonFormsList()", async () => expect(await defaultP.getPokemonFormsList()).to.have.property("count"));
    it(".getPokemonHabitatsList()", async () => expect(await defaultP.getPokemonHabitatsList()).to.have.property("count"));
    it(".getPokemonShapesList()", async () => expect(await defaultP.getPokemonShapesList()).to.have.property("count"));
    it(".getPokemonSpeciesList()", async () => expect(await defaultP.getPokemonSpeciesList()).to.have.property("count"));
    it(".getStatsList()", async () => expect(await defaultP.getStatsList()).to.have.property("count"));
    it(".getTypesList()", async () => expect(await defaultP.getTypesList()).to.have.property("count"));
    it(".getLanguagesList()", async () => expect(await defaultP.getLanguagesList()).to.have.property("count"));
  });

  // --- Normal Data Calls ---

  describe("Data Retrieval by Name/ID", function() {
    it(".getBerryByName(Array: string)", async function() {
      const res = await defaultP.getBerryByName(['cheri', 'chesto', 'pecha']);
      expect(res).to.have.length(3);
    });

    it(".getBerryByName(Array: int)", async function () {
      const res = await defaultP.getBerryByName([1, 3, 5]);
      expect(res).to.have.length(3);
    });

    it(".getPokemonByName(Array: int)", async function() {
      const res = await defaultP.getPokemonByName([15, 35, 433, 444]);
      expect(res).to.have.length(4);
    });

    it(".getBerryByName(Id: int)", async function() {
      const res = await defaultP.getBerryByName(id);
      expect(res).to.have.property("name");
    });

    it(".getBerryFirmnessByName(Id: int)", async function() {
      const res = await defaultP.getBerryFirmnessByName(id);
      expect(res).to.have.property("name");
    });

    it(".getBerryFlavorByName(Id: int)", async function() {
      const res = await defaultP.getBerryFlavorByName(id);
      expect(res).to.have.property("name");
    });

    it(".getContestTypeByName(Id: int)", async function() {
      const res = await defaultP.getContestTypeByName(id);
      expect(res).to.have.property("name");
    });

    it(".getContestEffectById(Id: int)", async function() {
      const res = await defaultP.getContestEffectById(id);
      expect(res).to.have.property("id");
    });

    it(".getSuperContestEffectById(Id: int)", async function() {
      const res = await defaultP.getSuperContestEffectById(id);
      expect(res).to.have.property("id");
    });

    it(".getEncounterMethodByName(Id: int)", async function() {
      const res = await defaultP.getEncounterMethodByName(id);
      expect(res).to.have.property("name");
    });

    it(".getEncounterConditionByName(Id: int)", async function() {
      const res = await defaultP.getEncounterConditionByName(id);
      expect(res).to.have.property("name");
    });

    it(".getEncounterConditionValueByName(Id: int)", async function() {
      const res = await defaultP.getEncounterConditionValueByName(id);
      expect(res).to.have.property("name");
    });

    it(".getEvolutionChainById(Id: int)", async function() {
      const res = await defaultP.getEvolutionChainById(id);
      expect(res).to.have.property("id");
    });

    it(".getEvolutionTriggerByName(Id: int)", async function() {
      const res = await defaultP.getEvolutionTriggerByName(id);
      expect(res).to.have.property("name");
    });

    it(".getGenerationByName(Id: int)", async function() {
      const res = await defaultP.getGenerationByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPokedexByName(Id: int)", async function() {
      const res = await defaultP.getPokedexByName(id);
      expect(res).to.have.property("name");
    });

    it(".getVersionByName(Id: int)", async function() {
      const res = await defaultP.getVersionByName(id);
      expect(res).to.have.property("name");
    });

    it(".getVersionGroupByName(Id: int)", async function() {
      const res = await defaultP.getVersionGroupByName(id);
      expect(res).to.have.property("name");
    });

    it(".getItemByName(Id: int)", async function() {
      const res = await defaultP.getItemByName(id);
      expect(res).to.have.property("name");
    });

    it(".getItemAttributeByName(Id: int)", async function() {
      const res = await defaultP.getItemAttributeByName(id);
      expect(res).to.have.property("name");
    });

    it(".getItemCategoryByName(Id: int)", async function() {
      const res = await defaultP.getItemCategoryByName(id);
      expect(res).to.have.property("name");
    });

    it(".getItemFlingEffectByName(Id: int)", async function() {
      const res = await defaultP.getItemFlingEffectByName(id);
      expect(res).to.have.property("name");
    });

    it(".getItemPocketByName(Id: int)", async function() {
      const res = await defaultP.getItemPocketByName(id);
      expect(res).to.have.property("name");
    });

    it(".getMachineById(Id: int)", async function() {
      const res = await defaultP.getMachineById(id);
      expect(res).to.have.property("id");
    });

    it(".getMoveByName(Id: int)", async function() {
      const res = await defaultP.getMoveByName(id);
      expect(res).to.have.property("name");
    });

    it(".getMoveAilmentByName(Id: int)", async function() {
      const res = await defaultP.getMoveAilmentByName(id);
      expect(res).to.have.property("name");
    });

    it(".getMoveBattleStyleByName(Id: int)", async function() {
      const res = await defaultP.getMoveBattleStyleByName(id);
      expect(res).to.have.property("name");
    });

    it(".getMoveCategoryByName(Id: int)", async function() {
      const res = await defaultP.getMoveCategoryByName(id);
      expect(res).to.have.property("name");
    });

    it(".getMoveDamageClassByName(Id: int)", async function() {
      const res = await defaultP.getMoveDamageClassByName(id);
      expect(res).to.have.property("name");
    });

    it(".getMoveTargetByName(Id: int)", async function() {
      const res = await defaultP.getMoveTargetByName(id);
      expect(res).to.have.property("name");
    });

    it(".getLocationByName(Id: int)", async function() {
      const res = await defaultP.getLocationByName(id);
      expect(res).to.have.property("name");
    });

    it(".getLocationAreaByName(Id: int)", async function() {
      const res = await defaultP.getLocationAreaByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPalParkAreaByName(Id: int)", async function() {
      const res = await defaultP.getPalParkAreaByName(id);
      expect(res).to.have.property("name");
    });

    it(".getRegionByName(Id: int)", async function() {
      const res = await defaultP.getRegionByName(id);
      expect(res).to.have.property("name");
    });

    it(".getAbilityByName(Id: int)", async function() {
      const res = await defaultP.getAbilityByName(id);
      expect(res).to.have.property("name");
    });

    it(".getCharacteristicById(Id: int)", async function() {
      const res = await defaultP.getCharacteristicById(id);
      expect(res).to.have.property("id");
    });

    it(".getEggGroupByName(Id: int)", async function() {
      const res = await defaultP.getEggGroupByName(id);
      expect(res).to.have.property("name");
    });

    it(".getGenderByName(Id: int)", async function() {
      const res = await defaultP.getGenderByName(id);
      expect(res).to.have.property("name");
    });

    it(".getGrowthRateByName(Id: int)", async function() {
      const res = await defaultP.getGrowthRateByName(id);
      expect(res).to.have.property("name");
    });

    it(".getNatureByName(Id: int)", async function() {
      const res = await defaultP.getNatureByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPokeathlonStatByName(Id: int)", async function() {
      const res = await defaultP.getPokeathlonStatByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPokemonByName(Id: int)", async function() {
      const res = await defaultP.getPokemonByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPokemonColorByName(Id: int)", async function() {
      const res = await defaultP.getPokemonColorByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPokemonFormByName(Id: int)", async function() {
      const res = await defaultP.getPokemonFormByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPokemonHabitatByName(Id: int)", async function() {
      const res = await defaultP.getPokemonHabitatByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPokemonShapeByName(Id: int)", async function() {
      const res = await defaultP.getPokemonShapeByName(id);
      expect(res).to.have.property("name");
    });

    it(".getPokemonSpeciesByName(Id: int)", async function() {
      const res = await defaultP.getPokemonSpeciesByName(id);
      expect(res).to.have.property("name");
    });

    it(".getStatByName(Id: int)", async function() {
      const res = await defaultP.getStatByName(id);
      expect(res).to.have.property("name");
    });

    it(".getTypeByName(Id: int)", async function() {
      const res = await defaultP.getTypeByName(id);
      expect(res).to.have.property("name");
    });

    it(".getLanguageByName(Id: int)", async function() {
      const res = await defaultP.getLanguageByName(id);
      expect(res).to.have.property("name");
    });
  });
});

describe("Cache", function () {
    this.timeout(10000);
    const originalFetch = window.fetch;
    let P;
    let fetchCalls = [];

    before(async function () {
        P = await Pokedex.init({ cache: true });
        window.fetch = async (url) => {
            const url_str = url.toString();
            fetchCalls.push(url_str);

            if (url_str.includes('/pokemon/ditto')) {
                return new Response(JSON.stringify({ name: 'ditto' }), {
                    headers: { 'X-PokeAPI-Deploy-Date': '100' }
                });
            }
            if (url_str.includes('/pokemon/pikachu')) {
                return new Response(JSON.stringify({ name: 'pikachu' }), {
                    headers: { 'X-PokeAPI-Deploy-Date': '300' }
                });
            }
            if (url_str.includes('/meta')) {
                return new Response(JSON.stringify({ deploy_date: '200' }));
            }
            return originalFetch(url);
        };
    });

    beforeEach(async function () {
        await P.clearCache();
        fetchCalls = [];
    });

    after(function () {
        window.fetch = originalFetch;
    });

    it("should invalidate old cache entries and keep new ones", async function () {
        await P.getPokemonByName('ditto');
        await P.getPokemonByName('pikachu');
        expect(fetchCalls.length).to.equal(2);

        let cacheSize = await P.getCacheLength();
        expect(cacheSize).to.equal(2);

        fetchCalls = [];
        await P.getPokemonByName('ditto');
        await P.getPokemonByName('pikachu');
        expect(fetchCalls.length).to.equal(0);

        await P.invalidateCache();
        expect(fetchCalls.length).to.equal(1);
        expect(fetchCalls[0]).to.include('/meta');

        cacheSize = await P.getCacheLength();
        expect(cacheSize).to.equal(1);

        fetchCalls = [];
        await P.getPokemonByName('ditto');
        await P.getPokemonByName('pikachu');
        expect(fetchCalls.length).to.equal(1);
        expect(fetchCalls[0]).to.include('/pokemon/ditto');

        cacheSize = await P.getCacheLength();
        expect(cacheSize).to.equal(2);
    });
});

const button = document.getElementById('flush-cache-btn');

button.addEventListener('click', async () => {
  try {
    await defaultP.clearCache();
  } catch (error) {
    console.error(error);
  }
});

mocha.run();