# ORACLE CUT Open Foundation

Open-source safety, verification, and prompt governance toolkit for AI-assisted creative and cinematic workflows.

> This repository is an open foundation extracted from the broader ORACLE CUT vision. It does not include private production systems, credentials, provider integrations, media-generation code, or commercial workflow internals.

## Purpose

ORACLE CUT Open Foundation helps developers build safer AI-assisted creative tools by providing reusable patterns for:

- Human-approved execution boundaries
- Prompt governance and review gates
- Verification-first workflow design
- Structured phase reports
- Metadata and provenance discipline
- Non-destructive creative automation planning

## What this project is

This is a public, reusable foundation for safe AI creative-tooling workflows. It is designed for developers experimenting with AI-assisted editing, cinematic planning, creative automation, and agentic development systems.

## What this project is not

This repository is not a video generator, not a provider wrapper, not an auto-editing engine, and not a replacement for professional review. It intentionally avoids automatic media mutation or provider execution.

## Quick start

```bash
npm install
npm run verify
npm run build
```

## Example

```ts
import { createVerificationReport, evaluatePromptGate } from './src/index.js';

const gate = evaluatePromptGate({
  title: 'Creative edit planning prompt',
  requiresHumanApproval: true,
  includesProviderCall: false,
  includesMediaMutation: false
});

const report = createVerificationReport({
  phase: 'demo',
  status: gate.allowed ? 'pass' : 'blocked',
  notes: gate.reasons
});
```

## Repository structure

```text
src/verifier      Verification helpers and report status primitives
src/governance    Prompt and execution-boundary governance helpers
src/reports       Phase-report utilities
src/metadata      Provenance and metadata helpers
docs              Design documentation
examples          Example usage
.github           Issue templates and CI
```

## Safety principles

1. No automatic execution without a clear human approval boundary.
2. No hidden provider calls.
3. No destructive media mutations by default.
4. Every phase should produce auditable evidence.
5. Public examples must avoid secrets, credentials, and private project data.

## License

MIT License. See [LICENSE](LICENSE).
