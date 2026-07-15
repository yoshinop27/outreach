
# CreateSequence200Response


## Properties

Name | Type
------------ | -------------
`emailerCampaign` | [CreateSequence200ResponseEmailerCampaign](CreateSequence200ResponseEmailerCampaign.md)
`emailerSteps` | [Array&lt;CreateSequence200ResponseEmailerStepsInner&gt;](CreateSequence200ResponseEmailerStepsInner.md)
`emailerTouches` | [Array&lt;CreateSequence200ResponseEmailerTouchesInner&gt;](CreateSequence200ResponseEmailerTouchesInner.md)
`emailerTemplates` | [Array&lt;CreateSequenceRequestEmailerStepsInnerEmailerTouchesInnerEmailerTemplate&gt;](CreateSequenceRequestEmailerStepsInnerEmailerTouchesInnerEmailerTemplate.md)
`attachments` | Array&lt;object&gt;

## Example

```typescript
import type { CreateSequence200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "emailerCampaign": null,
  "emailerSteps": null,
  "emailerTouches": null,
  "emailerTemplates": null,
  "attachments": null,
} satisfies CreateSequence200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSequence200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


