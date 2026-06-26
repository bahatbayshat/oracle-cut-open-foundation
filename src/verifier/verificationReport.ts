export type VerificationStatus = 'pass' | 'blocked' | 'warning' | 'fail';

export interface VerificationReportInput {
  phase: string;
  status: VerificationStatus;
  notes: string[];
}

export interface VerificationReport extends VerificationReportInput {
  createdAt: string;
}

export function createVerificationReport(input: VerificationReportInput): VerificationReport {
  return {
    ...input,
    createdAt: new Date().toISOString()
  };
}
