export interface PromptGateInput {
  title: string;
  requiresHumanApproval: boolean;
  includesProviderCall: boolean;
  includesMediaMutation: boolean;
}

export interface PromptGateResult {
  allowed: boolean;
  reasons: string[];
}

export function evaluatePromptGate(input: PromptGateInput): PromptGateResult {
  const reasons: string[] = [];

  if (!input.requiresHumanApproval) {
    reasons.push('Human approval is required before execution.');
  }
  if (input.includesProviderCall) {
    reasons.push('Provider calls must be explicitly approved and documented.');
  }
  if (input.includesMediaMutation) {
    reasons.push('Media mutation is blocked unless a reviewed execution gate is present.');
  }

  return {
    allowed: reasons.length === 0,
    reasons: reasons.length === 0 ? ['Prompt passed governance checks.'] : reasons
  };
}
