
# BulkOrganizationEnrichment200Response


## Properties

Name | Type
------------ | -------------
`status` | string
`errorCode` | any
`errorMessage` | any
`totalRequestedRecords` | number
`totalRequestedDomains` | number
`uniqueDomains` | number
`uniqueRecords` | number
`uniqueEnrichedRecords` | number
`missingRecords` | number
`organizations` | [Array&lt;BulkOrganizationEnrichment200ResponseOrganizationsInner&gt;](BulkOrganizationEnrichment200ResponseOrganizationsInner.md)

## Example

```typescript
import type { BulkOrganizationEnrichment200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "status": success,
  "errorCode": null,
  "errorMessage": null,
  "totalRequestedRecords": 4,
  "totalRequestedDomains": 4,
  "uniqueDomains": 4,
  "uniqueRecords": 4,
  "uniqueEnrichedRecords": 4,
  "missingRecords": 0,
  "organizations": null,
} satisfies BulkOrganizationEnrichment200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkOrganizationEnrichment200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


