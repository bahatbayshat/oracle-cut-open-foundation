export type PromptApprovalState =
  | "draft"
  | "needs_review"
  | "approved"
  | "rejected"
  | "executed";

export type PromptGovernanceRecord = {
  id: string;
  title: string;
  state: PromptApprovalState;
  reviewer?: string;
  notes?: string;
};

export function canExecutePrompt(record: PromptGovernanceRecord): boolean {
  return record.state === "approved";
}

export function requireReview(record: PromptGovernanceRecord): PromptGovernanceRecord {
  if (record.state === "draft") {
    return { ...record, state: "needs_review" };
  }

  return record;
}
