
# AddContactsToSequence200Response


## Properties

Name | Type
------------ | -------------
`contacts` | [Array&lt;AddContactsToSequence200ResponseContactsInner&gt;](AddContactsToSequence200ResponseContactsInner.md)
`skippedContactIds` | [AddContactsToSequence200ResponseSkippedContactIds](AddContactsToSequence200ResponseSkippedContactIds.md)
`emailerCampaign` | [AddContactsToSequence200ResponseEmailerCampaign](AddContactsToSequence200ResponseEmailerCampaign.md)
`emailerSteps` | [Array&lt;AddContactsToSequence200ResponseEmailerStepsInner&gt;](AddContactsToSequence200ResponseEmailerStepsInner.md)
`emailerTouches` | [Array&lt;AddContactsToSequence200ResponseEmailerTouchesInner&gt;](AddContactsToSequence200ResponseEmailerTouchesInner.md)
`team` | [AddContactsToSequence200ResponseTeam](AddContactsToSequence200ResponseTeam.md)
`signalsHash` | object

## Example

```typescript
import type { AddContactsToSequence200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "contacts": null,
  "skippedContactIds": null,
  "emailerCampaign": null,
  "emailerSteps": null,
  "emailerTouches": null,
  "team": null,
  "signalsHash": null,
} satisfies AddContactsToSequence200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddContactsToSequence200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


