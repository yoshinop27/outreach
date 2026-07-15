
# ListAllDeals200ResponseOpportunitiesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`teamId` | string
`ownerId` | string
`salesforceOwnerId` | any
`amount` | number
`closedDate` | string
`accountId` | string
`description` | any
`isClosed` | boolean
`isWon` | boolean
`name` | string
`stageName` | any
`opportunityStageId` | string
`source` | string
`salesforceId` | any
`createdAt` | string
`actualCloseDate` | any
`nextStep` | any
`nextStepDate` | any
`closedLostReason` | any
`closedWonReason` | any
`forecastCategory` | string
`dealProbability` | number
`createdById` | string
`currentSolutions` | any
`dealSource` | any
`manuallyUpdatedProbability` | any
`manuallyUpdatedForecast` | any
`crmId` | any
`crmRecordUrl` | any
`crmOwnerId` | any
`probability` | any
`opportunityPipelineId` | any
`stageUpdatedAt` | string
`nextStepLastUpdatedAt` | any
`exchangeRateCode` | string
`exchangeRateValue` | number
`amountInTeamCurrency` | number
`forecastedRevenue` | number
`lastActivityDate` | string
`existenceLevel` | string
`typedCustomFields` | object
`opportunityRuleConfigStatuses` | Array&lt;any&gt;
`opportunityContactRoles` | Array&lt;any&gt;
`currency` | [ViewAssociatedDeals200ResponseOpportunitiesInnerCurrency](ViewAssociatedDeals200ResponseOpportunitiesInnerCurrency.md)
`account` | [ListAllDeals200ResponseOpportunitiesInnerAccount](ListAllDeals200ResponseOpportunitiesInnerAccount.md)

## Example

```typescript
import type { ListAllDeals200ResponseOpportunitiesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e09ea8e3cfcf01b2208ec7,
  "teamId": 6095a710bd01d100a506d4ac,
  "ownerId": 66302798d03b9601c7934ebf,
  "salesforceOwnerId": null,
  "amount": 9999999999,
  "closedDate": 2026-10-15T00:00:00.000+00:00,
  "accountId": 60afffecbff6de00a4b82be7,
  "description": null,
  "isClosed": false,
  "isWon": false,
  "name": Ridiculously Massive Space Deal,
  "stageName": null,
  "opportunityStageId": 66bb94fbc1695c00017fba5f,
  "source": api,
  "salesforceId": null,
  "createdAt": 2024-09-10T19:31:52.436Z,
  "actualCloseDate": null,
  "nextStep": null,
  "nextStepDate": null,
  "closedLostReason": null,
  "closedWonReason": null,
  "forecastCategory": pipeline,
  "dealProbability": 25,
  "createdById": 60affe7d6e270a00f5db6fe4,
  "currentSolutions": null,
  "dealSource": null,
  "manuallyUpdatedProbability": null,
  "manuallyUpdatedForecast": null,
  "crmId": null,
  "crmRecordUrl": null,
  "crmOwnerId": null,
  "probability": null,
  "opportunityPipelineId": null,
  "stageUpdatedAt": 2024-09-10T21:50:18.113+00:00,
  "nextStepLastUpdatedAt": null,
  "exchangeRateCode": USD,
  "exchangeRateValue": 1,
  "amountInTeamCurrency": 9999999999,
  "forecastedRevenue": 2499999999.75,
  "lastActivityDate": 2024-09-10T21:50:18.113Z,
  "existenceLevel": full,
  "typedCustomFields": null,
  "opportunityRuleConfigStatuses": null,
  "opportunityContactRoles": null,
  "currency": null,
  "account": null,
} satisfies ListAllDeals200ResponseOpportunitiesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListAllDeals200ResponseOpportunitiesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


