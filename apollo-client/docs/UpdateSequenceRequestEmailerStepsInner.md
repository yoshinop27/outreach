
# UpdateSequenceRequestEmailerStepsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`position` | number
`type` | string
`waitMode` | string
`waitTime` | number
`autoSkipInXDays` | number
`emailerTouches` | [Array&lt;UpdateSequenceRequestEmailerStepsInnerEmailerTouchesInner&gt;](UpdateSequenceRequestEmailerStepsInnerEmailerTouchesInner.md)

## Example

```typescript
import type { UpdateSequenceRequestEmailerStepsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "position": null,
  "type": auto_email,
  "waitMode": null,
  "waitTime": null,
  "autoSkipInXDays": null,
  "emailerTouches": null,
} satisfies UpdateSequenceRequestEmailerStepsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSequenceRequestEmailerStepsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


