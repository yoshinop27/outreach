
# GetConversationsInfo200ResponseParticipants

Participants in the conversation, grouped by internal and external.

## Properties

Name | Type
------------ | -------------
`internal` | Array&lt;object&gt;
`external` | { [key: string]: any; }

## Example

```typescript
import type { GetConversationsInfo200ResponseParticipants } from ''

// TODO: Update the object below with actual values
const example = {
  "internal": null,
  "external": null,
} satisfies GetConversationsInfo200ResponseParticipants

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetConversationsInfo200ResponseParticipants
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


