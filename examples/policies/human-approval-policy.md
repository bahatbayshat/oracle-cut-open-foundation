# Human Approval Policy Example

This example policy describes a conservative approval model for AI-assisted creative workflows.

## Rules

1. AI may propose plans.
2. AI may generate draft reports.
3. AI may validate structured data.
4. AI must not execute irreversible creative or production actions without explicit human approval.
5. Every approval-sensitive action should produce an auditable record.

## Recommended gate states

- blocked
- draft
- review_required
- approved
- rejected
