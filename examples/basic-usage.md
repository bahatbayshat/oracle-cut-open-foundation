# Basic Usage

```ts
import { evaluatePromptGate } from 'oracle-cut-open-foundation';

const result = evaluatePromptGate({
  title: 'Planning prompt',
  requiresHumanApproval: true,
  includesProviderCall: false,
  includesMediaMutation: false
});

console.log(result);
```
