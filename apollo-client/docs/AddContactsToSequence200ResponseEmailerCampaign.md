
# AddContactsToSequence200ResponseEmailerCampaign

Complete emailer campaign object with statistics

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`archived` | boolean
`active` | boolean
`createdAt` | Date
`userId` | string
`emailerScheduleId` | string
`maxEmailsPerDay` | number
`sameAccountReplyPolicyCd` | string
`excludedAccountStageIds` | Array&lt;string&gt;
`excludedContactStageIds` | Array&lt;string&gt;
`labelIds` | Array&lt;string&gt;
`permissions` | string
`loadedStats` | boolean
`uniqueScheduled` | [AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled](AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled.md)
`uniqueDelivered` | number
`uniqueBounced` | number
`uniqueOpened` | number
`uniqueReplied` | number
`bounceRate` | number
`openRate` | number
`replyRate` | number
`contactStatuses` | [AddContactsToSequence200ResponseEmailerCampaignContactStatuses](AddContactsToSequence200ResponseEmailerCampaignContactStatuses.md)
`sharingPermission` | [AddContactsToSequence200ResponseEmailerCampaignSharingPermission](AddContactsToSequence200ResponseEmailerCampaignSharingPermission.md)

## Example

```typescript
import type { AddContactsToSequence200ResponseEmailerCampaign } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "archived": null,
  "active": null,
  "createdAt": null,
  "userId": null,
  "emailerScheduleId": null,
  "maxEmailsPerDay": null,
  "sameAccountReplyPolicyCd": null,
  "excludedAccountStageIds": null,
  "excludedContactStageIds": null,
  "labelIds": null,
  "permissions": null,
  "loadedStats": null,
  "uniqueScheduled": null,
  "uniqueDelivered": null,
  "uniqueBounced": null,
  "uniqueOpened": null,
  "uniqueReplied": null,
  "bounceRate": null,
  "openRate": null,
  "replyRate": null,
  "contactStatuses": null,
  "sharingPermission": null,
} satisfies AddContactsToSequence200ResponseEmailerCampaign

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddContactsToSequence200ResponseEmailerCampaign
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


