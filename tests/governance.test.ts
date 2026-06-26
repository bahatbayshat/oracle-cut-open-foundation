import test from "node:test";
import assert from "node:assert/strict";
import { canExecutePrompt, requireReview } from "../src/governance/index.js";

test("only approved prompts are executable", () => {
  assert.equal(canExecutePrompt({ id: "p1", title: "Draft", state: "draft" }), false);
  assert.equal(canExecutePrompt({ id: "p2", title: "Approved", state: "approved" }), true);
});

test("draft prompt can be moved to review", () => {
  const record = requireReview({ id: "p3", title: "Prompt", state: "draft" });
  assert.equal(record.state, "needs_review");
});
