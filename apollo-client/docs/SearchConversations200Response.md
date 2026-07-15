
# SearchConversations200Response


## Properties

Name | Type
------------ | -------------
`pagination` | { [key: string]: any; }
`breadcrumbs` | { [key: string]: any; }
`numFetchResult` | number
`playlistClipIds` | Array&lt;string&gt;
`conversations` | [Array&lt;SearchConversations200ResponseConversationsInner&gt;](SearchConversations200ResponseConversationsInner.md)

## Example

```typescript
import type { SearchConversations200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "pagination": null,
  "breadcrumbs": null,
  "numFetchResult": null,
  "playlistClipIds": null,
  "conversations": null,
} satisfies SearchConversations200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchConversations200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


