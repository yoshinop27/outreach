
# BulkPeopleEnrichmentRequestDetailsInner


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`name` | string
`email` | string
`hashedEmail` | string
`organizationName` | string
`domain` | string
`id` | string
`linkedinUrl` | string

## Example

```typescript
import type { BulkPeopleEnrichmentRequestDetailsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "name": null,
  "email": null,
  "hashedEmail": null,
  "organizationName": null,
  "domain": null,
  "id": null,
  "linkedinUrl": null,
} satisfies BulkPeopleEnrichmentRequestDetailsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkPeopleEnrichmentRequestDetailsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


