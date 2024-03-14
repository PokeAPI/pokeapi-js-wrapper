declare module "pokeapi-js-wrapper" {
  interface APIResource {
    /** The URL of the referenced resource. */
    url: string;
    [property: string]: any;
  }

  interface EndpointsList {
    ability: string;
    berry: string;
    "berry-firmness": string;
    "berry-flavor": string;
    characteristic: string;
    "contest-effect": string;
    "contest-type": string;
    "egg-group": string;
    "encounter-condition": string;
    "encounter-condition-value": string;
    "encounter-method": string;
    "evolution-chain": string;
    "evolution-trigger": string;
    gender: string;
    generation: string;
    "growth-rate": string;
    item: string;
    "item-attribute": string;
    "item-category": string;
    "item-fling-effect": string;
    "item-pocket": string;
    language: string;
    location: string;
    "location-area": string;
    machine: string;
    move: string;
    "move-ailment": string;
    "move-battle-style": string;
    "move-category": string;
    "move-damage-class": string;
    "move-learn-method": string;
    "move-target": string;
    nature: string;
    "pal-park-area": string;
    "pokeathlon-stat": string;
    pokedex: string;
    pokemon: string;
    "pokemon-color": string;
    "pokemon-form": string;
    "pokemon-habitat": string;
    "pokemon-shape": string;
    "pokemon-species": string;
    region: string;
    stat: string;
    "super-contest-effect": string;
    type: string;
    version: string;
    "version-group": string;
  }

  interface APIResourceList {
    count: number;
    next: null | string;
    previous: null | string;
    results: APIResource[];
    [property: string]: any;
  }

  interface NamedAPIResource {
    /** The name of the referenced resource. */
    name: string;
    /** The URL of the referenced resource. */
    url: string;
    [property: string]: any;
  }

  interface NamedAPIResourceList {
    /** The total number of resources available from this API. */
    count: number;
    /** The URL for the next page in the list. */
    next: null | string;
    /** The URL for the previous page in the list. */
    previous: null | string;
    /** A list of named API resources. */
    results: NamedAPIResource[];
    [property: string]: any;
  }

  /** Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail. */
  interface Ability {
    /** The list of previous effects this ability has had across version groups. */
    effect_changes: AbilityEffectChange[];
    /** The effect of this ability listed in different languages. */
    effect_entries: AbilityEffectEntry[];
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: AbilityFlavorTextEntry[];
    /** The generation this ability originated in. */
    generation: NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** Whether or not this ability originated in the main series of the video games. */
    is_main_series: boolean;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: AbilityName[];
    /** A list of Pokémon that could potentially have this ability. */
    pokemon: AbilityPokemon[];
    [property: string]: any;
  }

  interface AbilityEffectChange {
    /** The previous effect of this ability listed in different languages. */
    effect_entries: PurpleEffectEntry[];
    /** The version group in which the previous effect of this ability originated. */
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface PurpleEffectEntry {
    effect: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface AbilityEffectEntry {
    effect: string;
    language: NamedAPIResource;
    short_effect: string;
    [property: string]: any;
  }

  interface AbilityFlavorTextEntry {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface AbilityName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface AbilityPokemon {
    /** Whether or not this a hidden ability for the referenced Pokémon. */
    is_hidden: boolean;
    /** The Pokémon this ability could belong to. */
    pokemon: NamedAPIResource;
    /** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
    slot: number;
    [property: string]: any;
  }

  /** Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail. */
  interface Berry {
    /** The firmness of this berry, used in making Pokéblocks or Poffins. */
    firmness: NamedAPIResource;
    /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry. */
    flavors: Flavor[];
    /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked. */
    growth_time: number;
    /** The identifier for this resource. */
    id: number;
    /** Berries are actually items. This is a reference to the item specific data for this berry. */
    item: NamedAPIResource;
    /** The maximum number of these berries that can grow on one tree in Generation IV. */
    max_harvest: number;
    /** The name for this resource. */
    name: string;
    /** The power of the move "Natural Gift" when used with this Berry. */
    natural_gift_power: number;
    /** The type inherited by "Natural Gift" when used with this Berry. */
    natural_gift_type: NamedAPIResource;
    /** The size of this Berry, in millimeters. */
    size: number;
    /** The smoothness of this Berry, used in making Pokéblocks or Poffins. */
    smoothness: number;
    /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly. */
    soil_dryness: number;
    [property: string]: any;
  }

  interface Flavor {
    flavor: NamedAPIResource;
    potency: number;
    [property: string]: any;
  }

  /** Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail. */
  interface BerryFirmness {
    /** A list of the berries with this firmness. */
    berries: NamedAPIResource[];
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: BerryFirmnessName[];
    [property: string]: any;
  }

  interface BerryFirmnessName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their [nature](#natures). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail. */
  interface BerryFlavor {
    /** A list of the berries with this flavor. */
    berries: BerryElement[];
    /** The contest type that correlates with this berry flavor. */
    contest_type: NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: BerryFlavorName[];
    [property: string]: any;
  }

  interface BerryElement {
    berry: NamedAPIResource;
    potency: number;
    [property: string]: any;
  }

  interface BerryFlavorName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail. */
  interface Characteristic {
    /** The descriptions of this characteristic listed in different languages. */
    descriptions: CharacteristicDescription[];
    /** The remainder of the highest stat/IV divided by 5. */
    gene_modulo: number;
    /** The stat which results in this characteristic. */
    highest_stat: NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5. */
    possible_values: number[];
    [property: string]: any;
  }

  interface CharacteristicDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface SuperContestEffectList {
    count: number;
    next: null | string;
    previous: null | string;
    results: APIResource[];
    [property: string]: any;
  }

  /** Contest effects refer to the effects of moves when used in contests. */
  interface ContestEffect {
    /** The base number of hearts the user of this move gets. */
    appeal: number;
    /** The result of this contest effect listed in different languages. */
    effect_entries: ContestEffectEffectEntry[];
    /** The flavor text of this contest effect listed in different languages. */
    flavor_text_entries: ContestEffectFlavorTextEntry[];
    /** The identifier for this resource. */
    id: number;
    /** The base number of hearts the user's opponent loses. */
    jam: number;
    [property: string]: any;
  }

  interface ContestEffectEffectEntry {
    effect: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface ContestEffectFlavorTextEntry {
    flavor_text: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  /** Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail. */
  interface ContestType {
    /** The berry flavor that correlates with this contest type. */
    berry_flavor: NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this contest type listed in different languages. */
    names: ContestTypeName[];
    [property: string]: any;
  }

  interface ContestTypeName {
    color: string;
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail. */
  interface EggGroup {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: EggGroupName[];
    /** A list of all Pokémon species that are members of this egg group. */
    pokemon_species: NamedAPIResource[];
    [property: string]: any;
  }

  interface EggGroupName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Conditions which affect what pokemon might appear in the wild, e.g., day or night. */
  interface EncounterCondition {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: EncounterConditionName[];
    /** A list of possible values for this encounter condition. */
    values: NamedAPIResource[];
    [property: string]: any;
  }

  interface EncounterConditionName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night. */
  interface EncounterConditionValue {
    /** The condition this encounter condition value pertains to. */
    condition: NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: EncounterConditionValueName[];
    [property: string]: any;
  }

  interface EncounterConditionValueName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Wild_Pok%C3%A9mon) for greater detail. */
  interface EncounterMethod {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: EncounterMethodName[];
    /** A good value for sorting. */
    order: number;
    [property: string]: any;
  }

  interface EncounterMethodName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy. */
  interface EvolutionChain {
    /** The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon. */
    baby_trigger_item: null | NamedAPIResource;
    /** The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order. */
    chain: Chain;
    /** The identifier for this resource. */
    id: number;
    [property: string]: any;
  }

  interface Chain {
    evolution_details: any[];
    evolves_to: ChainEvolvesTo[];
    is_baby: boolean;
    species: NamedAPIResource;
    [property: string]: any;
  }

  interface ChainEvolvesTo {
    evolution_details: PurpleEvolutionDetail[];
    evolves_to: EvolvesToEvolvesTo[];
    is_baby: boolean;
    species: NamedAPIResource;
    [property: string]: any;
  }

  interface PurpleEvolutionDetail {
    /** The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. */
    gender: number | null;
    /** The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. */
    held_item: null | NamedAPIResource;
    /** The item required to cause evolution this into Pokémon species. */
    item: null | NamedAPIResource;
    /** The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move: null | NamedAPIResource;
    /** The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move_type: null | NamedAPIResource;
    /** The location the evolution must be triggered at. */
    location: null | NamedAPIResource;
    /** The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species. */
    min_affection: number | null;
    /** The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species. */
    min_beauty: number | null;
    /** The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species. */
    min_happiness: number | null;
    /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
    min_level: number | null;
    /** Whether or not it must be raining in the overworld to cause evolution this Pokémon species. */
    needs_overworld_rain: boolean;
    /** The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_species: null | NamedAPIResource;
    /** The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_type: null | NamedAPIResource;
    /** The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
    relative_physical_stats: number | null;
    /** The required time of day. Day or night. */
    time_of_day: string;
    /** Pokémon species for which this one must be traded. */
    trade_species: null | NamedAPIResource;
    /** The type of event that triggers evolution into this Pokémon species. */
    trigger: NamedAPIResource;
    /** Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up. */
    turn_upside_down: boolean;
    [property: string]: any;
  }

  interface EvolvesToEvolvesTo {
    evolution_details: FluffyEvolutionDetail[];
    evolves_to: any[];
    is_baby: boolean;
    species: NamedAPIResource;
    [property: string]: any;
  }

  interface FluffyEvolutionDetail {
    /** The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. */
    gender: number | null;
    /** The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. */
    held_item: null | NamedAPIResource;
    /** The item required to cause evolution this into Pokémon species. */
    item: null | NamedAPIResource;
    /** The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move: null | NamedAPIResource;
    /** The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move_type: null;
    /** The location the evolution must be triggered at. */
    location: null | NamedAPIResource;
    /** The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species. */
    min_affection: null;
    /** The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species. */
    min_beauty: null;
    /** The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species. */
    min_happiness: number | null;
    /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
    min_level: number | null;
    /** Whether or not it must be raining in the overworld to cause evolution this Pokémon species. */
    needs_overworld_rain: boolean;
    /** The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_species: null;
    /** The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_type: null;
    /** The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
    relative_physical_stats: null;
    /** The required time of day. Day or night. */
    time_of_day: string;
    /** Pokémon species for which this one must be traded. */
    trade_species: null;
    /** The type of event that triggers evolution into this Pokémon species. */
    trigger: NamedAPIResource;
    /** Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up. */
    turn_upside_down: boolean;
    [property: string]: any;
  }

  /** Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail. */
  interface EvolutionTrigger {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: EvolutionTriggerName[];
    /** A list of pokemon species that result from this evolution trigger. */
    pokemon_species: NamedAPIResource[];
    [property: string]: any;
  }

  interface EvolutionTriggerName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail. */
  interface Gender {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of Pokémon species that can be this gender and how likely it is that they will be. */
    pokemon_species_details: PokemonSpeciesDetail[];
    /** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
    required_for_evolution: NamedAPIResource[];
    [property: string]: any;
  }

  interface PokemonSpeciesDetail {
    pokemon_species: NamedAPIResource;
    rate: number;
    [property: string]: any;
  }

  /** A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released. */
  interface Generation {
    /** A list of abilities that were introduced in this generation. */
    abilities: NamedAPIResource[];
    /** The identifier for this resource. */
    id: number;
    /** The main region travelled in this generation. */
    main_region: NamedAPIResource;
    /** A list of moves that were introduced in this generation. */
    moves: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: GenerationName[];
    /** A list of Pokémon species that were introduced in this generation. */
    pokemon_species: NamedAPIResource[];
    /** A list of types that were introduced in this generation. */
    types: NamedAPIResource[];
    /** A list of version groups that were introduced in this generation. */
    version_groups: NamedAPIResource[];
    [property: string]: any;
  }

  interface GenerationName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail. */
  interface GrowthRate {
    /** The descriptions of this characteristic listed in different languages. */
    descriptions: GrowthRateDescription[];
    /** The formula used to calculate the rate at which the Pokémon species gains level. */
    formula: string;
    /** The identifier for this resource. */
    id: number;
    /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
    levels: Level[];
    /** The name for this resource. */
    name: string;
    /** A list of Pokémon species that gain levels at this growth rate. */
    pokemon_species: NamedAPIResource[];
    [property: string]: any;
  }

  interface GrowthRateDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface Level {
    experience: number;
    level: number;
    [property: string]: any;
  }

  /** An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area. */
  interface Item {
    /** A list of attributes this item has. */
    attributes: NamedAPIResource[];
    /** An evolution chain this item requires to produce a bay during mating. */
    baby_trigger_for: null | APIResource;
    /** The category of items this item falls into. */
    category: NamedAPIResource;
    /** The price of this item in stores. */
    cost: number;
    /** The effect of this ability listed in different languages. */
    effect_entries: ItemEffectEntry[];
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: ItemFlavorTextEntry[];
    /** The effect of the move Fling when used with this item. */
    fling_effect: null | NamedAPIResource;
    /** The power of the move Fling when used with this item. */
    fling_power: number | null;
    /** A list of game indices relevent to this item by generation. */
    game_indices: ItemGameIndex[];
    /** A list of Pokémon that might be found in the wild holding this item. */
    held_by_pokemon: HeldByPokemon[];
    /** The identifier for this resource. */
    id: number;
    /** A list of the machines related to this item. */
    machines: ItemMachine[];
    /** The name for this resource. */
    name: string;
    /** The name of this item listed in different languages. */
    names: ItemName[];
    /** A set of sprites used to depict this item in the game. */
    sprites: ItemSprites;
    [property: string]: any;
  }

  interface ItemEffectEntry {
    effect: string;
    language: NamedAPIResource;
    short_effect: string;
    [property: string]: any;
  }

  interface ItemFlavorTextEntry {
    language: NamedAPIResource;
    text: string;
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface ItemGameIndex {
    game_index: number;
    generation: NamedAPIResource;
    [property: string]: any;
  }

  interface HeldByPokemon {
    pokemon: NamedAPIResource;
    version_details: HeldByPokemonVersionDetail[];
    [property: string]: any;
  }

  interface HeldByPokemonVersionDetail {
    rarity: number;
    version: NamedAPIResource;
    [property: string]: any;
  }

  interface ItemMachine {
    machine: APIResource;
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface ItemName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface ItemSprites {
    /** The default depiction of this item. */
    default: null | string;
    [property: string]: any;
  }

  /** Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable". */
  interface ItemAttribute {
    /** The description of this item attribute listed in different languages. */
    descriptions: ItemAttributeDescription[];
    /** The identifier for this resource. */
    id: number;
    /** A list of items that have this attribute. */
    items: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this item attribute listed in different languages. */
    names: ItemAttributeName[];
    [property: string]: any;
  }

  interface ItemAttributeDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface ItemAttributeName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Item categories determine where items will be placed in the players bag. */
  interface ItemCategory {
    /** The identifier for this resource. */
    id: number;
    /** A list of items that are a part of this category. */
    items: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this item category listed in different languages. */
    names: ItemCategoryName[];
    /** The pocket items in this category would be put in. */
    pocket: NamedAPIResource;
    [property: string]: any;
  }

  interface ItemCategoryName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** The various effects of the move "Fling" when used with different items. */
  interface ItemFlingEffect {
    /** The result of this fling effect listed in different languages. */
    effect_entries: ItemFlingEffectEffectEntry[];
    /** The identifier for this resource. */
    id: number;
    /** A list of items that have this fling effect. */
    items: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    [property: string]: any;
  }

  interface ItemFlingEffectEffectEntry {
    effect: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  /** Pockets within the players bag used for storing items by category. */
  interface ItemPocket {
    /** A list of item categories that are relevant to this item pocket. */
    categories: NamedAPIResource[];
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: ItemPocketName[];
    [property: string]: any;
  }

  interface ItemPocketName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Languages for translations of API resource information. */
  interface Language {
    /** The identifier for this resource. */
    id: number;
    /** The two-letter code of the language. Note that it is not unique. */
    iso3166: string;
    /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
    iso639: string;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: LanguageName[];
    /** Whether or not the games are published in this language. */
    official: boolean;
    [property: string]: any;
  }

  interface LanguageName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes. */
  interface Location {
    /** Areas that can be found within this location. */
    areas: NamedAPIResource[];
    /** A list of game indices relevent to this location by generation. */
    game_indices: LocationGameIndex[];
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: LocationName[];
    /** The region this location can be found in. */
    region: null | NamedAPIResource;
    [property: string]: any;
  }

  interface LocationGameIndex {
    game_index: number;
    generation: NamedAPIResource;
    [property: string]: any;
  }

  interface LocationName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters. */
  interface LocationArea {
    /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
    encounter_method_rates: EncounterMethodRate[];
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** The identifier for this resource. */
    id: number;
    /** The region this location area can be found in. */
    location: NamedAPIResource;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: LocationAreaName[];
    /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter. */
    pokemon_encounters: LocationAreaPokemonEncounter[];
    [property: string]: any;
  }

  interface EncounterMethodRate {
    /** The method in which Pokémon may be encountered in an area.. */
    encounter_method: NamedAPIResource;
    /** The chance of the encounter to occur on a version of the game. */
    version_details: EncounterMethodRateVersionDetail[];
    [property: string]: any;
  }

  interface EncounterMethodRateVersionDetail {
    rate: number;
    version: NamedAPIResource;
    [property: string]: any;
  }

  interface LocationAreaName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface LocationAreaPokemonEncounter {
    /** The Pokémon being encountered. */
    pokemon: NamedAPIResource;
    /** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
    version_details: PokemonEncounterVersionDetail[];
    [property: string]: any;
  }

  interface PokemonEncounterVersionDetail {
    encounter_details: PurpleEncounterDetail[];
    max_chance: number;
    version: NamedAPIResource;
    [property: string]: any;
  }

  interface PurpleEncounterDetail {
    chance: number;
    condition_values: NamedAPIResource[];
    max_level: number;
    method: NamedAPIResource;
    min_level: number;
    [property: string]: any;
  }

  /** Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine. */
  interface Machine {
    /** The identifier for this resource. */
    id: number;
    /** The TM or HM item that corresponds to this machine. */
    item: NamedAPIResource;
    /** The move that is taught by this machine. */
    move: NamedAPIResource;
    /** The version group that this machine applies to. */
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  /** Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas. */
  interface Move {
    /** The percent value of how likely this move is to be successful. */
    accuracy: number | null;
    /** A detail of normal and super contest combos that require this move. */
    contest_combos: null | ContestCombos;
    /** The effect the move has when used in a contest. */
    contest_effect: null | APIResource;
    /** The type of appeal this move gives a Pokémon when used in a contest. */
    contest_type: null | NamedAPIResource;
    /** The type of damage the move inflicts on the target, e.g. physical. */
    damage_class: NamedAPIResource;
    /** The percent value of how likely it is this moves effect will happen. */
    effect_chance: number | null;
    /** The list of previous effects this move has had across version groups of the games. */
    effect_changes: MoveEffectChange[];
    /** The effect of this move listed in different languages. */
    effect_entries: MoveEffectEntry[];
    /** The flavor text of this move listed in different languages. */
    flavor_text_entries: MoveFlavorTextEntry[];
    /** The generation in which this move was introduced. */
    generation: NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** List of Pokemon that can learn the move */
    learned_by_pokemon: NamedAPIResource[];
    /** A list of the machines that teach this move. */
    machines: MoveMachine[];
    /** Metadata about this move */
    meta: null | Meta;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: MoveName[];
    /** A list of move resource value changes across version groups of the game. */
    past_values: PastValue[];
    /** The base power of this move with a value of 0 if it does not have a base power. */
    power: number | null;
    /** Power points. The number of times this move can be used. */
    pp: number | null;
    /** A value between -8 and 8. Sets the order in which moves are executed during battle. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail. */
    priority: number;
    /** A list of stats this moves effects and how much it effects them. */
    stat_changes: StatChange[];
    /** The effect the move has when used in a super contest. */
    super_contest_effect: null | APIResource;
    /** The type of target that will receive the effects of the attack. */
    target: NamedAPIResource;
    /** The elemental type of this move. */
    type: NamedAPIResource;
    [property: string]: any;
  }

  interface ContestCombos {
    normal: Normal;
    super: Super;
    [property: string]: any;
  }

  interface Normal {
    use_after: NamedAPIResource[] | null;
    use_before: NamedAPIResource[] | null;
    [property: string]: any;
  }

  interface Super {
    use_after: NamedAPIResource[] | null;
    use_before: NamedAPIResource[] | null;
    [property: string]: any;
  }

  interface MoveEffectChange {
    effect_entries: FluffyEffectEntry[];
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface FluffyEffectEntry {
    effect: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface MoveEffectEntry {
    effect: string;
    language: NamedAPIResource;
    short_effect: string;
    [property: string]: any;
  }

  interface MoveFlavorTextEntry {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface MoveMachine {
    machine: APIResource;
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface Meta {
    ailment: NamedAPIResource;
    ailment_chance: number;
    category: NamedAPIResource;
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    max_hits: number | null;
    max_turns: number | null;
    min_hits: number | null;
    min_turns: number | null;
    stat_chance: number;
    [property: string]: any;
  }

  interface MoveName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface PastValue {
    accuracy: number | null;
    effect_chance: number | null;
    effect_entries: PastValueEffectEntry[];
    power: number | null;
    pp: number | null;
    type: null | NamedAPIResource;
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface PastValueEffectEntry {
    effect: string;
    language: NamedAPIResource;
    short_effect: string;
    [property: string]: any;
  }

  interface StatChange {
    change: number;
    stat: NamedAPIResource;
    [property: string]: any;
  }

  /** Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail. */
  interface MoveAilment {
    /** The identifier for this resource. */
    id: number;
    /** A list of moves that cause this ailment. */
    moves: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: MoveAilmentName[];
    [property: string]: any;
  }

  interface MoveAilmentName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail. */
  interface MoveBattleStyle {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: MoveBattleStyleName[];
    [property: string]: any;
  }

  interface MoveBattleStyleName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Very general categories that loosely group move effects. */
  interface MoveCategory {
    /** The description of this resource listed in different languages. */
    descriptions: MoveCategoryDescription[];
    /** The identifier for this resource. */
    id: number;
    /** A list of moves that fall into this category. */
    moves: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    [property: string]: any;
  }

  interface MoveCategoryDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  /** Damage classes moves can have, e.g. physical, special, or non-damaging. */
  interface MoveDamageClass {
    /** The description of this resource listed in different languages. */
    descriptions: MoveDamageClassDescription[];
    /** The identifier for this resource. */
    id: number;
    /** A list of moves that fall into this damage class. */
    moves: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: MoveDamageClassName[];
    [property: string]: any;
  }

  interface MoveDamageClassDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface MoveDamageClassName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Methods by which Pokémon can learn moves. */
  interface MoveLearnMethod {
    /** The description of this resource listed in different languages. */
    descriptions: MoveLearnMethodDescription[];
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: MoveLearnMethodName[];
    /** A list of version groups where moves can be learned through this method. */
    version_groups: NamedAPIResource[];
    [property: string]: any;
  }

  interface MoveLearnMethodDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface MoveLearnMethodName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves. */
  interface MoveTarget {
    /** The description of this resource listed in different languages. */
    descriptions: MoveTargetDescription[];
    /** The identifier for this resource. */
    id: number;
    /** A list of moves that that are directed at this target. */
    moves: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: MoveTargetName[];
    [property: string]: any;
  }

  interface MoveTargetDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface MoveTargetName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail. */
  interface Nature {
    /** The stat decreased by 10% in Pokémon with this nature. */
    decreased_stat: null | NamedAPIResource;
    /** The flavor hated by Pokémon with this nature. */
    hates_flavor: null | NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** The stat increased by 10% in Pokémon with this nature. */
    increased_stat: null | NamedAPIResource;
    /** The flavor liked by Pokémon with this nature. */
    likes_flavor: null | NamedAPIResource;
    /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
    move_battle_style_preferences: MoveBattleStylePreference[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: NatureName[];
    /** A list of Pokéathlon stats this nature effects and how much it effects them. */
    pokeathlon_stat_changes: PokeathlonStatChange[];
    [property: string]: any;
  }

  interface MoveBattleStylePreference {
    /** Chance of using the move, in percent, if HP is over one half. */
    high_hp_preference: number;
    /** Chance of using the move, in percent, if HP is under one half. */
    low_hp_preference: number;
    /** The move battle style. */
    move_battle_style: NamedAPIResource;
    [property: string]: any;
  }

  interface NatureName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface PokeathlonStatChange {
    max_change: number;
    pokeathlon_stat: NamedAPIResource;
    [property: string]: any;
  }

  /** Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to [Pal Park](https://bulbapedia.bulbagarden.net/wiki/Pal_Park). */
  interface PalParkArea {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: PalParkAreaName[];
    /** A list of Pokémon encountered in thi pal park area along with details. */
    pokemon_encounters: PalParkAreaPokemonEncounter[];
    [property: string]: any;
  }

  interface PalParkAreaName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface PalParkAreaPokemonEncounter {
    base_score: number;
    pokemon_species: NamedAPIResource;
    rate: number;
    [property: string]: any;
  }

  /** Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail. */
  interface PokeathlonStat {
    /** A detail of natures which affect this Pokéathlon stat positively or negatively. */
    affecting_natures: PokeathlonStatAffectingNatures;
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: PokeathlonStatName[];
    [property: string]: any;
  }

  interface PokeathlonStatAffectingNatures {
    decrease: AffectingNaturesDecrease[];
    increase: AffectingNaturesIncrease[];
    [property: string]: any;
  }

  interface AffectingNaturesDecrease {
    max_change: number;
    nature: NamedAPIResource;
    [property: string]: any;
  }

  interface AffectingNaturesIncrease {
    max_change: number;
    nature: NamedAPIResource;
    [property: string]: any;
  }

  interface PokeathlonStatName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail. */
  interface PokedexObject {
    /** The description of this resource listed in different languages. */
    descriptions: PokedexDescription[];
    /** The identifier for this resource. */
    id: number;
    /** Whether or not this Pokédex originated in the main series of the video games. */
    is_main_series: boolean;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: PokedexName[];
    /** A list of Pokémon catalogued in this Pokédex and their indexes. */
    pokemon_entries: PokemonEntry[];
    /** The region this Pokédex catalogues Pokémon for. */
    region: null | NamedAPIResource;
    /** A list of version groups this Pokédex is relevant to. */
    version_groups: NamedAPIResource[];
    [property: string]: any;
  }

  interface PokedexDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface PokedexName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface PokemonEntry {
    /** The index of this Pokémon species entry within the Pokédex. */
    entry_number: number;
    /** The Pokémon species being encountered. */
    pokemon_species: NamedAPIResource;
    [property: string]: any;
  }

  interface PokemonEncounter {
    location_area: NamedAPIResource;
    version_details: PokemonEncounterVersionDetailObject[];
    [property: string]: any;
  }

  interface PokemonEncounterVersionDetailObject {
    encounter_details: FluffyEncounterDetail[];
    max_chance: number;
    version: NamedAPIResource;
    [property: string]: any;
  }

  interface FluffyEncounterDetail {
    chance: number;
    condition_values: NamedAPIResource[];
    max_level: number;
    method: NamedAPIResource;
    min_level: number;
    [property: string]: any;
  }

  /** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon.  Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail. */
  interface Pokemon {
    /** A list of abilities this Pokémon could potentially have. */
    abilities: PokemonAbility[];
    /** The base experience gained for defeating this Pokémon. */
    base_experience: number | null;
    /** A list of forms this Pokémon can take on. */
    forms: NamedAPIResource[];
    /** A list of game indices relevent to Pokémon item by generation. */
    game_indices: PokemonGameIndex[];
    /** The height of this Pokémon in decimetres. */
    height: number;
    /** A list of items this Pokémon may be holding when encountered. */
    held_items: HeldItem[];
    /** The identifier for this resource. */
    id: number;
    /** Set for exactly one Pokémon used as the default for each species. */
    is_default: boolean;
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups. */
    moves: MoveElement[];
    /** The name for this resource. */
    name: string;
    /** Order for sorting. Almost national order, except families are grouped together. */
    order: number;
    past_abilities: PastAbility[];
    /** A list of details showing types this pokémon had in previous generations */
    past_types: PastType[];
    /** The species this Pokémon belongs to. */
    species: NamedAPIResource;
    /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at <a href='https://github.com/PokeAPI/sprites#sprites'>PokeAPI/sprites</a> */
    sprites: PokemonSprites;
    /** A list of base stat values for this Pokémon. */
    stats: StatElement[];
    /** A list of details showing types this Pokémon has. */
    types: PokemonType[];
    /** The weight of this Pokémon in hectograms. */
    weight: number;
    [property: string]: any;
  }

  interface PokemonAbility {
    /** The ability the Pokémon may have. */
    ability: NamedAPIResource;
    /** Whether or not this is a hidden ability. */
    is_hidden: boolean;
    /** The slot this ability occupies in this Pokémon species. */
    slot: number;
    [property: string]: any;
  }

  interface PokemonGameIndex {
    game_index: number;
    version: NamedAPIResource;
    [property: string]: any;
  }

  interface HeldItem {
    item: NamedAPIResource;
    version_details: HeldItemVersionDetail[];
    [property: string]: any;
  }

  interface HeldItemVersionDetail {
    rarity: number;
    version: NamedAPIResource;
    [property: string]: any;
  }

  interface MoveElement {
    move: NamedAPIResource;
    version_group_details: VersionGroupDetail[];
    [property: string]: any;
  }

  interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface PastAbility {
    abilities: PastAbilityAbility[];
    generation: NamedAPIResource;
    [property: string]: any;
  }

  interface PastAbilityAbility {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
    [property: string]: any;
  }

  interface PastType {
    generation: NamedAPIResource;
    types: PastTypeType[];
    [property: string]: any;
  }

  interface PastTypeType {
    slot: number;
    type: NamedAPIResource;
    [property: string]: any;
  }

  interface PokemonSprites {
    /** The default depiction of this Pokémon from the back in battle. */
    back_default: null | string;
    /** The female depiction of this Pokémon from the back in battle. */
    back_female: null | string;
    /** The shiny depiction of this Pokémon from the back in battle. */
    back_shiny: null | string;
    /** The shiny female depiction of this Pokémon from the back in battle. */
    back_shiny_female: null | string;
    /** The default depiction of this Pokémon from the front in battle. */
    front_default: null | string;
    /** The female depiction of this Pokémon from the front in battle. */
    front_female: null | string;
    /** The shiny depiction of this Pokémon from the front in battle. */
    front_shiny: null | string;
    /** The shiny female depiction of this Pokémon from the front in battle. */
    front_shiny_female: null | string;
    other: Other;
    versions: Versions;
    [property: string]: any;
  }

  interface Other {
    dream_world: DreamWorld;
    home: Home;
    "official-artwork": OfficialArtwork;
    showdown: Showdown;
    [property: string]: any;
  }

  interface DreamWorld {
    front_default: null | string;
    front_female: null | string;
    [property: string]: any;
  }

  interface Home {
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface OfficialArtwork {
    front_default: null | string;
    front_shiny: null | string;
    [property: string]: any;
  }

  interface Showdown {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": GenerationVi;
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
    [property: string]: any;
  }

  interface GenerationI {
    "red-blue": RedBlue;
    yellow: Yellow;
    [property: string]: any;
  }

  interface RedBlue {
    back_default: null | string;
    back_gray: null | string;
    back_transparent: null | string;
    front_default: null | string;
    front_gray: null | string;
    front_transparent: null | string;
    [property: string]: any;
  }

  interface Yellow {
    back_default: null | string;
    back_gray: null | string;
    back_transparent: null | string;
    front_default: null | string;
    front_gray: null | string;
    front_transparent: null | string;
    [property: string]: any;
  }

  interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
    [property: string]: any;
  }

  interface Crystal {
    back_default: null | string;
    back_shiny: null | string;
    back_shiny_transparent: null | string;
    back_transparent: null | string;
    front_default: null | string;
    front_shiny: null | string;
    front_shiny_transparent: null | string;
    front_transparent: null | string;
    [property: string]: any;
  }

  interface Gold {
    back_default: null | string;
    back_shiny: null | string;
    front_default: null | string;
    front_shiny: null | string;
    front_transparent: null | string;
    [property: string]: any;
  }

  interface Silver {
    back_default: null | string;
    back_shiny: null | string;
    front_default: null | string;
    front_shiny: null | string;
    front_transparent: null | string;
    [property: string]: any;
  }

  interface GenerationIii {
    emerald: Emerald;
    "firered-leafgreen": FireredLeafgreen;
    "ruby-sapphire": RubySapphire;
    [property: string]: any;
  }

  interface Emerald {
    front_default: null | string;
    front_shiny: null | string;
    [property: string]: any;
  }

  interface FireredLeafgreen {
    back_default: null | string;
    back_shiny: null | string;
    front_default: null | string;
    front_shiny: null | string;
    [property: string]: any;
  }

  interface RubySapphire {
    back_default: null | string;
    back_shiny: null | string;
    front_default: null | string;
    front_shiny: null | string;
    [property: string]: any;
  }

  interface GenerationIv {
    "diamond-pearl": DiamondPearl;
    "heartgold-soulsilver": HeartgoldSoulsilver;
    platinum: Platinum;
    [property: string]: any;
  }

  interface DiamondPearl {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface HeartgoldSoulsilver {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface Platinum {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface GenerationV {
    "black-white": BlackWhite;
    [property: string]: any;
  }

  interface BlackWhite {
    animated: Animated;
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface Animated {
    back_default: null | string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire;
    "x-y": XY;
    [property: string]: any;
  }

  interface OmegarubyAlphasapphire {
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface XY {
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface GenerationVii {
    icons: GenerationViiIcons;
    "ultra-sun-ultra-moon": UltraSunUltraMoon;
    [property: string]: any;
  }

  interface GenerationViiIcons {
    front_default: null | string;
    front_female: null | string;
    [property: string]: any;
  }

  interface UltraSunUltraMoon {
    front_default: null | string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface GenerationViii {
    icons: GenerationViiiIcons;
    [property: string]: any;
  }

  interface GenerationViiiIcons {
    front_default: null | string;
    front_female: null | string;
    [property: string]: any;
  }

  interface StatElement {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
    [property: string]: any;
  }

  interface PokemonType {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** The type the referenced Pokémon has. */
    type: NamedAPIResource;
    [property: string]: any;
  }

  /** Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown. */
  interface PokemonColor {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: PokemonColorName[];
    /** A list of the Pokémon species that have this color. */
    pokemon_species: NamedAPIResource[];
    [property: string]: any;
  }

  interface PokemonColorName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety. */
  interface PokemonForm {
    /** The name of this form. */
    form_name: string;
    /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name. */
    form_names: FormName[];
    /** The order in which forms should be sorted within a species' forms. */
    form_order: number;
    /** The identifier for this resource. */
    id: number;
    /** Whether or not this form can only happen during battle. */
    is_battle_only: boolean;
    /** True for exactly one form used as the default for each Pokémon. */
    is_default: boolean;
    /** Whether or not this form requires mega evolution. */
    is_mega: boolean;
    /** The name for this resource. */
    name: string;
    /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name. */
    names: PokemonFormName[];
    /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
    order: number;
    /** The Pokémon that can take on this form. */
    pokemon: NamedAPIResource;
    /** A set of sprites used to depict this Pokémon form in the game. */
    sprites: PokemonFormSprites;
    /** A list of details showing types this Pokémon form has. */
    types: PokemonFormType[];
    /** The version group this Pokémon form was introduced in. */
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface FormName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface PokemonFormName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface PokemonFormSprites {
    /** The default depiction of this Pokémon form from the back in battle. */
    back_default: null | string;
    back_female: null | string;
    /** The shiny depiction of this Pokémon form from the back in battle. */
    back_shiny: null | string;
    back_shiny_female: null | string;
    /** The default depiction of this Pokémon form from the front in battle. */
    front_default: null | string;
    front_female: null | string;
    /** The shiny depiction of this Pokémon form from the front in battle. */
    front_shiny: null | string;
    front_shiny_female: null | string;
    [property: string]: any;
  }

  interface PokemonFormType {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** The type the referenced Form has. */
    type: NamedAPIResource;
    [property: string]: any;
  }

  /** Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon. */
  interface PokemonHabitat {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: PokemonHabitatName[];
    /** A list of the Pokémon species that can be found in this habitat. */
    pokemon_species: NamedAPIResource[];
    [property: string]: any;
  }

  interface PokemonHabitatName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Shapes used for sorting Pokémon in a Pokédex. */
  interface PokemonShape {
    /** The "scientific" name of this Pokémon shape listed in different languages. */
    awesome_names: AwesomeName[];
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: PokemonShapeName[];
    /** A list of the Pokémon species that have this shape. */
    pokemon_species: NamedAPIResource[];
    [property: string]: any;
  }

  interface AwesomeName {
    /** The localized "scientific" name for an API resource in a specific language. */
    awesome_name: string;
    /** The language this "scientific" name is in. */
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface PokemonShapeName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant. */
  interface PokemonSpecies {
    /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
    base_happiness: number | null;
    /** The base capture rate; up to 255. The higher the number, the easier the catch. */
    capture_rate: number;
    /** The color of this Pokémon for Pokédex search. */
    color: NamedAPIResource;
    /** A list of egg groups this Pokémon species is a member of. */
    egg_groups: NamedAPIResource[];
    /** The evolution chain this Pokémon species is a member of. */
    evolution_chain: APIResource;
    /** The Pokémon species that evolves into this Pokemon_species. */
    evolves_from_species: null | NamedAPIResource;
    /** A list of flavor text entries for this Pokémon species. */
    flavor_text_entries: PokemonSpeciesFlavorTextEntry[];
    /** Descriptions of different forms Pokémon take on within the Pokémon species. */
    form_descriptions: FormDescription[];
    /** Whether or not this Pokémon has multiple forms and can switch between them. */
    forms_switchable: boolean;
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    gender_rate: number;
    /** The genus of this Pokémon species listed in multiple languages. */
    genera: Genus[];
    /** The generation this Pokémon species was introduced in. */
    generation: NamedAPIResource;
    /** The rate at which this Pokémon species gains levels. */
    growth_rate: NamedAPIResource;
    /** The habitat this Pokémon species can be encountered in. */
    habitat: null | NamedAPIResource;
    /** Whether or not this Pokémon has visual gender differences. */
    has_gender_differences: boolean;
    /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. */
    hatch_counter: number | null;
    /** The identifier for this resource. */
    id: number;
    /** Whether or not this is a baby Pokémon. */
    is_baby: boolean;
    /** Whether or not this is a legendary Pokémon. */
    is_legendary: boolean;
    /** Whether or not this is a mythical Pokémon. */
    is_mythical: boolean;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: PokemonSpeciesName[];
    /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
    order: number;
    /** A list of encounters that can be had with this Pokémon species in pal park. */
    pal_park_encounters: PalParkEncounter[];
    /** A list of Pokedexes and the indexes reserved within them for this Pokémon species. */
    pokedex_numbers: PokedexNumber[];
    /** The shape of this Pokémon for Pokédex search. */
    shape: null | NamedAPIResource;
    /** A list of the Pokémon that exist within this Pokémon species. */
    varieties: Variety[];
    [property: string]: any;
  }

  interface PokemonSpeciesFlavorTextEntry {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
    [property: string]: any;
  }

  interface FormDescription {
    description: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface Genus {
    /** The localized genus for the referenced Pokémon species */
    genus: string;
    /** The language this genus is in. */
    language: NamedAPIResource;
    [property: string]: any;
  }

  interface PokemonSpeciesName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface PalParkEncounter {
    area: NamedAPIResource;
    base_score: number;
    rate: number;
    [property: string]: any;
  }

  interface PokedexNumber {
    entry_number: number;
    pokedex: NamedAPIResource;
    [property: string]: any;
  }

  interface Variety {
    is_default: boolean;
    pokemon: NamedAPIResource;
    [property: string]: any;
  }

  /** A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them. */
  interface Region {
    /** The identifier for this resource. */
    id: number;
    /** A list of locations that can be found in this region. */
    locations: NamedAPIResource[];
    /** The generation this region was introduced in. */
    main_generation: null | NamedAPIResource;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: RegionName[];
    /** A list of pokédexes that catalogue Pokémon in this region. */
    pokedexes: NamedAPIResource[];
    /** A list of version groups where this region can be visited. */
    version_groups: NamedAPIResource[];
    [property: string]: any;
  }

  interface RegionName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. */
  interface Stat {
    /** A detail of moves which affect this stat positively or negatively. */
    affecting_moves: AffectingMoves;
    /** A detail of natures which affect this stat positively or negatively. */
    affecting_natures: StatAffectingNatures;
    /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat. */
    characteristics: APIResource[];
    /** ID the games use for this stat. */
    game_index: number;
    /** The identifier for this resource. */
    id: number;
    /** Whether this stat only exists within a battle. */
    is_battle_only: boolean;
    /** The class of damage this stat is directly related to. */
    move_damage_class: null | NamedAPIResource;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: StatName[];
    [property: string]: any;
  }

  interface AffectingMoves {
    decrease: AffectingMovesDecrease[];
    increase: AffectingMovesIncrease[];
    [property: string]: any;
  }

  interface AffectingMovesDecrease {
    change: number;
    move: NamedAPIResource;
    [property: string]: any;
  }

  interface AffectingMovesIncrease {
    change: number;
    move: NamedAPIResource;
    [property: string]: any;
  }

  interface StatAffectingNatures {
    decrease: NamedAPIResource[];
    increase: NamedAPIResource[];
    [property: string]: any;
  }

  interface StatName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Super contest effects refer to the effects of moves when used in super contests. */
  interface SuperContestEffect {
    /** The level of appeal this super contest effect has. */
    appeal: number;
    /** The flavor text of this super contest effect listed in different languages. */
    flavor_text_entries: SuperContestEffectFlavorTextEntry[];
    /** The identifier for this resource. */
    id: number;
    /** A list of moves that have the effect when used in super contests. */
    moves: NamedAPIResource[];
    [property: string]: any;
  }

  interface SuperContestEffectFlavorTextEntry {
    flavor_text: string;
    language: NamedAPIResource;
    [property: string]: any;
  }

  /** Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against. */
  interface Type {
    /** A detail of how effective this type is toward others and vice versa. */
    damage_relations: TypeDamageRelations;
    /** A list of game indices relevent to this item by generation. */
    game_indices: TypeGameIndex[];
    /** The generation this type was introduced in. */
    generation: NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** The class of damage inflicted by this type. */
    move_damage_class: null | NamedAPIResource;
    /** A list of moves that have this type. */
    moves: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: TypeName[];
    /** A list of details of how effective this type was toward others and vice versa in previous generations */
    past_damage_relations: PastDamageRelation[];
    /** A list of details of Pokémon that have this type. */
    pokemon: TypePokemon[];
    [property: string]: any;
  }

  interface TypeDamageRelations {
    double_damage_from: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    no_damage_to: NamedAPIResource[];
    [property: string]: any;
  }

  interface TypeGameIndex {
    game_index: number;
    generation: NamedAPIResource;
    [property: string]: any;
  }

  interface TypeName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  interface PastDamageRelation {
    damage_relations: PastDamageRelationDamageRelations;
    generation: NamedAPIResource;
    [property: string]: any;
  }

  interface PastDamageRelationDamageRelations {
    double_damage_from: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    no_damage_to: NamedAPIResource[];
    [property: string]: any;
  }

  interface TypePokemon {
    /** The Pokémon that has the referenced type. */
    pokemon: NamedAPIResource;
    /** The order the Pokémon's types are listed in. */
    slot: number;
    [property: string]: any;
  }

  /** Versions of the games, e.g., Red, Blue or Yellow. */
  interface Version {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: VersionName[];
    /** The version group this version belongs to. */
    version_group: NamedAPIResource;
    [property: string]: any;
  }

  interface VersionName {
    language: NamedAPIResource;
    name: string;
    [property: string]: any;
  }

  /** Version groups categorize highly similar versions of the games. */
  interface VersionGroup {
    /** The generation this version was introduced in. */
    generation: NamedAPIResource;
    /** The identifier for this resource. */
    id: number;
    /** A list of methods in which Pokémon can learn moves in this version group. */
    move_learn_methods: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
    order: number;
    /** A list of Pokédexes introduces in this version group. */
    pokedexes: NamedAPIResource[];
    /** A list of regions that can be visited in this version group. */
    regions: NamedAPIResource[];
    /** The versions this version group owns. */
    versions: NamedAPIResource[];
    [property: string]: any;
  }

  interface ListEndpointOptions {
    /** The offset to be used in the request */
    offset?: number;
    /** The limit to be used in the request */
    limit?: number;
    /** The limit of the cache in milliseconds */
    cacheLimit?: number;
  }

  export class Pokedex {
    constructor(config?: {
      /** The protocol to be used
       * @default 'https' */
      protocol?: "https" | "http";
      /** The hostname of the PokeAPI instance
       * @default 'pokeapi.co' */
      hostName?: string;
      /** The version path of the API
       * @default '/api/v2/' */
      versionPath?: string;
      /** The offset to be used in list requests
       * @default 0 */
      offset?: number;
      /** The limit to be used in list requests
       * @default 100000 */
      limit?: number;
      /** The timeout of a response in milliseconds
       * @default 10 * 1000 // (10 seconds) */
      timeout?: number;
      /** Enables browsers to cache all responses when set to `true`
       * @default true */
      cache?: boolean;
      /** Enables browsers to cache images when set to `true`. [Learn more](https://github.com/PokeAPI/pokeapi-js-wrapper#caching-images)
       * @default false */
      cacheImages?: boolean;
    });

    getBerryByName(name: string | number | string[] | number[]): Promise<Berry>;
    getBerryFirmnessByName(name: string | string[]): Promise<BerryFirmness>;
    getBerryFlavorByName(name: string | number | string[] | number[]): Promise<BerryFlavor>;
    getContestTypeByName(name: string | number | string[] | number[]): Promise<ContestType>;
    getContestEffectById(id: number | number[]): Promise<ContestEffect>;
    getSuperContestEffectById(id: number | number[]): Promise<SuperContestEffect>;
    getEncounterMethodByName(name: string | number | string[] | number[]): Promise<EncounterMethod>;
    getEncounterConditionByName(name: string | number | string[] | number[]): Promise<EncounterCondition>;
    getEncounterConditionValueByName(name: string | number | string[] | number[]): Promise<EncounterConditionValue>;
    getEvolutionChainById(id: number | number[]): Promise<EvolutionChain>;
    getEvolutionTriggerByName(name: string | number | string[] | number[]): Promise<EvolutionTrigger>;
    getGenerationByName(name: string | number | string[] | number[]): Promise<Generation>;
    getPokedexByName(name: string | number | string[] | number[]): Promise<PokedexObject>;
    getVersionByName(name: string | number | string[] | number[]): Promise<Version>;
    getVersionGroupByName(name: string | number | string[] | number[]): Promise<VersionGroup>;
    getItemByName(name: string | number | string[] | number[]): Promise<Item>;
    getItemAttributeByName(name: string | number | string[] | number[]): Promise<ItemAttribute>;
    getItemCategoryByName(name: string | number | string[] | number[]): Promise<ItemCategory>;
    getItemFlingEffectByName(name: string | number | string[] | number[]): Promise<ItemFlingEffect>;
    getItemPocketByName(name: string | number | string[] | number[]): Promise<ItemPocket>;
    getMachineById(id: number | number[]): Promise<Machine>;
    getMoveByName(name: string | number | string[] | number[]): Promise<Move>;
    getMoveAilmentByName(name: string | number | string[] | number[]): Promise<MoveAilment>;
    getMoveBattleStyleByName(name: string | number | string[] | number[]): Promise<MoveBattleStyle>;
    getMoveCategoryByName(name: string | number | string[] | number[]): Promise<MoveCategory>;
    getMoveDamageClassByName(name: string | number | string[] | number[]): Promise<MoveDamageClass>;
    getMoveLearnMethodByName(name: string | number | string[] | number[]): Promise<MoveLearnMethod>;
    getMoveTargetByName(name: string | number | string[] | number[]): Promise<MoveTarget>;
    getLocationByName(name: string | number | string[] | number[]): Promise<Location>;
    getLocationAreaByName(name: string | number | string[] | number[]): Promise<LocationArea>;
    getPalParkAreaByName(name: string | number | string[] | number[]): Promise<PalParkArea>;
    getRegionByName(name: string | number | string[] | number[]): Promise<Region>;
    getAbilityByName(name: string | number | string[] | number[]): Promise<Ability>;
    getCharacteristicById(id: number | number[]): Promise<Characteristic>;
    getEggGroupByName(name: string | number | string[] | number[]): Promise<EggGroup>;
    getGenderByName(name: string | number | string[] | number[]): Promise<Gender>;
    getGrowthRateByName(name: string | number | string[] | number[]): Promise<GrowthRate>;
    getNatureByName(name: string | number | string[] | number[]): Promise<Nature>;
    getPokeathlonStatByName(name: string | number | string[] | number[]): Promise<PokeathlonStat>;
    getPokemonByName(name: string | number | string[] | number[]): Promise<Pokemon>;
    getPokemonEncounterAreasByName(name: string | number | string[] | number[]): Promise<PokemonEncounter[]>;
    getPokemonColorByName(name: string | number | string[] | number[]): Promise<PokemonColor>;
    getPokemonFormByName(name: string | number | string[] | number[]): Promise<PokemonForm>;
    getPokemonHabitatByName(name: string | number | string[] | number[]): Promise<PokemonHabitat>;
    getPokemonShapeByName(name: string | number | string[] | number[]): Promise<PokemonShape>;
    getPokemonSpeciesByName(name: string | number | string[] | number[]): Promise<PokemonSpecies>;
    getStatByName(name: string | number | string[] | number[]): Promise<Stat>;
    getTypeByName(name: string | number | string[] | number[]): Promise<Type>;
    getLanguageByName(name: string | number | string[] | number[]): Promise<Language>;

    getEndpointsList(dict?: {  offset: number, limit: number }): Promise<EndpointsList>;
    getBerriesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getBerriesFirmnesssList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getBerriesFlavorsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getContestTypesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getContestEffectsList(dict?: {  offset: number, limit: number }): Promise<APIResourceList>;
    getSuperContestEffectsList(dict?: {  offset: number, limit: number }): Promise<APIResourceList>;
    getEncounterMethodsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getEncounterConditionsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getEncounterConditionValuesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getEvolutionChainsList(dict?: {  offset: number, limit: number }): Promise<APIResourceList>;
    getEvolutionTriggersList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getGenerationsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPokedexsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getVersionsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getVersionGroupsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getItemsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getItemAttributesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getItemCategoriesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getItemFlingEffectsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getItemPocketsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getMachinesList(dict?: {  offset: number, limit: number }): Promise<APIResourceList>;
    getMovesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getMoveAilmentsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getMoveBattleStylesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getMoveCategoriesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getMoveDamageClassesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getMoveLearnMethodsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getMoveTargetsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getLocationsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getLocationAreasList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPalParkAreasList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getRegionsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getAbilitiesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getCharacteristicsList(dict?: {  offset: number, limit: number }): Promise<APIResourceList>;
    getEggGroupsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getGendersList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getGrowthRatesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getNaturesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPokeathlonStatsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPokemonsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPokemonColorsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPokemonFormsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPokemonHabitatsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPokemonShapesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getPokemonSpeciesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getStatsList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getTypesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;
    getLanguagesList(dict?: {  offset: number, limit: number }): Promise<NamedAPIResourceList>;

    /** Use .resource() to query any URL or path. */
    resource(param: string | string[]): Promise<any | any[]>;
  }
}
