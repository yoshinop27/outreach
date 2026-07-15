
# ViewAContact200ResponseContact


## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastName` | string
`name` | string
`email` | string
`title` | string
`organizationName` | string
`accountId` | string
`ownerId` | string
`contactStageId` | string
`linkedinUrl` | string
`phoneNumbers` | [Array&lt;ViewAContact200ResponseContactPhoneNumbersInner&gt;](ViewAContact200ResponseContactPhoneNumbersInner.md)
`typedCustomFields` | { [key: string]: string; }
`labelIds` | Array&lt;string&gt;
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { ViewAContact200ResponseContact } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e34b81740c50074e3d1bd4,
  "firstName": John,
  "lastName": Doe,
  "name": John Doe,
  "email": john.doe@example.com,
  "title": VP of Sales,
  "organizationName": Acme Corp,
  "accountId": 63f53afe4ceeca00016bdd2f,
  "ownerId": 66302798d03b9601c7934ebf,
  "contactStageId": 6095a710bd01d100a506d4ae,
  "linkedinUrl": https://linkedin.com/in/john-doe-3f9a7c21,
  "phoneNumbers": null,
  "typedCustomFields": null,
  "labelIds": null,
  "createdAt": 2023-01-01T00:00:00.000Z,
  "updatedAt": 2023-01-02T00:00:00.000Z,
} satisfies ViewAContact200ResponseContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewAContact200ResponseContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


