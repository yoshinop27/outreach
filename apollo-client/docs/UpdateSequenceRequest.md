
# UpdateSequenceRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`active` | boolean
`creationType` | string
`permissions` | string
`emailerScheduleId` | string
`labelNames` | Array&lt;string&gt;
`maxEmailsPerDay` | number
`sameAccountReplyDelayDays` | number
`ccEmails` | string
`bccEmails` | string
`emailerSteps` | [Array&lt;UpdateSequenceRequestEmailerStepsInner&gt;](UpdateSequenceRequestEmailerStepsInner.md)

## Example

```typescript
import type { UpdateSequenceRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "active": null,
  "creationType": null,
  "permissions": null,
  "emailerScheduleId": null,
  "labelNames": null,
  "maxEmailsPerDay": null,
  "sameAccountReplyDelayDays": null,
  "ccEmails": null,
  "bccEmails": null,
  "emailerSteps": null,
} satisfies UpdateSequenceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSequenceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


