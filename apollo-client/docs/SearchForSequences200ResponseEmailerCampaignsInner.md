
# SearchForSequences200ResponseEmailerCampaignsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`archived` | boolean
`createdAt` | string
`emailerScheduleId` | string
`maxEmailsPerDay` | any
`userId` | string
`sameAccountReplyPolicyCd` | any
`excludedAccountStageIds` | Array&lt;string&gt;
`excludedContactStageIds` | Array&lt;string&gt;
`contactEmailEventToStageMapping` | object
`labelIds` | Array&lt;string&gt;
`createTaskIfEmailOpen` | boolean
`emailOpenTriggerTaskThreshold` | number
`markFinishedIfClick` | boolean
`active` | boolean
`daysToWaitBeforeMarkAsResponse` | number
`starredByUserIds` | Array&lt;string&gt;
`markFinishedIfReply` | boolean
`markFinishedIfInterested` | boolean
`markPausedIfOoo` | boolean
`sequenceByExactDaytime` | any
`permissions` | string
`lastUsedAt` | any
`sequenceRulesetId` | string
`folderId` | any
`sameAccountReplyDelayDays` | number
`isPerformingPoorly` | boolean
`numContactsEmailStatusExtrapolated` | number
`remindAbTestResults` | boolean
`abTestStepIds` | Array&lt;any&gt;
`prioritizedByUser` | any
`creationType` | string
`numSteps` | number
`uniqueScheduled` | number
`uniqueDelivered` | number
`uniqueBounced` | number
`uniqueOpened` | number
`uniqueHardBounced` | number
`uniqueSpamBlocked` | number
`uniqueReplied` | number
`uniqueDemoed` | number
`uniqueClicked` | number
`uniqueUnsubscribed` | number
`bounceRate` | number
`hardBounceRate` | number
`openRate` | number
`clickRate` | number
`replyRate` | number
`spamBlockRate` | number
`optOutRate` | number
`demoRate` | number
`loadedStats` | boolean
`ccEmails` | string
`bccEmails` | string
`underperformingTouchesCount` | number

## Example

```typescript
import type { SearchForSequences200ResponseEmailerCampaignsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e9e215ece19801b219997f,
  "name": Target Copywriting Clients in Dublin,
  "archived": false,
  "createdAt": 2024-09-17T20:09:57.837Z,
  "emailerScheduleId": 6095a711bd01d100a506d52a,
  "maxEmailsPerDay": null,
  "userId": 66302798d03b9601c7934ebf,
  "sameAccountReplyPolicyCd": null,
  "excludedAccountStageIds": null,
  "excludedContactStageIds": null,
  "contactEmailEventToStageMapping": null,
  "labelIds": null,
  "createTaskIfEmailOpen": false,
  "emailOpenTriggerTaskThreshold": 3,
  "markFinishedIfClick": false,
  "active": false,
  "daysToWaitBeforeMarkAsResponse": 5,
  "starredByUserIds": null,
  "markFinishedIfReply": true,
  "markFinishedIfInterested": true,
  "markPausedIfOoo": true,
  "sequenceByExactDaytime": null,
  "permissions": team_can_use,
  "lastUsedAt": null,
  "sequenceRulesetId": 6095a711bd01d100a506d4e0,
  "folderId": null,
  "sameAccountReplyDelayDays": 30,
  "isPerformingPoorly": false,
  "numContactsEmailStatusExtrapolated": 0,
  "remindAbTestResults": false,
  "abTestStepIds": null,
  "prioritizedByUser": null,
  "creationType": new,
  "numSteps": 3,
  "uniqueScheduled": 0,
  "uniqueDelivered": 0,
  "uniqueBounced": 0,
  "uniqueOpened": 0,
  "uniqueHardBounced": 0,
  "uniqueSpamBlocked": 0,
  "uniqueReplied": 0,
  "uniqueDemoed": 0,
  "uniqueClicked": 0,
  "uniqueUnsubscribed": 0,
  "bounceRate": 0,
  "hardBounceRate": 0,
  "openRate": 0,
  "clickRate": 0,
  "replyRate": 0,
  "spamBlockRate": 0,
  "optOutRate": 0,
  "demoRate": 0,
  "loadedStats": true,
  "ccEmails": ,
  "bccEmails": ,
  "underperformingTouchesCount": 0,
} satisfies SearchForSequences200ResponseEmailerCampaignsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchForSequences200ResponseEmailerCampaignsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


