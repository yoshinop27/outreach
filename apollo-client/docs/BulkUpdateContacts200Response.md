
# BulkUpdateContacts200Response


## Properties

Name | Type
------------ | -------------
`contacts` | [Array&lt;BulkUpdateContacts200ResponseOneOfContactsInner&gt;](BulkUpdateContacts200ResponseOneOfContactsInner.md)
`entityProgressJob` | [BulkUpdateContacts200ResponseOneOf1EntityProgressJob](BulkUpdateContacts200ResponseOneOf1EntityProgressJob.md)

## Example

```typescript
import type { BulkUpdateContacts200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "contacts": null,
  "entityProgressJob": null,
} satisfies BulkUpdateContacts200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateContacts200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


