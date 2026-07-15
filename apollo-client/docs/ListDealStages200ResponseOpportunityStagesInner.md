
# ListDealStages200ResponseOpportunityStagesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`teamId` | string
`name` | string
`displayOrder` | number
`forecastCategoryCd` | string
`isWon` | boolean
`isClosed` | boolean
`probability` | number
`description` | string
`salesforceId` | string
`isMeetingSet` | any
`opportunityPipelineId` | string
`isEditable` | any
`type` | string

## Example

```typescript
import type { ListDealStages200ResponseOpportunityStagesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 6095a710bd01d100a506d4bd,
  "teamId": 6095a710bd01d100a506d4ac,
  "name": Qualify,
  "displayOrder": 0,
  "forecastCategoryCd": Pipeline,
  "isWon": false,
  "isClosed": false,
  "probability": 10,
  "description": Very first interaction with the AE on the account to determine their pain and fit for sales enablement in their business. This is the discovery phase where we ask questions to uncover need. This is more focused on their bsuiness and their workflow than our solution.,
  "salesforceId": 01J8jXTZaxnljrDxwv,
  "isMeetingSet": null,
  "opportunityPipelineId": 654b989fcb2a5200010a90db,
  "isEditable": null,
  "type": Open,
} satisfies ListDealStages200ResponseOpportunityStagesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListDealStages200ResponseOpportunityStagesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


