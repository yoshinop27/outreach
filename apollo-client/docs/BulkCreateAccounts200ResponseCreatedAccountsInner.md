
# BulkCreateAccounts200ResponseCreatedAccountsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`domain` | string
`teamId` | string
`ownerId` | string
`accountStageId` | string
`phone` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { BulkCreateAccounts200ResponseCreatedAccountsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 507f1f77bcf86cd799439011,
  "name": Acme Corporation,
  "domain": acme.com,
  "teamId": 507f1f77bcf86cd799439012,
  "ownerId": 507f1f77bcf86cd799439013,
  "accountStageId": 507f1f77bcf86cd799439014,
  "phone": +1-555-0135,
  "createdAt": 2025-10-16T18:30:00Z,
  "updatedAt": 2025-10-16T18:30:00Z,
} satisfies BulkCreateAccounts200ResponseCreatedAccountsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateAccounts200ResponseCreatedAccountsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


