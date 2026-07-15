
# GetAListOfEmailAccounts200ResponseEmailAccountsInner


## Properties

Name | Type
------------ | -------------
`aliases` | Array&lt;string&gt;
`id` | string
`userId` | string
`email` | string
`type` | string
`active` | boolean
`_default` | boolean
`secondsDelayBetweenEmails` | number
`providerDisplayName` | string
`nylasProvider` | any
`lastSyncedAt` | string
`emailSendingPolicyCd` | string
`sendgridApiUser` | any
`mailgunDomains` | any
`nylasApiVersion` | any
`signatureEditDisabled` | boolean
`revokedAt` | any
`inactiveReason` | any
`createdAt` | string
`sendgridApiKeyV3` | any
`emailDailyThreshold` | number
`deliverabilityScore` | [GetAListOfEmailAccounts200ResponseEmailAccountsInnerDeliverabilityScore](GetAListOfEmailAccounts200ResponseEmailAccountsInnerDeliverabilityScore.md)
`maxOutboundEmailsPerHour` | number
`limitsEditable` | boolean
`isOptedInMailwarming` | any
`mailwarmingMax` | number
`mailwarmingToSendDaily` | number
`mailwarmingToSendIncrementor` | number
`mailwarmingStatus` | string
`mailwarmingEta` | any
`mailwarmingSubjectToken` | any
`mailwarmingScore` | number
`mailwarmingScoreBanner` | string
`mailwarmingOnWeekdaysOnly` | boolean
`trueWarmupEnabled` | boolean
`trueWarmupDailyLimit` | number
`trueWarmupProgress` | number
`trueWarmupStatus` | any
`trueWarmupApproximateEndDate` | any
`trueWarmupLastThrottledAt` | any
`trueWarmupEnableThresholds` | boolean
`trueWarmupThresholds` | [GetAListOfEmailAccounts200ResponseEmailAccountsInnerTrueWarmupThresholds](GetAListOfEmailAccounts200ResponseEmailAccountsInnerTrueWarmupThresholds.md)
`activeCampaignsCount` | number
`nudgeUserToSendMails` | boolean
`signatureHtml` | string
`fieldsFullyLoaded` | boolean

## Example

```typescript
import type { GetAListOfEmailAccounts200ResponseEmailAccountsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "aliases": null,
  "id": 6630ffa2a7f52601c7578345,
  "userId": 66302798d03b9601c7934ebc,
  "email": test.liam@apollomail.io,
  "type": gmail,
  "active": true,
  "_default": true,
  "secondsDelayBetweenEmails": 600,
  "providerDisplayName": Gmail,
  "nylasProvider": null,
  "lastSyncedAt": 2024-09-19T18:50:45.088+00:00,
  "emailSendingPolicyCd": default,
  "sendgridApiUser": null,
  "mailgunDomains": null,
  "nylasApiVersion": null,
  "signatureEditDisabled": false,
  "revokedAt": null,
  "inactiveReason": null,
  "createdAt": 2024-04-30T14:26:42.061Z,
  "sendgridApiKeyV3": null,
  "emailDailyThreshold": 50,
  "deliverabilityScore": null,
  "maxOutboundEmailsPerHour": 6,
  "limitsEditable": true,
  "isOptedInMailwarming": null,
  "mailwarmingMax": 0,
  "mailwarmingToSendDaily": 0,
  "mailwarmingToSendIncrementor": 0,
  "mailwarmingStatus": never_started,
  "mailwarmingEta": null,
  "mailwarmingSubjectToken": null,
  "mailwarmingScore": 0,
  "mailwarmingScoreBanner": start_warm_up_for_score,
  "mailwarmingOnWeekdaysOnly": true,
  "trueWarmupEnabled": false,
  "trueWarmupDailyLimit": 0,
  "trueWarmupProgress": 0,
  "trueWarmupStatus": null,
  "trueWarmupApproximateEndDate": null,
  "trueWarmupLastThrottledAt": null,
  "trueWarmupEnableThresholds": false,
  "trueWarmupThresholds": null,
  "activeCampaignsCount": 2,
  "nudgeUserToSendMails": true,
  "signatureHtml": <div>Liam Donovan</div><div>Apollo Academy Sales Instructor</div><div>liam.donovan@apollo.io</div><div><br></div><div><a href="http://www.berkley.edu" rel="noopener noreferrer" target="_blank">Apollo Knowledge Base</a></div><div><br></div><div>Book time to meet with me <a href="https://app.apollo.io/#/meet/liam_donovan_a1b2/30-min" rel="noopener noreferrer" target="_blank">here</a>.</div>,
  "fieldsFullyLoaded": true,
} satisfies GetAListOfEmailAccounts200ResponseEmailAccountsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAListOfEmailAccounts200ResponseEmailAccountsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


