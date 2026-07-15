
# UpdateAContactRequest


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`organizationName` | string
`title` | string
`accountId` | string
`email` | string
`websiteUrl` | string
`labelNames` | Array&lt;string&gt;
`contactStageId` | string
`presentRawAddress` | string
`directPhone` | string
`corporatePhone` | string
`mobilePhone` | string
`homePhone` | string
`otherPhone` | string
`typedCustomFields` | { [key: string]: string; }

## Example

```typescript
import type { UpdateAContactRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "organizationName": null,
  "title": null,
  "accountId": null,
  "email": null,
  "websiteUrl": null,
  "labelNames": null,
  "contactStageId": null,
  "presentRawAddress": null,
  "directPhone": null,
  "corporatePhone": null,
  "mobilePhone": null,
  "homePhone": null,
  "otherPhone": null,
  "typedCustomFields": {60c39ed82bd02f01154c470a=2025-08-07},
} satisfies UpdateAContactRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAContactRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


