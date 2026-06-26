import test from "node:test";
import assert from "node:assert/strict";
import { verifySafetyGate } from "../src/verifier/index.js";

test("passes safe gate", () => {
  const result = verifySafetyGate({
    phaseName: "Safe Documentation Phase",
    providerCallsAllowed: false,
    mediaGenerationAllowed: false,
    autoApprovalAllowed: false,
    humanApprovalRequired: true,
    evidenceProvided: true
  });

  assert.equal(result.status, "pass");
  assert.deepEqual(result.findings, []);
});

test("fails auto approval", () => {
  const result = verifySafetyGate({
    phaseName: "Unsafe Phase",
    providerCallsAllowed: false,
    mediaGenerationAllowed: false,
    autoApprovalAllowed: true,
    humanApprovalRequired: true,
    evidenceProvided: true
  });

  assert.equal(result.status, "fail");
  assert.match(result.findings.join(" "), /Auto-approval/);
});
