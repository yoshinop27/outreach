
# BulkCreateContacts200ResponseCreatedContactsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastName` | string
`email` | string
`title` | string
`organizationName` | string
`teamId` | string
`ownerId` | string
`contactStageId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { BulkCreateContacts200ResponseCreatedContactsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 507f1f77bcf86cd799439011,
  "firstName": John,
  "lastName": Doe,
  "email": john.doe@example.com,
  "title": Senior Manager,
  "organizationName": Acme Corporation,
  "teamId": 507f1f77bcf86cd799439012,
  "ownerId": 507f1f77bcf86cd799439013,
  "contactStageId": 507f1f77bcf86cd799439014,
  "createdAt": 2025-10-16T18:30:00Z,
  "updatedAt": 2025-10-16T18:30:00Z,
} satisfies BulkCreateContacts200ResponseCreatedContactsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateContacts200ResponseCreatedContactsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


