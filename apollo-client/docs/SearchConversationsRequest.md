
# SearchConversationsRequest


## Properties

Name | Type
------------ | -------------
`page` | number
`numFetchResult` | number
`conversationType` | string
`accountId` | string
`contactIds` | Array&lt;string&gt;
`tagIds` | Array&lt;string&gt;
`trackerIds` | Array&lt;string&gt;
`organizationIds` | Array&lt;string&gt;
`dateRange` | [SearchConversationsRequestDateRange](SearchConversationsRequestDateRange.md)
`scorecardTemplateId` | string
`scorecardMaxRating` | number
`sortByField` | string
`enforceContactBoundary` | boolean

## Example

```typescript
import type { SearchConversationsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "page": null,
  "numFetchResult": null,
  "conversationType": null,
  "accountId": null,
  "contactIds": null,
  "tagIds": null,
  "trackerIds": null,
  "organizationIds": null,
  "dateRange": null,
  "scorecardTemplateId": null,
  "scorecardMaxRating": null,
  "sortByField": null,
  "enforceContactBoundary": null,
} satisfies SearchConversationsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchConversationsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


