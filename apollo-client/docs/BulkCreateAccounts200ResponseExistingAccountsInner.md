
# BulkCreateAccounts200ResponseExistingAccountsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`domain` | string
`teamId` | string
`ownerId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { BulkCreateAccounts200ResponseExistingAccountsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 507f1f77bcf86cd799439015,
  "name": Original Company Name,
  "domain": existing.com,
  "teamId": 507f1f77bcf86cd799439012,
  "ownerId": 507f1f77bcf86cd799439013,
  "createdAt": 2025-09-01T10:00:00Z,
  "updatedAt": 2025-09-15T14:30:00Z,
} satisfies BulkCreateAccounts200ResponseExistingAccountsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateAccounts200ResponseExistingAccountsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


