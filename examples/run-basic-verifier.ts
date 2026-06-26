import { createPhaseReport, serializeReport, verifySafetyGate } from "../src/index.js";

const verification = verifySafetyGate({
  phaseName: "Open Foundation Example",
  providerCallsAllowed: false,
  mediaGenerationAllowed: false,
  autoApprovalAllowed: false,
  humanApprovalRequired: true,
  evidenceProvided: true
});

const report = createPhaseReport({
  project: "ORACLE CUT Open Foundation",
  phase: "Example Safety Gate",
  verification,
  summary: "Example verifier run with safe defaults."
});

console.log(serializeReport(report));
