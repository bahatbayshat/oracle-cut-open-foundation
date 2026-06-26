export interface PhaseReport {
  phase: string;
  summary: string;
  evidence: string[];
  nextGate: string;
}

export function renderPhaseReport(report: PhaseReport): string {
  return [
    `# ${report.phase}`,
    '',
    `## Summary`,
    report.summary,
    '',
    `## Evidence`,
    ...report.evidence.map((item) => `- ${item}`),
    '',
    `## Next Gate`,
    report.nextGate,
    ''
  ].join('\n');
}
