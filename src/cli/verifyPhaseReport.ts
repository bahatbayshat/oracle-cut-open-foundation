import fs from "node:fs";

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: npm run verify:phase -- <path-to-phase-input.json>");
  process.exit(1);
}

const input = JSON.parse(fs.readFileSync(filePath, "utf8"));
const findings: string[] = [];

if (!input.phaseId) findings.push("Missing phaseId.");
if (!input.title) findings.push("Missing title.");
if (!input.summary) findings.push("Missing summary.");
if (!input.gateState) findings.push("Missing gateState.");
if (!Array.isArray(input.evidence) || input.evidence.length === 0) findings.push("At least one evidence item is required.");
if (input.irreversibleAction === true && input.humanApprovalRequired !== true) findings.push("Irreversible actions must require explicit human approval.");

console.log(JSON.stringify({
  tool: "oracle-cut-open-foundation-phase-verifier",
  version: "0.2.0",
  passed: findings.length === 0,
  findings,
  checkedAt: new Date().toISOString()
}, null, 2));

process.exit(findings.length === 0 ? 0 : 2);
