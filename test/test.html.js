describe("service worker", function () {
  it("should be activated on second run", function () {
    const P = new Pokedex.Pokedex({cacheImages: true});
    return navigator.serviceWorker.getRegistrations().then(function(registrations) {
      const sw = registrations.filter(function(serviceworker) { 
        return serviceworker.active.scriptURL.endsWith('pokeapi-js-wrapper-sw.js')
      });
      expect(sw).to.have.lengthOf(1)
      expect(sw[0].active.state).to.be.equal('activated')
    });
  });
});

describe("pokedex", function () {
  var id = 2;
  defaultP = new Pokedex.Pokedex();
  customP = new Pokedex.Pokedex({
    protocol: 'https',  
    offset: 10,
    limit: 1,
    timeout: 10000,
    cache: false,
    cacheImages: false
  });
  this.timeout(5000);

  describe(".resource(Mixed: array)", function () {
    it("should have property name", function () {
      return customP.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/']).then(res => {
        expect(res[0]).to.have.property('name');
        expect(res[1]).to.have.property('name');
        expect(res[2]).to.have.property('name');
      })  
    });
  });

  describe(".resource(Path: string)", function () {
    it("should have property height", function () {
      return defaultP.resource('/api/v2/pokemon/34').then(res => {
        expect(res).to.have.property('height');
      }) 
    });
  });

  describe(".resource(Url: string)", function () {
    it("should have property height", function () {
      return defaultP.resource('https://pokeapi.co/api/v2/pokemon/400').then(res => {
        expect(res).to.have.property('height')
      }) 
    });
  });

  describe(".getVersionByName(Id: int)", function () {
    it("should have property name", function () {
      return defaultP.getVersionByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  // start root endpoints
  
  describe(".getEndpointsList() secure (with ssl)", function() {
    it("should have property pokedex", function() {
      return defaultP.getEndpointsList().then(res => {
        expect(res).to.have.property("pokedex");
      })
    });
  });

  describe(".getBerriesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getBerriesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getBerriesFirmnesssList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getBerriesFirmnesssList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getBerriesFlavorsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getBerriesFlavorsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getContestTypesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getContestTypesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getContestEffectsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getContestEffectsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getSuperContestEffectsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getSuperContestEffectsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEncounterMethodsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getEncounterMethodsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEncounterConditionsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getEncounterConditionsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEncounterConditionValuesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getEncounterConditionValuesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEvolutionChainsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getEvolutionChainsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEvolutionTriggersList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getEvolutionTriggersList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getGenerationsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getGenerationsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokedexsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPokedexsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getVersionsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getVersionsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getVersionGroupsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getVersionGroupsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getItemsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemAttributesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getItemAttributesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemCategoriesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getItemCategoriesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemFlingEffectsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getItemFlingEffectsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemPocketsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getItemPocketsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMachinesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getMachinesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMovesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getMovesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveAilmentsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getMoveAilmentsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveBattleStylesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getMoveBattleStylesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveCategoriesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getMoveCategoriesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveDamageClassesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getMoveDamageClassesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveLearnMethodsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getMoveLearnMethodsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveTargetsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getMoveTargetsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getLocationsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getLocationsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getLocationAreasList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getLocationAreasList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPalParkAreasList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPalParkAreasList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getRegionsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getRegionsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getAbilitiesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getAbilitiesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getCharacteristicsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getCharacteristicsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEggGroupsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getEggGroupsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getGendersList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getGendersList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getGrowthRatesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getGrowthRatesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getNaturesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getNaturesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokeathlonStatsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPokeathlonStatsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPokemonsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonColorsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPokemonColorsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonFormsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPokemonFormsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonHabitatsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPokemonHabitatsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonShapesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPokemonShapesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonSpeciesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getPokemonSpeciesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getStatsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getStatsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getTypesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getTypesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getLanguagesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return defaultP.getLanguagesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  // end root endpoints

  // start normals calls

  describe(".getBerryByName(Array: string)", function() {
    it("should have length 3", function() {
      return defaultP.getBerryByName(['cheri', 'chesto', 'pecha']).then(res => {
        expect(res).to.have.length(3);
      })
    });
  });

  describe(".getBerryByName(Array: int)", function() {
    it("should have length 3", function () {
      return defaultP.getBerryByName([1, 3, 5]).then(res => {
        expect(res).to.have.length(3);
      })
    });
  });

  describe(".getPokemonByName(Array: int)", function() {
    it("should have length 4", function() {
      return defaultP.getPokemonByName([15, 35, 433, 444]).then(res => {
        expect(res).to.have.length(4);
      })
    });
  });

  describe(".getBerryByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getBerryByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getBerryByName(Id: int) cached", function() {
    it("should have property name", function() {
      return defaultP.getBerryByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getBerryFirmnessByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getBerryFirmnessByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getBerryFlavorByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getBerryFlavorByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getContestTypeByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getContestTypeByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getContestEffectById(Id: int)", function() {
    it("should have property id", function() {
      return defaultP.getContestEffectById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getSuperContestEffectById(Id: int)", function() {
    it("should have property id", function() {
      return defaultP.getSuperContestEffectById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getEncounterMethodByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getEncounterMethodByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getEncounterConditionByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getEncounterConditionByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getEncounterConditionValueByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getEncounterConditionValueByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getEvolutionChainById(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getEvolutionChainById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getEvolutionTriggerByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getEvolutionTriggerByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getGenerationByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getGenerationByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokedexByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPokedexByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getVersionByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getVersionByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getVersionGroupByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getVersionGroupByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getItemByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemAttributeByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getItemAttributeByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemCategoryByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getItemCategoryByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemFlingEffectByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getItemFlingEffectByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemPocketByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getItemPocketByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMachineById(Id: int)", function() {
    it("should have property id", function() {
      return defaultP.getMachineById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getMoveByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getMoveByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveAilmentByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getMoveAilmentByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveBattleStyleByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getMoveBattleStyleByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveCategoryByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getMoveCategoryByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveDamageClassByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getMoveDamageClassByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveTargetByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getMoveTargetByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getLocationByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getLocationByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getLocationAreaByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getLocationAreaByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPalParkAreaByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPalParkAreaByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getRegionByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getRegionByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getAbilityByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getAbilityByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getCharacteristicById(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getCharacteristicById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getEggGroupByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getEggGroupByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getGenderByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getGenderByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getGrowthRateByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getGrowthRateByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getNatureByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getNatureByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokeathlonStatByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPokeathlonStatByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPokemonByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonColorByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPokemonColorByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonFormByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPokemonFormByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonHabitatByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPokemonHabitatByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonShapeByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPokemonShapeByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonSpeciesByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getPokemonSpeciesByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getStatByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getStatByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getTypeByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getTypeByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".clearCache()", function () {
    it("should clear all cached entries", function () {
      return defaultP.clearCache().then(res => {
          defaultP.getCacheLength().then(length => {
            expect(length).to.be.equal(0);
          })
      })  
    });
  });

  describe(".getLanguageByName(Id: int)", function() {
    it("should have property name", function() {
      return defaultP.getLanguageByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });
});  
