
# BulkCreateAccounts200Response


## Properties

Name | Type
------------ | -------------
`createdAccounts` | [Array&lt;BulkCreateAccounts200ResponseCreatedAccountsInner&gt;](BulkCreateAccounts200ResponseCreatedAccountsInner.md)
`existingAccounts` | [Array&lt;BulkCreateAccounts200ResponseExistingAccountsInner&gt;](BulkCreateAccounts200ResponseExistingAccountsInner.md)

## Example

```typescript
import type { BulkCreateAccounts200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAccounts": null,
  "existingAccounts": null,
} satisfies BulkCreateAccounts200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateAccounts200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


