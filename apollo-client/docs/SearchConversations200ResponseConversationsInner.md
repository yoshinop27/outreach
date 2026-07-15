
# SearchConversations200ResponseConversationsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`topic` | string
`startTime` | string
`duration` | number
`state` | string
`host` | string
`hostId` | string
`isPrivate` | boolean
`conversationType` | string
`canAccessConversation` | boolean
`labelIdNames` | { [key: string]: any; }
`participantNames` | Array&lt;string&gt;
`commentCount` | number
`accountNames` | Array&lt;string&gt;
`accountIds` | Array&lt;string&gt;
`organization` | [SearchConversations200ResponseConversationsInnerOrganization](SearchConversations200ResponseConversationsInnerOrganization.md)
`participantsInfo` | Array&lt;object&gt;
`thumbnailUrl` | string
`isInternal` | boolean
`deals` | [Array&lt;SearchConversations200ResponseConversationsInnerDealsInner&gt;](SearchConversations200ResponseConversationsInnerDealsInner.md)

## Example

```typescript
import type { SearchConversations200ResponseConversationsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "topic": null,
  "startTime": null,
  "duration": null,
  "state": null,
  "host": null,
  "hostId": null,
  "isPrivate": null,
  "conversationType": null,
  "canAccessConversation": null,
  "labelIdNames": null,
  "participantNames": null,
  "commentCount": null,
  "accountNames": null,
  "accountIds": null,
  "organization": null,
  "participantsInfo": null,
  "thumbnailUrl": null,
  "isInternal": null,
  "deals": null,
} satisfies SearchConversations200ResponseConversationsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchConversations200ResponseConversationsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


