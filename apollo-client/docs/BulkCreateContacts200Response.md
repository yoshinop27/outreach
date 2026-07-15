
# BulkCreateContacts200Response


## Properties

Name | Type
------------ | -------------
`createdContacts` | [Array&lt;BulkCreateContacts200ResponseCreatedContactsInner&gt;](BulkCreateContacts200ResponseCreatedContactsInner.md)
`existingContacts` | [Array&lt;BulkCreateContacts200ResponseExistingContactsInner&gt;](BulkCreateContacts200ResponseExistingContactsInner.md)

## Example

```typescript
import type { BulkCreateContacts200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "createdContacts": null,
  "existingContacts": null,
} satisfies BulkCreateContacts200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateContacts200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


