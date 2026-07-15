
# GetAListOfUsers200ResponseUsersInnerAssistantSetting


## Properties

Name | Type
------------ | -------------
`id` | string
`dealSizeMetric` | string
`inactiveAccountStageIds` | Array&lt;any&gt;
`inactiveContactStageIds` | Array&lt;any&gt;
`insightDealSizeSignals` | object
`insightSaleCycleSignals` | object
`insightWinRateSignals` | object
`isPersonaRecommendationRequested` | boolean
`jobPostingLocations` | Array&lt;any&gt;
`jobPostingTitles` | Array&lt;any&gt;
`latestFundingDays` | number
`maxNumActiveAccounts` | number
`maxPeopleInSequencePerAccount` | number
`numInactiveDaysToReEngage` | number
`personaIds` | Array&lt;string&gt;
`shouldShowPersonaBanner` | boolean
`successCaseAccountStageIds` | Array&lt;any&gt;
`teamId` | string
`technologyUids` | Array&lt;any&gt;
`territoryCompanySizeRanges` | Array&lt;any&gt;
`territoryLocationOverride` | boolean
`territoryLocations` | Array&lt;string&gt;
`territoryPersonLocations` | Array&lt;string&gt;
`userId` | string
`id` | string
`key` | string

## Example

```typescript
import type { GetAListOfUsers200ResponseUsersInnerAssistantSetting } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66c8db587ed7f201b25c0ef0,
  "dealSizeMetric": amount,
  "inactiveAccountStageIds": null,
  "inactiveContactStageIds": null,
  "insightDealSizeSignals": null,
  "insightSaleCycleSignals": null,
  "insightWinRateSignals": null,
  "isPersonaRecommendationRequested": false,
  "jobPostingLocations": null,
  "jobPostingTitles": null,
  "latestFundingDays": 90,
  "maxNumActiveAccounts": 100,
  "maxPeopleInSequencePerAccount": 5,
  "numInactiveDaysToReEngage": 180,
  "personaIds": null,
  "shouldShowPersonaBanner": true,
  "successCaseAccountStageIds": null,
  "teamId": 6095a710bd01d100a506d4ac,
  "technologyUids": null,
  "territoryCompanySizeRanges": null,
  "territoryLocationOverride": false,
  "territoryLocations": null,
  "territoryPersonLocations": null,
  "userId": 66c8db577ed7f201b25c0eef,
  "id": 66c8db587ed7f201b25c0ef0,
  "key": 66c8db587ed7f201b25c0ef0,
} satisfies GetAListOfUsers200ResponseUsersInnerAssistantSetting

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAListOfUsers200ResponseUsersInnerAssistantSetting
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


