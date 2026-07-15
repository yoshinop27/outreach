
# BulkUpdateContacts422ResponseErrorDetails


## Properties

Name | Type
------------ | -------------
`contactId` | string
`field` | string
`message` | string

## Example

```typescript
import type { BulkUpdateContacts422ResponseErrorDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "contactId": 66e34b81740c50074e3d1bd4,
  "field": email,
  "message": Invalid email format,
} satisfies BulkUpdateContacts422ResponseErrorDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateContacts422ResponseErrorDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


