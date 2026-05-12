import { Pokedex } from "../src/index.js";
import { describe, it, before } from "node:test";
import assert from "node:assert/strict";

describe("pokedex", { timeout: 30000 }, function () {
  let p1;
  let p2;

  const id = 2;
  const string = 'pokemon/33';
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

  // --- Resource Methods ---
  describe(".resource()", function () {
    it("should succeed with a single path", async function () {
      const res = await p1.resource(path);
      assert.ok(res.height, "Response should have height");
    });
    it("should succeed with a single path", async function () {
      const res = await p1.resource(string);
      assert.ok(res.height, "Response should have height");
    });
    it("should succeed with an array of paths", async function () {
      const res = await p1.resource([path, url, string]);
      assert.strictEqual(res.length, 3);
      assert.ok(res[0].height, 'Should have property height');
      assert.ok(res[1].height, 'Should have property height');
      assert.ok(res[2].height, 'Should have property height');
    });
    it("should succeed with an array of paths with trailing /", async function () {
      const res = await p1.resource([`${path}/`, `${url}/`, `${string}/`]);
      assert.strictEqual(res.length, 3);
      assert.ok(res[0].height, 'Should have property height');
      assert.ok(res[1].height, 'Should have property height');
      assert.ok(res[2].height, 'Should have property height');
    });
    it("should fail with an invalid path", async function () {
        const result = await p1.resource(123);
        assert.strictEqual(result, "String or Array is required");
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

  // --- IndexedDB ---
  describe("IndexedDB", function () {
    it(".getCacheLength() should throw an error", async function () {
      await assert.rejects(
        p1.getCacheLength(),
        Error
      );
    });
    it(".clearCache() should throw an error", async function () {
      await assert.rejects(
        p1.clearCache(),
        Error
      );
    });
    it(".invalidateCache() should throw an error", async function () {
      await assert.rejects(
        p1.invalidateCache(),
        Error
      );
    });
  });
});