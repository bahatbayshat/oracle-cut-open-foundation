import assert from 'node:assert/strict';
import test from 'node:test';

test('governance gate blocks unsafe prompt plans', async () => {
  const { evaluatePromptGate } = await import('../dist/index.js');
  const result = evaluatePromptGate({
    title: 'unsafe demo',
    requiresHumanApproval: false,
    includesProviderCall: true,
    includesMediaMutation: true
  });
  assert.equal(result.allowed, false);
  assert.ok(result.reasons.length >= 3);
});
