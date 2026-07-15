
# CreateATask200ResponseTaskOpportunity


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
`isWon` | any
`name` | string
`stageName` | any
`opportunityStageId` | string
`source` | string
`salesforceId` | any
`createdAt` | string
`actualCloseDate` | any
`nextStep` | string
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
`nextStepLastUpdatedAt` | string
`exchangeRateCode` | string
`exchangeRateValue` | number
`amountInTeamCurrency` | number
`forecastedRevenue` | number
`lastActivityDate` | string
`existenceLevel` | string
`typedCustomFields` | [CreateATask200ResponseTaskOpportunityTypedCustomFields](CreateATask200ResponseTaskOpportunityTypedCustomFields.md)
`opportunityRuleConfigStatuses` | Array&lt;any&gt;
`opportunityContactRoles` | [Array&lt;CreateATask200ResponseTaskOpportunityOpportunityContactRolesInner&gt;](CreateATask200ResponseTaskOpportunityOpportunityContactRolesInner.md)
`currency` | [ViewAssociatedDeals200ResponseOpportunitiesInnerCurrency](ViewAssociatedDeals200ResponseOpportunitiesInnerCurrency.md)
`account` | [CreateATask200ResponseTaskOpportunityAccount](CreateATask200ResponseTaskOpportunityAccount.md)

## Example

```typescript
import type { CreateATask200ResponseTaskOpportunity } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e8c4567f32a501b2605004,
  "teamId": 6095a710bd01d100a506d4ac,
  "ownerId": 66a3d80d4238fe02d2baaaaf,
  "salesforceOwnerId": null,
  "amount": 3000,
  "closedDate": 2024-11-03T00:00:00.000+00:00,
  "accountId": 612f9d6cd26c290001d9bda0,
  "description": null,
  "isClosed": false,
  "isWon": null,
  "name": 5 Seats of Acme | $2K | Google,
  "stageName": null,
  "opportunityStageId": 66e4b9b5e5aa6b0e57f078a1,
  "source": ui_form,
  "salesforceId": null,
  "createdAt": 2024-09-16T23:50:46.311Z,
  "actualCloseDate": null,
  "nextStep": Schedule Demo,
  "nextStepDate": null,
  "closedLostReason": null,
  "closedWonReason": null,
  "forecastCategory": omitted,
  "dealProbability": 50,
  "createdById": 60affe7d6e270a00f5db6fe4,
  "currentSolutions": null,
  "dealSource": null,
  "manuallyUpdatedProbability": null,
  "manuallyUpdatedForecast": null,
  "crmId": null,
  "crmRecordUrl": null,
  "crmOwnerId": null,
  "probability": null,
  "opportunityPipelineId": 66e4b85ce5aa6b03f3f08b6e,
  "stageUpdatedAt": 2024-09-17T16:44:07.133+00:00,
  "nextStepLastUpdatedAt": 2024-09-17T00:03:13.420+00:00,
  "exchangeRateCode": USD,
  "exchangeRateValue": 1,
  "amountInTeamCurrency": 3000,
  "forecastedRevenue": 1500,
  "lastActivityDate": 2024-09-17T16:44:07.134Z,
  "existenceLevel": full,
  "typedCustomFields": null,
  "opportunityRuleConfigStatuses": null,
  "opportunityContactRoles": null,
  "currency": null,
  "account": null,
} satisfies CreateATask200ResponseTaskOpportunity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateATask200ResponseTaskOpportunity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


