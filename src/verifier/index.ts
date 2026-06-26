export type SafetyGateInput = {
  phaseName: string;
  providerCallsAllowed: boolean;
  mediaGenerationAllowed: boolean;
  autoApprovalAllowed: boolean;
  humanApprovalRequired: boolean;
  evidenceProvided: boolean;
};

export type VerificationStatus = "pass" | "fail";

export type VerificationResult = {
  phaseName: string;
  status: VerificationStatus;
  findings: string[];
};

export function verifySafetyGate(input: SafetyGateInput): VerificationResult {
  const findings: string[] = [];

  if (input.providerCallsAllowed) {
    findings.push("Provider calls are enabled. This must be explicitly justified.");
  }

  if (input.mediaGenerationAllowed) {
    findings.push("Media generation is enabled. This must be explicitly approved.");
  }

  if (input.autoApprovalAllowed) {
    findings.push("Auto-approval is enabled. Human review boundary is violated.");
  }

  if (input.humanApprovalRequired && !input.evidenceProvided) {
    findings.push("Human approval is required, but no evidence was provided.");
  }

  return {
    phaseName: input.phaseName,
    status: findings.length === 0 ? "pass" : "fail",
    findings
  };
}
