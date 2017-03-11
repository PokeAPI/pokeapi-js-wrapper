describe("pokedex", function () {
  var id = 2,
  P = new Pokedex.Pokedex()
  secureP = new Pokedex.Pokedex({ protocol: 'https' });

  this.timeout(21000);

  describe(".getVersionByName(Id: int)", function () {
    it("should have property name", function () {
      return P.getVersionByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  // start root endpoints
  
  describe(".getEndpointsList() secure (with ssl)", function() {
    it("should have property pokedex", function() {
      return secureP.getEndpointsList().then(res => {
        expect(res).to.have.property("pokedex");
      })
    });
  });

  describe(".getBerriesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getBerriesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getBerriesFirmnesssList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getBerriesFirmnesssList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getBerriesFlavorsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getBerriesFlavorsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getContestTypesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getContestTypesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getContestEffectsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getContestEffectsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getSuperContestEffectsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getSuperContestEffectsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEncounterMethodsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getEncounterMethodsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEncounterConditionsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getEncounterConditionsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEncounterConditionValuesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getEncounterConditionValuesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEvolutionChainsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getEvolutionChainsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEvolutionTriggersList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getEvolutionTriggersList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getGenerationsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getGenerationsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokedexsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPokedexsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getVersionsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getVersionsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getVersionGroupsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getVersionGroupsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getItemsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemAttributesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getItemAttributesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemCategoriesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getItemCategoriesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemFlingEffectsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getItemFlingEffectsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getItemPocketsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getItemPocketsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMachinesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getMachinesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMovesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getMovesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveAilmentsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getMoveAilmentsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveBattleStylesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getMoveBattleStylesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveCategoriesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getMoveCategoriesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveDamageClassesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getMoveDamageClassesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveLearnMethodsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getMoveLearnMethodsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getMoveTargetsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getMoveTargetsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getLocationsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getLocationsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getLocationAreasList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getLocationAreasList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPalParkAreasList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPalParkAreasList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getRegionsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getRegionsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getAbilitiesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getAbilitiesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getCharacteristicsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getCharacteristicsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getEggGroupsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getEggGroupsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getGendersList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getGendersList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getGrowthRatesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getGrowthRatesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getNaturesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getNaturesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokeathlonStatsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPokeathlonStatsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPokemonsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonColorsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPokemonColorsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonFormsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPokemonFormsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonHabitatsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPokemonHabitatsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonShapesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPokemonShapesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getPokemonSpeciesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getPokemonSpeciesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getStatsList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getStatsList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getTypesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getTypesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  describe(".getLanguagesList() secure (with ssl)", function() {
    it("should have property count", function() {
      return secureP.getLanguagesList().then(res => {
        expect(res).to.have.property("count");
      })
    });
  });

  // end root endpoints

  // start normals calls

  describe(".getBerryByName(Array: string)", function() {
    it("should have length 3", function() {
      return P.getBerryByName(['cheri', 'chesto', 'pecha']).then(res => {
        expect(res).to.have.length(3);
      })
    });
  });

  describe(".getBerryByName(Array: int)", function() {
    it("should have length 3", function () {
      return P.getBerryByName([1, 3, 5]).then(res => {
        expect(res).to.have.length(3);
      })
    });
  });

  describe(".getPokemonByName(Array: int)", function() {
    it("should have length 4", function() {
      return P.getPokemonByName([15, 35, 433, 444]).then(res => {
        expect(res).to.have.length(4);
      })
    });
  });

  describe(".getBerryByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getBerryByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getBerryByName(Id: int) cached", function() {
    it("should have property name", function() {
      return P.getBerryByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getBerryFirmnessByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getBerryFirmnessByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getBerryFlavorByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getBerryFlavorByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getContestTypeByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getContestTypeByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getContestEffectById(Id: int)", function() {
    it("should have property id", function() {
      return P.getContestEffectById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getSuperContestEffectById(Id: int)", function() {
    it("should have property id", function() {
      return P.getSuperContestEffectById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getEncounterMethodByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getEncounterMethodByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getEncounterConditionByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getEncounterConditionByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getEncounterConditionValueByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getEncounterConditionValueByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getEvolutionChainById(Id: int)", function() {
    it("should have property name", function() {
      return P.getEvolutionChainById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getEvolutionTriggerByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getEvolutionTriggerByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getGenerationByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getGenerationByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokedexByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPokedexByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getVersionByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getVersionByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getVersionGroupByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getVersionGroupByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getItemByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemAttributeByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getItemAttributeByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemCategoryByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getItemCategoryByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemFlingEffectByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getItemFlingEffectByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getItemPocketByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getItemPocketByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMachineById(Id: int)", function() {
    it("should have property id", function() {
      return P.getMachineById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getMoveByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getMoveByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveAilmentByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getMoveAilmentByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveBattleStyleByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getMoveBattleStyleByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveCategoryByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getMoveCategoryByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveDamageClassByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getMoveDamageClassByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getMoveTargetByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getMoveTargetByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getLocationByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getLocationByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getLocationAreaByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getLocationAreaByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPalParkAreaByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPalParkAreaByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getRegionByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getRegionByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getAbilityByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getAbilityByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getCharacteristicById(Id: int)", function() {
    it("should have property name", function() {
      return P.getCharacteristicById(id).then(res => {
        expect(res).to.have.property("id");
      })
    });
  });

  describe(".getEggGroupByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getEggGroupByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getGenderByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getGenderByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getGrowthRateByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getGrowthRateByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getNatureByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getNatureByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokeathlonStatByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPokeathlonStatByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPokemonByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonColorByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPokemonColorByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonFormByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPokemonFormByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonHabitatByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPokemonHabitatByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonShapeByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPokemonShapeByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getPokemonSpeciesByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getPokemonSpeciesByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getStatByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getStatByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getTypeByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getTypeByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });

  describe(".getLanguageByName(Id: int)", function() {
    it("should have property name", function() {
      return P.getLanguageByName(id).then(res => {
        expect(res).to.have.property("name");
      })
    });
  });
});  