//var localStorage = require('localStorage');
var Pokedex = require("../dist/index.js");
var chai = require('chai'),
  expect = chai.expect,
  assert = chai.assert;
//var P = new Pokedex.Pokedex();
//P.getVersionByName(2).then(v => console.log(v)).catch(v => console.log(v))
// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(require("chai-things"));
chai.use(require("chai-as-promised"));

describe("pokedex", function () {
  var promise,
    id = 2,
    path = '/api/v2/pokemon/34',
    url = 'https://pokeapi.co/api/v2/pokemon/35',
    P = new Pokedex.Pokedex()
    secureP = new Pokedex.Pokedex({ protocol: 'https' }),
    interval = {
      limit: 10,
      offset: 34
    }

  this.timeout(21000);

  describe(".getPokemonsList(interval: Interval) with interval", function () {
    before(function () {
      promise = P.getPokemonsList(interval);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have length results", function() {
      return expect(promise).to.eventually.have.property('results');
    });
  });

  describe(".resource(Mixed: array)", function () {
    before(function () {
      promise = P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/']);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have length 3", function() {
      return expect(promise).to.eventually.have.length(3);
    });
    it("should have property name", function () {
      return expect(promise).to.eventually.all.have.property('name');
    });
  });

  describe(".resource(Path: string)", function () {
    before(function () {
      promise = P.resource(path);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have property height", function () {
      return expect(promise).to.eventually.have.property('height');
    });
  });

  describe(".resource(Url: string)", function () {
    before(function () {
      promise = P.resource(url);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have property height", function () {
      return expect(promise).to.eventually.have.property('height')
    });
  });

  describe(".getVersionByName(Id: int)", function () {
    before(function () {
      promise = P.getVersionByName(id);
    });
    it("should succeed", function () {
      return promise;
    });
    it("should have property name", function () {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  // start root endpoints
  
  describe(".getEndpointsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getEndpointsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property pokedex", function() {
      return expect(promise).to.eventually.have.property("pokedex");
    });
  });

  describe(".getBerriesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getBerriesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getBerriesFirmnesssList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getBerriesFirmnesssList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getBerriesFlavorsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getBerriesFlavorsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getContestTypesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getContestTypesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getContestEffectsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getContestEffectsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getSuperContestEffectsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getSuperContestEffectsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getEncounterMethodsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getEncounterMethodsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getEncounterConditionsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getEncounterConditionsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getEncounterConditionValuesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getEncounterConditionValuesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getEvolutionChainsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getEvolutionChainsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getEvolutionTriggersList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getEvolutionTriggersList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getGenerationsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getGenerationsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPokedexsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPokedexsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getVersionsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getVersionsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getVersionGroupsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getVersionGroupsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getItemsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getItemsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getItemAttributesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getItemAttributesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getItemCategoriesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getItemCategoriesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getItemFlingEffectsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getItemFlingEffectsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getItemPocketsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getItemPocketsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getMachinesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getMachinesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getMovesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getMovesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getMoveAilmentsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getMoveAilmentsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getMoveBattleStylesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getMoveBattleStylesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getMoveCategoriesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getMoveCategoriesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getMoveDamageClassesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getMoveDamageClassesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getMoveLearnMethodsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getMoveLearnMethodsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getMoveTargetsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getMoveTargetsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getLocationsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getLocationsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getLocationAreasList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getLocationAreasList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPalParkAreasList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPalParkAreasList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getRegionsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getRegionsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getAbilitiesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getAbilitiesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getCharacteristicsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getCharacteristicsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getEggGroupsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getEggGroupsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getGendersList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getGendersList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getGrowthRatesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getGrowthRatesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getNaturesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getNaturesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPokeathlonStatsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPokeathlonStatsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPokemonsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPokemonsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPokemonColorsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPokemonColorsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPokemonFormsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPokemonFormsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPokemonHabitatsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPokemonHabitatsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPokemonShapesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPokemonShapesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getPokemonSpeciesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getPokemonSpeciesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getStatsList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getStatsList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getTypesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getTypesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  describe(".getLanguagesList() secure (with ssl)", function() {
    before(function() {
      promise = secureP.getLanguagesList();
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property count", function() {
      return expect(promise).to.eventually.have.property("count");
    });
  });

  // end root endpoints

  // start normals calls

  describe(".getBerryByName(Array: string)", function() {
    before(function() {
      promise = P.getBerryByName(['cheri', 'chesto', 'pecha']);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 3", function() {
      return expect(promise).to.eventually.have.length(3);
    });
    it("berries should have property growth_time", function() {
      return expect(promise).to.eventually.all.have.property('growth_time');
    });
  });

  describe(".getBerryByName(Array: int)", function() {
    before(function() {
      promise = P.getBerryByName([1, 3, 5]);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 3", function() {
      return expect(promise).to.eventually.have.length(3);
    });
    it("berries should have property growth_time", function() {
      return expect(promise).to.eventually.all.have.property('growth_time');
    });
  });

  describe(".getPokemonByName(Array: int)", function() {
    before(function() {
      promise = P.getPokemonByName([15, 35, 433, 444]);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 4", function() {
      return expect(promise).to.eventually.have.length(4);
    });
    it("pokemons should have property height", function() {
      return expect(promise).to.eventually.all.have.property('height');
    });
  });

  describe(".getBerryByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryByName(Id: int) cached", function() {
    before(function() {
      promise = P.getBerryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryFirmnessByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryFirmnessByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryFlavorByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryFlavorByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getContestTypeByName(Id: int)", function() {
    before(function() {
      promise = P.getContestTypeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getContestEffectById(Id: int)", function() {
    before(function() {
      promise = P.getContestEffectById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property id", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getSuperContestEffectById(Id: int)", function() {
    before(function() {
      promise = P.getSuperContestEffectById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property id", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getEncounterMethodByName(Id: int)", function() {
    before(function() {
      promise = P.getEncounterMethodByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getEncounterConditionByName(Id: int)", function() {
    before(function() {
      promise = P.getEncounterConditionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getEncounterConditionValueByName(Id: int)", function() {
    before(function() {
      promise = P.getEncounterConditionValueByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getEvolutionChainById(Id: int)", function() {
    before(function() {
      promise = P.getEvolutionChainById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getEvolutionTriggerByName(Id: int)", function() {
    before(function() {
      promise = P.getEvolutionTriggerByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getGenerationByName(Id: int)", function() {
    before(function() {
      promise = P.getGenerationByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokedexByName(Id: int)", function() {
    before(function() {
      promise = P.getPokedexByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getVersionByName(Id: int)", function() {
    before(function() {
      promise = P.getVersionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getVersionGroupByName(Id: int)", function() {
    before(function() {
      promise = P.getVersionGroupByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemByName(Id: int)", function() {
    before(function() {
      promise = P.getItemByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemAttributeByName(Id: int)", function() {
    before(function() {
      promise = P.getItemAttributeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemCategoryByName(Id: int)", function() {
    before(function() {
      promise = P.getItemCategoryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemFlingEffectByName(Id: int)", function() {
    before(function() {
      promise = P.getItemFlingEffectByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemPocketByName(Id: int)", function() {
    before(function() {
      promise = P.getItemPocketByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMachineById(Id: int)", function() {
    before(function() {
      promise = P.getMachineById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property id", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getMoveByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveAilmentByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveAilmentByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveBattleStyleByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveBattleStyleByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveCategoryByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveCategoryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveDamageClassByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveDamageClassByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveTargetByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveTargetByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getLocationByName(Id: int)", function() {
    before(function() {
      promise = P.getLocationByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getLocationAreaByName(Id: int)", function() {
    before(function() {
      promise = P.getLocationAreaByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPalParkAreaByName(Id: int)", function() {
    before(function() {
      promise = P.getPalParkAreaByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getRegionByName(Id: int)", function() {
    before(function() {
      promise = P.getRegionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getAbilityByName(Id: int)", function() {
    before(function() {
      promise = P.getAbilityByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getCharacteristicById(Id: int)", function() {
    before(function() {
      promise = P.getCharacteristicById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getEggGroupByName(Id: int)", function() {
    before(function() {
      promise = P.getEggGroupByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getGenderByName(Id: int)", function() {
    before(function() {
      promise = P.getGenderByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getGrowthRateByName(Id: int)", function() {
    before(function() {
      promise = P.getGrowthRateByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getNatureByName(Id: int)", function() {
    before(function() {
      promise = P.getNatureByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokeathlonStatByName(Id: int)", function() {
    before(function() {
      promise = P.getPokeathlonStatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonColorByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonColorByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonFormByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonFormByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonHabitatByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonHabitatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonShapeByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonShapeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonSpeciesByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonSpeciesByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getStatByName(Id: int)", function() {
    before(function() {
      promise = P.getStatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getTypeByName(Id: int)", function() {
    before(function() {
      promise = P.getTypeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getLanguageByName(Id: int)", function() {
    before(function() {
      promise = P.getLanguageByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryByName(Name: string)", function() {
    before(function() {
      promise = P.getBerryByName('sfgfsgsfggsfg');
    });
    it("should fail", function() {
      return expect(Promise.regect);
    });
  });

});
