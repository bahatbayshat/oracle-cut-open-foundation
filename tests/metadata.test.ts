import test from "node:test";
import assert from "node:assert/strict";
import { scoreMetadataRisk } from "../src/metadata/index.js";

test("scores low metadata risk", () => {
  assert.equal(scoreMetadataRisk({
    hasSource: true,
    hasLicense: true,
    hasModificationHistory: true,
    containsSensitiveData: false
  }), "low");
});

test("scores high metadata risk", () => {
  assert.equal(scoreMetadataRisk({
    hasSource: false,
    hasLicense: false,
    hasModificationHistory: false,
    containsSensitiveData: true
  }), "high");
});
