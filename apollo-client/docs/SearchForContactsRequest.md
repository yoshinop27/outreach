
# SearchForContactsRequest


## Properties

Name | Type
------------ | -------------
`qKeywords` | string
`contactStageIds` | Array&lt;string&gt;
`contactLabelIds` | Array&lt;string&gt;
`sortByField` | string
`sortAscending` | boolean
`perPage` | number
`page` | number

## Example

```typescript
import type { SearchForContactsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "qKeywords": null,
  "contactStageIds": null,
  "contactLabelIds": null,
  "sortByField": null,
  "sortAscending": null,
  "perPage": null,
  "page": null,
} satisfies SearchForContactsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchForContactsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


