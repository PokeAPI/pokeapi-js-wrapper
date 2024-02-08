declare module "pokeapi-js-wrapper" {
  export class Pokedex {
    constructor(config?: {
      protocol: string,
      hostName: string,
      versionPath: string,
      offset: number
      limit: number,
      timeout: number,
      cache: boolean,
      cacheImages: boolean
    });

    getBerryByName(name: string | number | string[] | number[]): Promise<object>;
    getBerryFirmnessByName(name: string | string[]): Promise<object>;
    getBerryFlavorByName(name: string | number | string[] | number[]): Promise<object>;
    getContestTypeByName(name: string | number | string[] | number[]): Promise<object>;
    getContestEffectById(id: number | number[]): Promise<object>;
    getSuperContestEffectById(id: number | number[]): Promise<object>;
    getEncounterMethodByName(name: string | number | string[] | number[]): Promise<object>;
    getEncounterConditionByName(name: string | number | string[] | number[]): Promise<object>;
    getEncounterConditionValueByName(name: string | number | string[] | number[]): Promise<object>;
    getEvolutionChainById(id: number | number[]): Promise<object>;
    getEvolutionTriggerByName(name: string | number | string[] | number[]): Promise<object>;
    getGenerationByName(name: string | number | string[] | number[]): Promise<object>;
    getPokedexByName(name: string | number | string[] | number[]): Promise<object>;
    getVersionByName(name: string | number | string[] | number[]): Promise<object>;
    getVersionGroupByName(name: string | number | string[] | number[]): Promise<object>;
    getItemByName(name: string | number | string[] | number[]): Promise<object>;
    getItemAttributeByName(name: string | number | string[] | number[]): Promise<object>;
    getItemCategoryByName(name: string | number | string[] | number[]): Promise<object>;
    getItemFlingEffectByName(name: string | number | string[] | number[]): Promise<object>;
    getItemPocketByName(name: string | number | string[] | number[]): Promise<object>;
    getMachineById(id: number | number[]): Promise<object>;
    getMoveByName(name: string | number | string[] | number[]): Promise<object>;
    getMoveAilmentByName(name: string | number | string[] | number[]): Promise<object>;
    getMoveBattleStyleByName(name: string | number | string[] | number[]): Promise<object>;
    getMoveCategoryByName(name: string | number | string[] | number[]): Promise<object>;
    getMoveDamageClassByName(name: string | number | string[] | number[]): Promise<object>;
    getMoveLearnMethodByName(name: string | number | string[] | number[]): Promise<object>;
    getMoveTargetByName(name: string | number | string[] | number[]): Promise<object>;
    getLocationByName(name: string | number | string[] | number[]): Promise<object>;
    getLocationAreaByName(name: string | number | string[] | number[]): Promise<object>;
    getPalParkAreaByName(name: string | number | string[] | number[]): Promise<object>;
    getRegionByName(name: string | number | string[] | number[]): Promise<object>;
    getAbilityByName(name: string | number | string[] | number[]): Promise<object>;
    getCharacteristicById(id: number | number[]): Promise<object>;
    getEggGroupByName(name: string | number | string[] | number[]): Promise<object>;
    getGenderByName(name: string | number | string[] | number[]): Promise<object>;
    getGrowthRateByName(name: string | number | string[] | number[]): Promise<object>;
    getNatureByName(name: string | number | string[] | number[]): Promise<object>;
    getPokeathlonStatByName(name: string | number | string[] | number[]): Promise<object>;
    getPokemonByName(name: string | number | string[] | number[]): Promise<object>;
    getPokemonEncounterAreasByName(name: string | number | string[] | number[]): Promise<object>;
    getPokemonColorByName(name: string | number | string[] | number[]): Promise<object>;
    getPokemonFormByName(name: string | number | string[] | number[]): Promise<object>;
    getPokemonHabitatByName(name: string | number | string[] | number[]): Promise<object>;
    getPokemonShapeByName(name: string | number | string[] | number[]): Promise<object>;
    getPokemonSpeciesByName(name: string | number | string[] | number[]): Promise<object>;
    getStatByName(name: string | number | string[] | number[]): Promise<object>;
    getTypeByName(name: string | number | string[] | number[]): Promise<object>;
    getLanguageByName(name: string | number | string[] | number[]): Promise<object>;

    getEndpointsList(): Promise<object>;
    getBerriesList(): Promise<object>;
    getBerriesFirmnesssList(): Promise<object>;
    getBerriesFlavorsList(): Promise<object>;
    getContestTypesList(): Promise<object>;
    getContestEffectsList(): Promise<object>;
    getSuperContestEffectsList(): Promise<object>;
    getEncounterMethodsList(): Promise<object>;
    getEncounterConditionsList(): Promise<object>;
    getEncounterConditionValuesList(): Promise<object>;
    getEvolutionChainsList(): Promise<object>;
    getEvolutionTriggersList(): Promise<object>;
    getGenerationsList(): Promise<object>;
    getPokedexsList(): Promise<object>;
    getVersionsList(): Promise<object>;
    getVersionGroupsList(): Promise<object>;
    getItemsList(): Promise<object>;
    getItemAttributesList(): Promise<object>;
    getItemCategoriesList(): Promise<object>;
    getItemFlingEffectsList(): Promise<object>;
    getItemPocketsList(): Promise<object>;
    getMachinesList(): Promise<object>;
    getMovesList(): Promise<object>;
    getMoveAilmentsList(): Promise<object>;
    getMoveBattleStylesList(): Promise<object>;
    getMoveCategoriesList(): Promise<object>;
    getMoveDamageClassesList(): Promise<object>;
    getMoveLearnMethodsList(): Promise<object>;
    getMoveTargetsList(): Promise<object>;
    getLocationsList(): Promise<object>;
    getLocationAreasList(): Promise<object>;
    getPalParkAreasList(): Promise<object>;
    getRegionsList(): Promise<object>;
    getAbilitiesList(): Promise<object>;
    getCharacteristicsList(): Promise<object>;
    getEggGroupsList(): Promise<object>;
    getGendersList(): Promise<object>;
    getGrowthRatesList(): Promise<object>;
    getNaturesList(): Promise<object>;
    getPokeathlonStatsList(): Promise<object>;
    getPokemonsList(): Promise<object>;
    getPokemonColorsList(): Promise<object>;
    getPokemonFormsList(): Promise<object>;
    getPokemonHabitatsList(): Promise<object>;
    getPokemonShapesList(): Promise<object>;
    getPokemonSpeciesList(): Promise<object>;
    getStatsList(): Promise<object>;
    getTypesList(): Promise<object>;
    getLanguagesList(): Promise<object>;

    resource(param: string | string[]): Promise<object>;
  }
}
