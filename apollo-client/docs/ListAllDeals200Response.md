
# ListAllDeals200Response


## Properties

Name | Type
------------ | -------------
`breadcrumbs` | Array&lt;any&gt;
`opportunities` | [Array&lt;ListAllDeals200ResponseOpportunitiesInner&gt;](ListAllDeals200ResponseOpportunitiesInner.md)
`salesforceUsers` | Array&lt;any&gt;
`partialResultsOnly` | boolean
`hasJoin` | boolean
`disableEuProspecting` | boolean
`partialResultsLimit` | number
`pagination` | [OrganizationSearch200ResponsePagination](OrganizationSearch200ResponsePagination.md)
`numFetchResult` | any

## Example

```typescript
import type { ListAllDeals200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "breadcrumbs": null,
  "opportunities": null,
  "salesforceUsers": null,
  "partialResultsOnly": false,
  "hasJoin": false,
  "disableEuProspecting": false,
  "partialResultsLimit": 10000,
  "pagination": null,
  "numFetchResult": null,
} satisfies ListAllDeals200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListAllDeals200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


