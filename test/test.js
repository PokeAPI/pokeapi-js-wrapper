import { Pokedex } from "../src/index.js";
import { describe, it, before } from "node:test";
import assert from "node:assert/strict";

describe("pokedex", { timeout: 30000 }, function () {
  let p1;
  let p2;

  const id = 2;
  const path = '/api/v2/pokemon/34';
  const url = 'https://pokeapi.co/api/v2/pokemon/35';
  const interval = { limit: 10, offset: 34 };

  before(async function () {
    p1 = await Pokedex.init({ cacheImages: false });
    p2 = await Pokedex.init({
      protocol: 'https',
      offset: 10,
      limit: 1,
      timeout: 10000,
      cache: false
    });
  });

  // --- Utility Methods ---
  describe(".getConfig()", function () {
    it("should return protocol property", function () {
      // p2 is now guaranteed to be initialized here
      const config = p2.getConfig();
      assert.ok(Object.hasOwn(config, 'protocol'), "Config should have protocol");
    });
  });

  // --- List Methods ---
  describe(".getPokemonsList()", function () {
    it("should succeed with default interval", async function () {
      const res = await p2.getPokemonsList();
      assert.ok(res.results, "Response should have results");
      assert.strictEqual(res.results.length, 1);
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