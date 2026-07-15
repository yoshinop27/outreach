
# BulkUpdateContactsRequest


## Properties

Name | Type
------------ | -------------
`contactIds` | Array&lt;string&gt;
`contactAttributes` | [Array&lt;BulkUpdateContactsRequestContactAttributesInner&gt;](BulkUpdateContactsRequestContactAttributesInner.md)
`ownerId` | string
`email` | string
`organizationName` | string
`title` | string
`firstName` | string
`lastName` | string
`accountId` | string
`presentRawAddress` | string
`linkedinUrl` | string
`typedCustomFields` | { [key: string]: string; }
`async` | boolean
`visibleEntityIds` | Array&lt;string&gt;

## Example

```typescript
import type { BulkUpdateContactsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "contactIds": ["66e34b81740c50074e3d1bd4","66e370fbf5f5c003f0e1d0cf"],
  "contactAttributes": null,
  "ownerId": 66302798d03b9601c7934ebf,
  "email": updated@example.com,
  "organizationName": Updated Corp,
  "title": Updated Title,
  "firstName": Updated,
  "lastName": Name,
  "accountId": 63f53afe4ceeca00016bdd2f,
  "presentRawAddress": New York, NY,
  "linkedinUrl": https://www.linkedin.com/in/updated,
  "typedCustomFields": {"60c39ed82bd02f01154c470a":"2025-08-07"},
  "async": false,
  "visibleEntityIds": ["66e34b81740c50074e3d1bd4"],
} satisfies BulkUpdateContactsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateContactsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


