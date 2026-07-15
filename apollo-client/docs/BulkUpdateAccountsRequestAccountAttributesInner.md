
# BulkUpdateAccountsRequestAccountAttributesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`ownerId` | string
`accountStageId` | string
`typedCustomFields` | { [key: string]: string; }

## Example

```typescript
import type { BulkUpdateAccountsRequestAccountAttributesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e9abf95ac32901b20d1a0d,
  "name": Acme Corporation,
  "ownerId": 66302798d03b9601c7934ebf,
  "accountStageId": 6095a710bd01d100a506d4b7,
  "typedCustomFields": {"60c39ed82bd02f01154c470a":"2025-08-07"},
} satisfies BulkUpdateAccountsRequestAccountAttributesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateAccountsRequestAccountAttributesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


