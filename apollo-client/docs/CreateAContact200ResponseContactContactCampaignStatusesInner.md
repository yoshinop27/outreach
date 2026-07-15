
# CreateAContact200ResponseContactContactCampaignStatusesInner

Contact campaign status object representing the contact\'s current state in a specific email sequence

## Properties

Name | Type
------------ | -------------
`id` | string
`emailerCampaignId` | string
`sendEmailFromUserId` | string
`inactiveReason` | string
`status` | string
`addedAt` | Date
`addedByUserId` | string
`finishedAt` | Date
`pausedAt` | Date
`autoUnpauseAt` | Date
`sendEmailFromEmailAddress` | string
`sendEmailFromEmailAccountId` | string
`manuallySetUnpause` | boolean
`failureReason` | string
`currentStepId` | string
`inResponseToEmailerMessageId` | string
`ccEmails` | Array&lt;string&gt;
`bccEmails` | Array&lt;string&gt;
`toEmails` | Array&lt;string&gt;
`currentStepPosition` | number

## Example

```typescript
import type { CreateAContact200ResponseContactContactCampaignStatusesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 68782af181c7f0002159df25,
  "emailerCampaignId": 66e9e215ece19801b219997f,
  "sendEmailFromUserId": 66302798d03b9601c7934ebf,
  "inactiveReason": Sequence inactive,
  "status": paused,
  "addedAt": 2025-07-16T22:42:57.372+00:00,
  "addedByUserId": 60affe7d6e270a00f5db6fe4,
  "finishedAt": null,
  "pausedAt": null,
  "autoUnpauseAt": null,
  "sendEmailFromEmailAddress": test.marcus.hale@apollomail.io,
  "sendEmailFromEmailAccountId": 6633baaece5fbd01c791d7ca,
  "manuallySetUnpause": null,
  "failureReason": null,
  "currentStepId": null,
  "inResponseToEmailerMessageId": null,
  "ccEmails": null,
  "bccEmails": null,
  "toEmails": null,
  "currentStepPosition": null,
} satisfies CreateAContact200ResponseContactContactCampaignStatusesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAContact200ResponseContactContactCampaignStatusesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


