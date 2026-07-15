
# UpdateDealRequest


## Properties

Name | Type
------------ | -------------
`ownerId` | string
`name` | string
`amount` | string
`opportunityStageId` | string
`closedDate` | Date
`typedCustomFields` | { [key: string]: string; }

## Example

```typescript
import type { UpdateDealRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "ownerId": null,
  "name": null,
  "amount": null,
  "opportunityStageId": null,
  "closedDate": null,
  "typedCustomFields": {60c39ed82bd02f01154c470a=2025-08-07},
} satisfies UpdateDealRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateDealRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


