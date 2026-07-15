
# BulkCreateContactsRequest


## Properties

Name | Type
------------ | -------------
`contacts` | [Array&lt;BulkCreateContactsRequestContactsInner&gt;](BulkCreateContactsRequestContactsInner.md)
`appendLabelNames` | Array&lt;string&gt;
`ownerId` | string
`runDedupe` | boolean

## Example

```typescript
import type { BulkCreateContactsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "contacts": null,
  "appendLabelNames": ["Hot Lead","Q1 2024"],
  "ownerId": 507f1f77bcf86cd799439013,
  "runDedupe": true,
} satisfies BulkCreateContactsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateContactsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


