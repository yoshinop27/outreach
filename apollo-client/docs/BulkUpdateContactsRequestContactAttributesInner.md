
# BulkUpdateContactsRequestContactAttributesInner


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
`typedCustomFields` | { [key: string]: string; }

## Example

```typescript
import type { BulkUpdateContactsRequestContactAttributesInner } from ''

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
  "typedCustomFields": {60c39ed82bd02f01154c470a=2025-08-07},
} satisfies BulkUpdateContactsRequestContactAttributesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateContactsRequestContactAttributesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


