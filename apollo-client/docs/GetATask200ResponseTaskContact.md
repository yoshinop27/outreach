
# GetATask200ResponseTaskContact

The contact associated with this task, when the task has one. Includes the same fields as the <a href=\"https://docs.apollo.io/reference/view-a-contact\">View a Contact</a> endpoint\'s response.

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
`contactStageId` | any
`linkedinUrl` | string
`phoneNumbers` | Array&lt;any&gt;
`contactEmails` | Array&lt;any&gt;
`typedCustomFields` | object
`labelIds` | Array&lt;any&gt;
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { GetATask200ResponseTaskContact } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e34b81740c50074e3d1bd4,
  "firstName": John,
  "lastName": Smith,
  "name": John Smith,
  "email": john.smith@example.com,
  "title": VP of Sales,
  "organizationName": Example Corp,
  "accountId": 612f9d6cd26c290001d9bda0,
  "ownerId": 66302798d03b9601c7934ebf,
  "contactStageId": null,
  "linkedinUrl": https://www.linkedin.com/in/john-smith-6b2d9f84,
  "phoneNumbers": null,
  "contactEmails": null,
  "typedCustomFields": null,
  "labelIds": null,
  "createdAt": 2024-09-12T18:45:21.456Z,
  "updatedAt": 2024-09-17T00:24:37.436Z,
} satisfies GetATask200ResponseTaskContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetATask200ResponseTaskContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


