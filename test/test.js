import { Pokedex } from "../src/index.js";
import * as chai from 'chai';
import chaiThings from 'chai-things';
import chaiAsPromised from 'chai-as-promised';

const expect = chai.expect;
chai.use(chaiThings);
chai.use(chaiAsPromised);

describe("pokedex", function () {
  // Set a high timeout for the entire suite to account for PokeAPI response times
  this.timeout(30000);

  const id = 2;
  const path = '/api/v2/pokemon/34';
  const url = 'https://pokeapi.co/api/v2/pokemon/35';
  const p1 = new Pokedex({ cacheImages: false });
  const p2 = new Pokedex({
    protocol: 'https',
    offset: 10,
    limit: 1,
    timeout: 10000,
    cache: false
  });
  const interval = { limit: 10, offset: 34 };

  // --- Utility Methods ---

  describe(".getConfig()", function () {
    it("should return protocol property", function () {
      const config = p2.getConfig();
      expect(config).to.have.property('protocol');
    });
  });

  describe(".clearCache()", function () {
    it("should be rejected", async function () {
      expect(p2.clearCache()).to.be.rejected;
      expect(p2.getCacheLength()).to.be.rejected;
    });
  });

  // --- List Methods ---

  describe(".getPokemonsList()", function () {
    it("should succeed with default interval", async function () {
      const res = await p2.getPokemonsList();
      expect(res).to.have.property('results');
      expect(res.results).to.have.lengthOf(1);
      expect(res.results[0].name).to.be.equal("caterpie");
    });

    it("should succeed with custom interval", async function () {
      const res = await p1.getPokemonsList(interval);
      expect(res).to.have.property('results');
    });
  });

  // --- Resource Methods ---

  describe(".resource()", function () {
    it("should succeed with an array of mixed resources", async function () {
      const res = await p1.resource([
        '/api/v2/pokemon/36',
        'api/v2/berry/8',
        'https://pokeapi.co/api/v2/ability/9/'
      ]);
      expect(res).to.have.length(3);
      expect(res).to.all.have.property('name');
    });

    it("should succeed with a path string", async function () {
      const res = await p1.resource(path);
      expect(res).to.have.property('height');
    });

    it("should succeed with a URL string", async function () {
      const res = await p1.resource(url);
      expect(res).to.have.property('height');
    });
  });

  // --- Root Endpoints (Sample of endpoints) ---

  describe("Root Endpoints", function () {
    it(".getEndpointsList() should have property pokedex", async function () {
      const res = await p1.getEndpointsList();
      expect(res).to.have.property("pokedex");
    });

    it(".getBerriesList() should have property count", async function () {
      const res = await p1.getBerriesList();
      expect(res).to.have.property("count");
    });

    it(".getMovesList() should have property count", async function () {
      const res = await p1.getMovesList();
      expect(res).to.have.property("count");
    });
  });

  // --- Specific Data Endpoints ---

  describe(".getBerryByName()", function () {
    it("should fetch berries using an array of strings", async function () {
      const res = await p1.getBerryByName(['cheri', 'chesto', 'pecha']);
      expect(res).to.have.length(3);
      expect(res).to.all.have.property('growth_time');
    });

    it("should fetch a berry by ID", async function () {
      const res = await p1.getBerryByName(id);
      expect(res).to.have.property("name");
    });
  });

  describe(".getPokemonByName()", function () {
    it("should fetch pokemons using an array of IDs", async function () {
      const res = await p1.getPokemonByName([15, 35, 433]);
      expect(res).to.have.length(3);
      expect(res).to.all.have.property('height');
    });

    it("should fetch a pokemon by ID", async function () {
      const res = await p1.getPokemonByName(id);
      expect(res).to.have.property("name");
    });
  });

  describe(".getAbilityByName()", function () {
    it("should fetch ability data by ID", async function () {
      const res = await p1.getAbilityByName(id);
      expect(res).to.have.property("name");
    });
  });

  // --- Failure Cases ---

  describe("Error Handling", function () {
    it("should fail when getting a non-existent berry", async function () {
      try {
        await p1.getBerryByName('non-existent-berry');
        throw new Error("Promise should have rejected");
      } catch (err) {
        // If it reaches here, the test passes because the promise rejected
      }
    });
  });
});