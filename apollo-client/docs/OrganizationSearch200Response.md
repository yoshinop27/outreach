
# OrganizationSearch200Response


## Properties

Name | Type
------------ | -------------
`breadcrumbs` | [Array&lt;OrganizationSearch200ResponseBreadcrumbsInner&gt;](OrganizationSearch200ResponseBreadcrumbsInner.md)
`partialResultsOnly` | boolean
`hasJoin` | boolean
`disableEuProspecting` | boolean
`partialResultsLimit` | number
`pagination` | [OrganizationSearch200ResponsePagination](OrganizationSearch200ResponsePagination.md)
`accounts` | Array&lt;any&gt;
`organizations` | [Array&lt;OrganizationSearch200ResponseOrganizationsInner&gt;](OrganizationSearch200ResponseOrganizationsInner.md)
`modelIds` | Array&lt;string&gt;
`numFetchResult` | any
`derivedParams` | any

## Example

```typescript
import type { OrganizationSearch200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "breadcrumbs": null,
  "partialResultsOnly": false,
  "hasJoin": false,
  "disableEuProspecting": false,
  "partialResultsLimit": 10000,
  "pagination": null,
  "accounts": null,
  "organizations": null,
  "modelIds": null,
  "numFetchResult": null,
  "derivedParams": null,
} satisfies OrganizationSearch200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationSearch200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


