
# BulkPeopleEnrichment200Response


## Properties

Name | Type
------------ | -------------
`requestId` | number
`status` | string
`errorCode` | any
`errorMessage` | any
`totalRequestedEnrichments` | number
`uniqueEnrichedRecords` | number
`missingRecords` | number
`creditsConsumed` | number
`matches` | [Array&lt;BulkPeopleEnrichment200ResponseMatchesInner&gt;](BulkPeopleEnrichment200ResponseMatchesInner.md)

## Example

```typescript
import type { BulkPeopleEnrichment200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "requestId": 1039995589705121900,
  "status": success,
  "errorCode": null,
  "errorMessage": null,
  "totalRequestedEnrichments": 3,
  "uniqueEnrichedRecords": 3,
  "missingRecords": 0,
  "creditsConsumed": 3,
  "matches": null,
} satisfies BulkPeopleEnrichment200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkPeopleEnrichment200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


