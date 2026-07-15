
# BulkCreateContacts200ResponseExistingContactsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastName` | string
`email` | string
`title` | string
`teamId` | string
`ownerId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { BulkCreateContacts200ResponseExistingContactsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 507f1f77bcf86cd799439015,
  "firstName": Original,
  "lastName": Name,
  "email": existing@example.com,
  "title": Original Title,
  "teamId": 507f1f77bcf86cd799439012,
  "ownerId": 507f1f77bcf86cd799439013,
  "createdAt": 2025-09-01T10:00:00Z,
  "updatedAt": 2025-09-15T14:30:00Z,
} satisfies BulkCreateContacts200ResponseExistingContactsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateContacts200ResponseExistingContactsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


