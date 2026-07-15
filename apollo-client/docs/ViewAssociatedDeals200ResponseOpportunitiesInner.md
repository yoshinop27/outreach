
# ViewAssociatedDeals200ResponseOpportunitiesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`teamId` | string
`ownerId` | string
`salesforceOwnerId` | any
`amount` | number
`closedDate` | any
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
`opportunityPipelineId` | string
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
`opportunityContactRoles` | [Array&lt;ViewAssociatedDeals200ResponseOpportunitiesInnerOpportunityContactRolesInner&gt;](ViewAssociatedDeals200ResponseOpportunitiesInnerOpportunityContactRolesInner.md)
`currency` | [ViewAssociatedDeals200ResponseOpportunitiesInnerCurrency](ViewAssociatedDeals200ResponseOpportunitiesInnerCurrency.md)
`numContacts` | number
`account` | [ViewAssociatedDeals200ResponseOpportunitiesInnerAccount](ViewAssociatedDeals200ResponseOpportunitiesInnerAccount.md)

## Example

```typescript
import type { ViewAssociatedDeals200ResponseOpportunitiesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e09ea8e3cfcf01b2208ec7,
  "teamId": 6095a710bd01d100a506d4ac,
  "ownerId": 66302798d03b9601c7934ebf,
  "salesforceOwnerId": null,
  "amount": 99999999,
  "closedDate": null,
  "accountId": 60afffecbff6de00a4b82be7,
  "description": null,
  "isClosed": false,
  "isWon": false,
  "name": Massive Space Deal,
  "stageName": null,
  "opportunityStageId": 6095a710bd01d100a506d4bd,
  "source": api,
  "salesforceId": null,
  "createdAt": 2024-09-10T19:31:52.436Z,
  "actualCloseDate": null,
  "nextStep": null,
  "nextStepDate": null,
  "closedLostReason": null,
  "closedWonReason": null,
  "forecastCategory": pipeline,
  "dealProbability": 10,
  "createdById": 60affe7d6e270a00f5db6fe4,
  "currentSolutions": null,
  "dealSource": null,
  "manuallyUpdatedProbability": null,
  "manuallyUpdatedForecast": null,
  "crmId": null,
  "crmRecordUrl": null,
  "crmOwnerId": null,
  "probability": null,
  "opportunityPipelineId": 654b989fcb2a5200010a90db,
  "stageUpdatedAt": 2024-09-10T19:33:40.529+00:00,
  "nextStepLastUpdatedAt": null,
  "exchangeRateCode": USD,
  "exchangeRateValue": 1,
  "amountInTeamCurrency": 99999999,
  "forecastedRevenue": 9999999.9,
  "lastActivityDate": 2024-09-10T19:33:40.529Z,
  "existenceLevel": full,
  "typedCustomFields": null,
  "opportunityRuleConfigStatuses": null,
  "opportunityContactRoles": null,
  "currency": null,
  "numContacts": 1,
  "account": null,
} satisfies ViewAssociatedDeals200ResponseOpportunitiesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewAssociatedDeals200ResponseOpportunitiesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


