
# CheckEmailSendStatus200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`message` | string
`completedAt` | Date
`notSentReason` | string
`failureReason` | string
`failedAt` | Date
`retryAfterSeconds` | number

## Example

```typescript
import type { CheckEmailSendStatus200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e8cc45028aed019c25d724,
  "status": completed,
  "message": Email delivered successfully.,
  "completedAt": 2025-02-03T15:30:00Z,
  "notSentReason": no_active_email_account,
  "failureReason": Mailbox disconnected,
  "failedAt": 2025-02-03T15:30:00Z,
  "retryAfterSeconds": 10,
} satisfies CheckEmailSendStatus200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckEmailSendStatus200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


