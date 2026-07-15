
# PollWebhookResult404Response


## Properties

Name | Type
------------ | -------------
`retryAfterSeconds` | number
`message` | string

## Example

```typescript
import type { PollWebhookResult404Response } from ''

// TODO: Update the object below with actual values
const example = {
  "retryAfterSeconds": 10,
  "message": Webhook result older than 30 days is not available. Please ensure you are not requesting a result that is older than 30 days.,
} satisfies PollWebhookResult404Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PollWebhookResult404Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


