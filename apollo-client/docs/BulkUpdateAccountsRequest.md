
# BulkUpdateAccountsRequest


## Properties

Name | Type
------------ | -------------
`accountIds` | Array&lt;string&gt;
`accountAttributes` | [Array&lt;BulkUpdateAccountsRequestAccountAttributesInner&gt;](BulkUpdateAccountsRequestAccountAttributesInner.md)
`name` | string
`ownerId` | string
`accountStageId` | string
`async` | boolean

## Example

```typescript
import type { BulkUpdateAccountsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "accountIds": ["66e9abf95ac32901b20d1a0d","66e9a4db056fe802d331fb8a"],
  "accountAttributes": null,
  "name": Updated Account Name,
  "ownerId": 66302798d03b9601c7934ebf,
  "accountStageId": 6095a710bd01d100a506d4b7,
  "async": false,
} satisfies BulkUpdateAccountsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateAccountsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


