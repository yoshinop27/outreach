
# GetAListOfEmailAccounts200ResponseEmailAccountsInnerDeliverabilityScore


## Properties

Name | Type
------------ | -------------
`id` | string
`avgClickRate` | number
`avgDailySent` | number
`avgDeliveredRate` | number
`avgHardBounceRate` | number
`avgOpenRate` | number
`avgReplyRate` | number
`avgSpamBlockRate` | number
`avgUnsubscribeRate` | number
`clickRateScore` | number
`concurrencyLocks` | any
`createdAt` | string
`dailyEmailSentScore` | number
`dateFrom` | string
`dateTo` | string
`deliverabilityScore` | number
`domainHealthScore` | number
`emailAccountDomainAgeScore` | number
`emailAccountId` | string
`hardBounceScore` | number
`openRateScore` | number
`random` | number
`replyRateScore` | number
`spamBlockScore` | number
`sumClickedCount` | number
`sumDeliveredCount` | number
`sumHardBouncedCount` | number
`sumOpenedCount` | number
`sumRepliedCount` | number
`sumSentCount` | number
`sumSpamBlockedCount` | number
`sumUnsubscribedCount` | number
`teamId` | string
`unsubscribeRateScore` | number
`updatedAt` | string
`userId` | string
`id` | string
`key` | string

## Example

```typescript
import type { GetAListOfEmailAccounts200ResponseEmailAccountsInnerDeliverabilityScore } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66de4138d8a8a300016b404e,
  "avgClickRate": 0,
  "avgDailySent": 0,
  "avgDeliveredRate": 0,
  "avgHardBounceRate": 0,
  "avgOpenRate": 0,
  "avgReplyRate": 0,
  "avgSpamBlockRate": 0,
  "avgUnsubscribeRate": 0,
  "clickRateScore": 0,
  "concurrencyLocks": null,
  "createdAt": 2024-09-09T00:28:41.695Z,
  "dailyEmailSentScore": 0,
  "dateFrom": 2024-09-09,
  "dateTo": 2024-09-15,
  "deliverabilityScore": 0,
  "domainHealthScore": 5,
  "emailAccountDomainAgeScore": 5,
  "emailAccountId": 6630ffa2a7f52601c7578345,
  "hardBounceScore": 0,
  "openRateScore": 0,
  "random": 0.6074748,
  "replyRateScore": 0,
  "spamBlockScore": 0,
  "sumClickedCount": 0,
  "sumDeliveredCount": 0,
  "sumHardBouncedCount": 0,
  "sumOpenedCount": 0,
  "sumRepliedCount": 0,
  "sumSentCount": 0,
  "sumSpamBlockedCount": 0,
  "sumUnsubscribedCount": 0,
  "teamId": 6095a710bd01d100a506d4ac,
  "unsubscribeRateScore": 0,
  "updatedAt": 2024-09-09T00:28:41.695Z,
  "userId": 66302798d03b9601c7934ebc,
  "id": 66de4138d8a8a300016b404e,
  "key": 66de4138d8a8a300016b404e,
} satisfies GetAListOfEmailAccounts200ResponseEmailAccountsInnerDeliverabilityScore

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAListOfEmailAccounts200ResponseEmailAccountsInnerDeliverabilityScore
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


