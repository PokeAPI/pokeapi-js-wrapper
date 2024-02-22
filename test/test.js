//var localStorage = require('localStorage');
import Pokedex from"../src/index.js";
import {should, expect, assert} from'chai'
// chai.use(require("chai-things"));
// chai.use(require("chai-as-promised"));

global.navigator = {
  userAgent: 'node.js'
};

global.window = {
  userAgent: 'node.js'
};

describe("pokedex", function () {
  var promise,
    id = 2,
    path = '/api/v2/pokemon/34',
    url = 'https://pokeapi.co/api/v2/pokemon/35',
    secureP = new Pokedex({cacheImages: true, cache: false}),
    P = new Pokedex({
      protocol: 'https',
      offset: 10,
      limit: 1,
      timeout: 10000,
      cache: false
    }),
    interval = {
      limit: 10,
      offset: 34
    }

  this.timeout(10000);

  describe(".getBerryByName(Name: string)", function() {
    before(function() {
      promise = secureP.getBerryByName('not_found');
    });
    it("should fail", function() {
      return promise.catch(function(m) {
        expect(m.response.status).to.equal(44); })
    });
  });

  describe("P.getPokemonsList(interval: Interval) with default interval", function () {
    it("should succeed", function () {
      P.getPokemonsList().then(function(res) {
        expect(res).to.have.property('results');
        expect(res.results).to.have.lengthOf(1);
        expect(res.results[0].name).to.be.equal("caterpie");
        expect(res.results[0].name).not.to.be.equal("metapod");
      });
    });
  });

  describe(".getConfig()", function () {
    it("should return protocol property", function () {
      let config = P.getConfig()
      expect(config).to.have.property('protocol');
    });
  });

  describe(".getPokemonsList(interval: Interval) with interval", function () {
    before(async function () {
      promise = await secureP.getPokemonsList(interval);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have length results", function() {
      expect(promise).to.have.property('results');
    });
  });

  describe(".clearCache()", function () {
    it("should clear all cached entries", function () {
      return P.clearCache().then(res => {
          P.getCacheLength().then(length => {
            expect(length).to.be.equal(0);
          })
      })
    });
  });

  describe(".resource(Mixed: array)", function () {
    before(async function () {
      promise = await secureP.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/']);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have length 3", function() {
      expect(promise).to.have.length(3);
    });
    it("should have property name", function () {
      expect(promise[0]).to.have.property('name').equal('clefable');
      expect(promise[1]).to.have.property('name').equal('persim');
      expect(promise[2]).to.have.property('name').equal('static');
    });
  });

  describe(".resource(Path: string)", function () {
    before(async function () {
      promise = await secureP.resource(path);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have property height", function () {
      expect(promise).to.have.property('height');
    });
  });

  describe(".resource(Url: string)", function () {
    before(async function () {
      promise = await secureP.resource(url);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have property height", function () {
      expect(promise).to.have.property('height')
    });
  });

  describe(".getPokemonEncounterAreasByName(Id: int)", function () {
    before(async function () {
      promise = await secureP.getPokemonEncounterAreasByName(id);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should be an array", function () {
      expect(promise).to.be.an("array");
    });
  });

  describe(".getVersionByName(Id: int)", function () {
    before(async function () {
      promise = await secureP.getVersionByName(id);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have property name", function () {
      expect(promise).to.have.property("name");
    });
  });

  // start root endpoints

  describe(".getEndpointsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getEndpointsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property pokedex", function() {
      expect(promise).to.have.property("pokedex");
    });
  });

  describe(".getBerriesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getBerriesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getBerriesFirmnesssList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getBerriesFirmnesssList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getBerriesFlavorsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getBerriesFlavorsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getContestTypesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getContestTypesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getContestEffectsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getContestEffectsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getSuperContestEffectsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getSuperContestEffectsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getEncounterMethodsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getEncounterMethodsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getEncounterConditionsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getEncounterConditionsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getEncounterConditionValuesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getEncounterConditionValuesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getEvolutionChainsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getEvolutionChainsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getEvolutionTriggersList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getEvolutionTriggersList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getGenerationsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getGenerationsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPokedexsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPokedexsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getVersionsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getVersionsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getVersionGroupsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getVersionGroupsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getItemsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getItemsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getItemAttributesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getItemAttributesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getItemCategoriesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getItemCategoriesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getItemFlingEffectsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getItemFlingEffectsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getItemPocketsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getItemPocketsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getMachinesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getMachinesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getMovesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getMovesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getMoveAilmentsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getMoveAilmentsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getMoveBattleStylesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getMoveBattleStylesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getMoveCategoriesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getMoveCategoriesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getMoveDamageClassesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getMoveDamageClassesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getMoveLearnMethodsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getMoveLearnMethodsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getMoveTargetsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getMoveTargetsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getLocationsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getLocationsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getLocationAreasList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getLocationAreasList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPalParkAreasList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPalParkAreasList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getRegionsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getRegionsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getAbilitiesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getAbilitiesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getCharacteristicsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getCharacteristicsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getEggGroupsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getEggGroupsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getGendersList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getGendersList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getGrowthRatesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getGrowthRatesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getNaturesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getNaturesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPokeathlonStatsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPokeathlonStatsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPokemonsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPokemonsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPokemonColorsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPokemonColorsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPokemonFormsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPokemonFormsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPokemonHabitatsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPokemonHabitatsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPokemonShapesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPokemonShapesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getPokemonSpeciesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getPokemonSpeciesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getStatsList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getStatsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getTypesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getTypesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  describe(".getLanguagesList() secure (with ssl)", function() {
    before(async function() {
      promise = await secureP.getLanguagesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      expect(promise).to.have.property("count");
    });
  });

  // end root endpoints

  // start normals calls

  describe(".getBerryByName(Array: string)", function() {
    before(async function() {
      promise = await secureP.getBerryByName(['cheri', 'chesto', 'pecha']);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 3", function() {
      expect(promise).to.have.length(3);
    });
    it("berries should have property growth_time", function() {
      expect(promise[0]).to.have.property('growth_time');
      expect(promise[1]).to.have.property('growth_time');
      expect(promise[2]).to.have.property('growth_time');
    });
  });

  describe(".getBerryByName(Array: int)", function() {
    before(async function() {
      promise = await secureP.getBerryByName([1, 3, 5]);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 3", function() {
      expect(promise).to.have.length(3);
    });
    it("berries should have property growth_time", function() {
      expect(promise[0]).to.have.property('growth_time');
      expect(promise[1]).to.have.property('growth_time');
      expect(promise[2]).to.have.property('growth_time');
    });
  });

  describe(".getPokemonByName(Array: int)", function() {
    before(async function() {
      promise = await secureP.getPokemonByName([15, 35, 433, 444]);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 4", function() {
      expect(promise).to.have.length(4);
    });
    it("pokemons should have property height", function() {
      expect(promise[0]).to.have.property('height');
      expect(promise[1]).to.have.property('height');
      expect(promise[2]).to.have.property('height');
      expect(promise[3]).to.have.property('height');
    });
  });

  describe(".getBerryByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getBerryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getBerryByName(Id: int) cached", function() {
    before(async function() {
      promise = await secureP.getBerryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getBerryFirmnessByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getBerryFirmnessByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getBerryFlavorByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getBerryFlavorByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getContestTypeByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getContestTypeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getContestEffectById(Id: int)", function() {
    before(async function() {
      promise = await secureP.getContestEffectById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property id", function() {
      expect(promise).to.have.property("id");
    });
  });

  describe(".getSuperContestEffectById(Id: int)", function() {
    before(async function() {
      promise = await secureP.getSuperContestEffectById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property id", function() {
      expect(promise).to.have.property("id");
    });
  });

  describe(".getEncounterMethodByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getEncounterMethodByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getEncounterConditionByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getEncounterConditionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getEncounterConditionValueByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getEncounterConditionValueByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getEvolutionChainById(Id: int)", function() {
    before(async function() {
      promise = await secureP.getEvolutionChainById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("id");
    });
  });

  describe(".getEvolutionTriggerByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getEvolutionTriggerByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getGenerationByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getGenerationByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPokedexByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPokedexByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getVersionByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getVersionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getVersionGroupByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getVersionGroupByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getItemByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getItemByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getItemAttributeByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getItemAttributeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getItemCategoryByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getItemCategoryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getItemFlingEffectByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getItemFlingEffectByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getItemPocketByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getItemPocketByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getMachineById(Id: int)", function() {
    before(async function() {
      promise = await secureP.getMachineById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property id", function() {
      expect(promise).to.have.property("id");
    });
  });

  describe(".getMoveByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getMoveByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getMoveAilmentByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getMoveAilmentByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getMoveBattleStyleByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getMoveBattleStyleByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getMoveCategoryByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getMoveCategoryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getMoveDamageClassByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getMoveDamageClassByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getMoveTargetByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getMoveTargetByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getLocationByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getLocationByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getLocationAreaByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getLocationAreaByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPalParkAreaByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPalParkAreaByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getRegionByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getRegionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getAbilityByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getAbilityByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getCharacteristicById(Id: int)", function() {
    before(async function() {
      promise = await secureP.getCharacteristicById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("id");
    });
  });

  describe(".getEggGroupByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getEggGroupByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getGenderByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getGenderByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getGrowthRateByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getGrowthRateByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getNatureByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getNatureByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPokeathlonStatByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPokeathlonStatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPokemonByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPokemonByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPokemonColorByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPokemonColorByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPokemonFormByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPokemonFormByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPokemonHabitatByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPokemonHabitatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPokemonShapeByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPokemonShapeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getPokemonSpeciesByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getPokemonSpeciesByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getStatByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getStatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getTypeByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getTypeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

  describe(".getLanguageByName(Id: int)", function() {
    before(async function() {
      promise = await secureP.getLanguageByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      expect(promise).to.have.property("name");
    });
  });

});
