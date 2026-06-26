import type { VerificationResult } from "../verifier/index.js";

export type PhaseReport = {
  project: string;
  phase: string;
  createdAt: string;
  verification: VerificationResult;
  summary: string;
};

export function createPhaseReport(args: {
  project: string;
  phase: string;
  verification: VerificationResult;
  summary: string;
  createdAt?: string;
}): PhaseReport {
  return {
    project: args.project,
    phase: args.phase,
    createdAt: args.createdAt ?? new Date().toISOString(),
    verification: args.verification,
    summary: args.summary
  };
}

export function serializeReport(report: PhaseReport): string {
  return JSON.stringify(report, null, 2);
}
