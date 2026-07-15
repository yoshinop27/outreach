
# ExportConversations200Response


## Properties

Name | Type
------------ | -------------
`exportUrl` | string
`exportId` | string

## Example

```typescript
import type { ExportConversations200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "exportUrl": https://app.apollo.io/api/v1/conversations/export/6a060f34585b480015951efd,
  "exportId": 6a060f34585b480015951efd,
} satisfies ExportConversations200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportConversations200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


