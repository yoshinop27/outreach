
# GetConversationsInfo200Response


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
`pushedToCrm` | boolean
`accountIds` | Array&lt;string&gt;
`labelIdNames` | Array&lt;string&gt;
`isSharedConversation` | boolean
`opportunityIds` | Array&lt;string&gt;
`commentCount` | number
`failureCode` | string
`botCallEndedReason` | string
`conversationType` | string
`isClip` | boolean
`videoRecording` | [GetConversationsInfo200ResponseVideoRecording](GetConversationsInfo200ResponseVideoRecording.md)
`audioRecording` | [GetConversationsInfo200ResponseAudioRecording](GetConversationsInfo200ResponseAudioRecording.md)
`transcript` | Array&lt;object&gt;
`participants` | [GetConversationsInfo200ResponseParticipants](GetConversationsInfo200ResponseParticipants.md)
`opportunities` | [Array&lt;GetConversationsInfo200ResponseOpportunitiesInner&gt;](GetConversationsInfo200ResponseOpportunitiesInner.md)
`playlistClipIds` | Array&lt;string&gt;

## Example

```typescript
import type { GetConversationsInfo200Response } from ''

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
  "pushedToCrm": null,
  "accountIds": null,
  "labelIdNames": null,
  "isSharedConversation": null,
  "opportunityIds": null,
  "commentCount": null,
  "failureCode": null,
  "botCallEndedReason": null,
  "conversationType": null,
  "isClip": null,
  "videoRecording": null,
  "audioRecording": null,
  "transcript": null,
  "participants": null,
  "opportunities": null,
  "playlistClipIds": null,
} satisfies GetConversationsInfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetConversationsInfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


