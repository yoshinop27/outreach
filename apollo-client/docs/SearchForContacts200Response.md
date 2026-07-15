
# SearchForContacts200Response


## Properties

Name | Type
------------ | -------------
`contacts` | [Array&lt;SearchForContacts200ResponseContactsInner&gt;](SearchForContacts200ResponseContactsInner.md)
`breadcrumbs` | [Array&lt;OrganizationSearch200ResponseBreadcrumbsInner&gt;](OrganizationSearch200ResponseBreadcrumbsInner.md)
`partialResultsOnly` | boolean
`hasJoin` | boolean
`disableEuProspecting` | boolean
`partialResultsLimit` | number
`pagination` | [OrganizationSearch200ResponsePagination](OrganizationSearch200ResponsePagination.md)
`numFetchResult` | any

## Example

```typescript
import type { SearchForContacts200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "contacts": null,
  "breadcrumbs": null,
  "partialResultsOnly": false,
  "hasJoin": false,
  "disableEuProspecting": false,
  "partialResultsLimit": 10000,
  "pagination": null,
  "numFetchResult": null,
} satisfies SearchForContacts200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchForContacts200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


