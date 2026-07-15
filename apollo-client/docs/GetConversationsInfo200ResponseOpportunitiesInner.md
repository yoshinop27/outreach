
# GetConversationsInfo200ResponseOpportunitiesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`amount` | number
`closedDate` | string
`createdAt` | string
`lastSync` | string
`account` | [GetConversationsInfo200ResponseOpportunitiesInnerAccount](GetConversationsInfo200ResponseOpportunitiesInnerAccount.md)
`crmRecordUrl` | string
`opportunityCrmId` | string
`opportunityStageId` | string
`stageName` | string
`ownerId` | string
`initialOpportunityStageId` | string

## Example

```typescript
import type { GetConversationsInfo200ResponseOpportunitiesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "amount": null,
  "closedDate": null,
  "createdAt": null,
  "lastSync": null,
  "account": null,
  "crmRecordUrl": null,
  "opportunityCrmId": null,
  "opportunityStageId": null,
  "stageName": null,
  "ownerId": null,
  "initialOpportunityStageId": null,
} satisfies GetConversationsInfo200ResponseOpportunitiesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetConversationsInfo200ResponseOpportunitiesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


