import { Pokedex } from "../src/index.js";
import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("pokedex", { timeout: 30000 }, function () {
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
      assert.ok(Object.hasOwn(config, 'protocol'), "Config should have protocol");
    });
  });

  describe(".clearCache()", function () {
    it("should be rejected", async function () {
      await assert.rejects(p2.clearCache());
      await assert.rejects(p2.getCacheLength());
    });
  });

  // --- List Methods ---

  describe(".getPokemonsList()", function () {
    it("should succeed with default interval", async function () {
      const res = await p2.getPokemonsList();
      assert.ok(res.results, "Response should have results");
      assert.strictEqual(res.results.length, 1);
      assert.strictEqual(res.results[0].name, "caterpie");
    });

    it("should succeed with custom interval", async function () {
      const res = await p1.getPokemonsList(interval);
      assert.ok(res.results);
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
      assert.strictEqual(res.length, 3);
      // Replacement for chai-things: loop through and assert
      res.forEach(item => {
        assert.ok(item.name, `Item ${item.url} should have a name`);
      });
    });

    it("should succeed with a path string", async function () {
      const res = await p1.resource(path);
      assert.ok(Object.hasOwn(res, 'height'));
    });

    it("should succeed with a URL string", async function () {
      const res = await p1.resource(url);
      assert.ok(Object.hasOwn(res, 'height'));
    });
  });

  // --- Root Endpoints ---

  describe("Root Endpoints", function () {
    it(".getEndpointsList() should have property pokedex", async function () {
      const res = await p1.getEndpointsList();
      assert.ok(res.pokedex);
    });

    it(".getBerriesList() should have property count", async function () {
      const res = await p1.getBerriesList();
      assert.ok(Object.hasOwn(res, 'count'));
    });

    it(".getMovesList() should have property count", async function () {
      const res = await p1.getMovesList();
      assert.ok(Object.hasOwn(res, 'count'));
    });
  });

  // --- Specific Data Endpoints ---

  describe(".getBerryByName()", function () {
    it("should fetch berries using an array of strings", async function () {
      const res = await p1.getBerryByName(['cheri', 'chesto', 'pecha']);
      assert.strictEqual(res.length, 3);
      res.forEach(berry => assert.ok(berry.growth_time));
    });

    it("should fetch a berry by ID", async function () {
      const res = await p1.getBerryByName(id);
      assert.ok(res.name);
    });
  });

  describe(".getPokemonByName()", function () {
    it("should fetch pokemons using an array of IDs", async function () {
      const res = await p1.getPokemonByName([15, 35, 433]);
      assert.strictEqual(res.length, 3);
      res.forEach(pokemon => assert.ok(pokemon.height));
    });

    it("should fetch a pokemon by ID", async function () {
      const res = await p1.getPokemonByName(id);
      assert.ok(res.name);
    });
  });

  describe(".getAbilityByName()", function () {
    it("should fetch ability data by ID", async function () {
      const res = await p1.getAbilityByName(id);
      assert.ok(res.name);
    });
  });

  // --- Failure Cases ---

  describe("Error Handling", function () {
    it("should fail when getting a non-existent berry", async function () {
      await assert.rejects(
        p1.getBerryByName('non-existent-berry'),
        Error
      );
    });
  });
});