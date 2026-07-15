
# GetAListOfUsers200ResponsePagination


## Properties

Name | Type
------------ | -------------
`page` | string
`perPage` | string
`totalEntries` | number
`totalPages` | number

## Example

```typescript
import type { GetAListOfUsers200ResponsePagination } from ''

// TODO: Update the object below with actual values
const example = {
  "page": 1,
  "perPage": 3,
  "totalEntries": 23,
  "totalPages": 8,
} satisfies GetAListOfUsers200ResponsePagination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAListOfUsers200ResponsePagination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


