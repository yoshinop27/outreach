
# SearchForSequences200Response


## Properties

Name | Type
------------ | -------------
`pagination` | [OrganizationSearch200ResponsePagination](OrganizationSearch200ResponsePagination.md)
`breadcrumbs` | [Array&lt;OrganizationSearch200ResponseBreadcrumbsInner&gt;](OrganizationSearch200ResponseBreadcrumbsInner.md)
`emailerCampaigns` | [Array&lt;SearchForSequences200ResponseEmailerCampaignsInner&gt;](SearchForSequences200ResponseEmailerCampaignsInner.md)
`numFetchResult` | any

## Example

```typescript
import type { SearchForSequences200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "pagination": null,
  "breadcrumbs": null,
  "emailerCampaigns": null,
  "numFetchResult": null,
} satisfies SearchForSequences200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchForSequences200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


