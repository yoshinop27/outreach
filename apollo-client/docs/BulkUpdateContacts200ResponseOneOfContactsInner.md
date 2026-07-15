
# BulkUpdateContacts200ResponseOneOfContactsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastName` | string
`email` | string
`title` | string
`organizationName` | string
`ownerId` | string
`accountId` | string
`presentRawAddress` | string
`linkedinUrl` | string
`updatedAt` | Date

## Example

```typescript
import type { BulkUpdateContacts200ResponseOneOfContactsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e34b81740c50074e3d1bd4,
  "firstName": John,
  "lastName": Doe,
  "email": john.doe@example.com,
  "title": Senior Manager,
  "organizationName": Example Corp,
  "ownerId": 66302798d03b9601c7934ebf,
  "accountId": 63f53afe4ceeca00016bdd2f,
  "presentRawAddress": San Francisco, CA,
  "linkedinUrl": https://www.linkedin.com/in/john-doe-3f9a7c21,
  "updatedAt": 2024-09-12T10:30:00.000Z,
} satisfies BulkUpdateContacts200ResponseOneOfContactsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateContacts200ResponseOneOfContactsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


