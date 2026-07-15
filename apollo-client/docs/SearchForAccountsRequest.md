
# SearchForAccountsRequest


## Properties

Name | Type
------------ | -------------
`qOrganizationName` | string
`accountStageIds` | Array&lt;string&gt;
`accountLabelIds` | Array&lt;string&gt;
`sortByField` | string
`sortAscending` | boolean
`page` | number
`perPage` | number

## Example

```typescript
import type { SearchForAccountsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "qOrganizationName": null,
  "accountStageIds": null,
  "accountLabelIds": null,
  "sortByField": null,
  "sortAscending": null,
  "page": null,
  "perPage": null,
} satisfies SearchForAccountsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchForAccountsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


