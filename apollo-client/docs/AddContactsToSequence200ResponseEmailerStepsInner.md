
# AddContactsToSequence200ResponseEmailerStepsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`emailerCampaignId` | string
`position` | number
`waitTime` | number
`type` | string
`waitMode` | string
`note` | string
`priority` | string
`counts` | [AddContactsToSequence200ResponseEmailerStepsInnerCounts](AddContactsToSequence200ResponseEmailerStepsInnerCounts.md)
`uniqueScheduled` | [AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled](AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled.md)
`uniqueSkipped` | [AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled](AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled.md)
`uniqueCompleted` | [AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled](AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled.md)

## Example

```typescript
import type { AddContactsToSequence200ResponseEmailerStepsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "emailerCampaignId": null,
  "position": null,
  "waitTime": null,
  "type": null,
  "waitMode": null,
  "note": null,
  "priority": null,
  "counts": null,
  "uniqueScheduled": null,
  "uniqueSkipped": null,
  "uniqueCompleted": null,
} satisfies AddContactsToSequence200ResponseEmailerStepsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddContactsToSequence200ResponseEmailerStepsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


