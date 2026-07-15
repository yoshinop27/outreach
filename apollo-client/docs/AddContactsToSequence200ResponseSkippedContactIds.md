
# AddContactsToSequence200ResponseSkippedContactIds

Hash mapping contact IDs to reasons why they were skipped during the addition process. Each key is a contact ID and each value is a reason code.

## Properties

Name | Type
------------ | -------------
`contactId` | string

## Example

```typescript
import type { AddContactsToSequence200ResponseSkippedContactIds } from ''

// TODO: Update the object below with actual values
const example = {
  "contactId": null,
} satisfies AddContactsToSequence200ResponseSkippedContactIds

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddContactsToSequence200ResponseSkippedContactIds
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


