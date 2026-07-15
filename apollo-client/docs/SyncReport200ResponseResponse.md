
# SyncReport200ResponseResponse

The query result. Contains four sub-keys depending on query mode and flags. See response examples for each shape.

## Properties

Name | Type
------------ | -------------
`tableResponse` | { [key: string]: any; }
`groupByTotalResponse` | { [key: string]: any; }
`pivotGroupByTotalResponse` | { [key: string]: any; }

## Example

```typescript
import type { SyncReport200ResponseResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "tableResponse": null,
  "groupByTotalResponse": null,
  "pivotGroupByTotalResponse": null,
} satisfies SyncReport200ResponseResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SyncReport200ResponseResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


