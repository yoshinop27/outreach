
# BulkCreateAccountsRequest


## Properties

Name | Type
------------ | -------------
`accounts` | [Array&lt;BulkCreateAccountsRequestAccountsInner&gt;](BulkCreateAccountsRequestAccountsInner.md)
`appendLabelNames` | Array&lt;string&gt;
`runDedupe` | boolean

## Example

```typescript
import type { BulkCreateAccountsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "accounts": null,
  "appendLabelNames": ["Enterprise","High Priority"],
  "runDedupe": true,
} satisfies BulkCreateAccountsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateAccountsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


