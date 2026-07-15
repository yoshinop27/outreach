
# CreateSequenceRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`permissions` | string
`active` | boolean
`emailerScheduleId` | string
`userId` | string
`labelNames` | Array&lt;string&gt;
`folderId` | string
`sequenceByExactDaytime` | boolean
`maxEmailsPerDay` | number
`markFinishedIfReply` | boolean
`markFinishedIfClick` | boolean
`markFinishedIfInterested` | boolean
`markPausedIfOoo` | boolean
`daysToWaitBeforeMarkAsResponse` | number
`createTaskIfEmailOpen` | boolean
`emailOpenTriggerTaskThreshold` | number
`sameAccountReplyDelayDays` | number
`excludedAccountStageIds` | Array&lt;string&gt;
`excludedContactStageIds` | Array&lt;string&gt;
`ignoreApolloGlobalEmailBounceList` | boolean
`sequenceRulesetId` | string
`emailerSteps` | [Array&lt;CreateSequenceRequestEmailerStepsInner&gt;](CreateSequenceRequestEmailerStepsInner.md)

## Example

```typescript
import type { CreateSequenceRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "permissions": null,
  "active": null,
  "emailerScheduleId": null,
  "userId": null,
  "labelNames": null,
  "folderId": null,
  "sequenceByExactDaytime": null,
  "maxEmailsPerDay": null,
  "markFinishedIfReply": null,
  "markFinishedIfClick": null,
  "markFinishedIfInterested": null,
  "markPausedIfOoo": null,
  "daysToWaitBeforeMarkAsResponse": null,
  "createTaskIfEmailOpen": null,
  "emailOpenTriggerTaskThreshold": null,
  "sameAccountReplyDelayDays": null,
  "excludedAccountStageIds": null,
  "excludedContactStageIds": null,
  "ignoreApolloGlobalEmailBounceList": null,
  "sequenceRulesetId": null,
  "emailerSteps": null,
} satisfies CreateSequenceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSequenceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


