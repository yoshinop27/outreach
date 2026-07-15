
# CreateSequenceRequestEmailerStepsInnerEmailerTouchesInner


## Properties

Name | Type
------------ | -------------
`type` | string
`status` | string
`includeSignature` | boolean
`emailerTemplate` | [CreateSequenceRequestEmailerStepsInnerEmailerTouchesInnerEmailerTemplate](CreateSequenceRequestEmailerStepsInnerEmailerTouchesInnerEmailerTemplate.md)
`attachmentIds` | Array&lt;string&gt;

## Example

```typescript
import type { CreateSequenceRequestEmailerStepsInnerEmailerTouchesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "status": null,
  "includeSignature": null,
  "emailerTemplate": null,
  "attachmentIds": null,
} satisfies CreateSequenceRequestEmailerStepsInnerEmailerTouchesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSequenceRequestEmailerStepsInnerEmailerTouchesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


