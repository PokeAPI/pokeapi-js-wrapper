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

    getEndpointsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getBerriesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getBerriesFirmnesssList(dict?: {  offset: number, limit: number }): Promise<object>;
    getBerriesFlavorsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getContestTypesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getContestEffectsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getSuperContestEffectsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getEncounterMethodsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getEncounterConditionsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getEncounterConditionValuesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getEvolutionChainsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getEvolutionTriggersList(dict?: {  offset: number, limit: number }): Promise<object>;
    getGenerationsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPokedexsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getVersionsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getVersionGroupsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getItemsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getItemAttributesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getItemCategoriesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getItemFlingEffectsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getItemPocketsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getMachinesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getMovesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getMoveAilmentsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getMoveBattleStylesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getMoveCategoriesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getMoveDamageClassesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getMoveLearnMethodsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getMoveTargetsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getLocationsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getLocationAreasList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPalParkAreasList(dict?: {  offset: number, limit: number }): Promise<object>;
    getRegionsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getAbilitiesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getCharacteristicsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getEggGroupsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getGendersList(dict?: {  offset: number, limit: number }): Promise<object>;
    getGrowthRatesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getNaturesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPokeathlonStatsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPokemonsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPokemonColorsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPokemonFormsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPokemonHabitatsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPokemonShapesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getPokemonSpeciesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getStatsList(dict?: {  offset: number, limit: number }): Promise<object>;
    getTypesList(dict?: {  offset: number, limit: number }): Promise<object>;
    getLanguagesList(dict?: {  offset: number, limit: number }): Promise<object>;

    resource(param: string | string[]): Promise<object>;
  }
}
