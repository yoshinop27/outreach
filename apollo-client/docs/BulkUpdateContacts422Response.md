
# BulkUpdateContacts422Response


## Properties

Name | Type
------------ | -------------
`error` | string
`errorDetails` | [BulkUpdateContacts422ResponseErrorDetails](BulkUpdateContacts422ResponseErrorDetails.md)

## Example

```typescript
import type { BulkUpdateContacts422Response } from ''

// TODO: Update the object below with actual values
const example = {
  "error": Please provide either contact_ids or contact_attributes,
  "errorDetails": null,
} satisfies BulkUpdateContacts422Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateContacts422Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


