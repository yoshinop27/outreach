
# PollWebhookResult200Response


## Properties

Name | Type
------------ | -------------
`requestId` | string
`webhookStatus` | string
`requestType` | string
`lastDispatchedAt` | string
`failureReason` | string
`webhookResult` | { [key: string]: any; }

## Example

```typescript
import type { PollWebhookResult200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "requestId": 1039995589705121900,
  "webhookStatus": success,
  "requestType": phone,
  "lastDispatchedAt": 2026-05-26T10:42:11Z,
  "failureReason": null,
  "webhookResult": null,
} satisfies PollWebhookResult200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PollWebhookResult200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


