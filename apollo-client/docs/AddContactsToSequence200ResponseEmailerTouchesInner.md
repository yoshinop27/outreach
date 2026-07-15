
# AddContactsToSequence200ResponseEmailerTouchesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`emailerStepId` | string
`emailerTemplateId` | string
`status` | string
`type` | string
`includeSignature` | boolean
`hasPersonalizedOpener` | boolean
`templateType` | string
`uniqueScheduled` | [AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled](AddContactsToSequence200ResponseEmailerCampaignUniqueScheduled.md)
`uniqueDelivered` | number
`uniqueBounced` | number
`uniqueOpened` | number
`uniqueReplied` | number
`bounceRate` | number
`openRate` | number
`replyRate` | number

## Example

```typescript
import type { AddContactsToSequence200ResponseEmailerTouchesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "emailerStepId": null,
  "emailerTemplateId": null,
  "status": null,
  "type": null,
  "includeSignature": null,
  "hasPersonalizedOpener": null,
  "templateType": null,
  "uniqueScheduled": null,
  "uniqueDelivered": null,
  "uniqueBounced": null,
  "uniqueOpened": null,
  "uniqueReplied": null,
  "bounceRate": null,
  "openRate": null,
  "replyRate": null,
} satisfies AddContactsToSequence200ResponseEmailerTouchesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddContactsToSequence200ResponseEmailerTouchesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


