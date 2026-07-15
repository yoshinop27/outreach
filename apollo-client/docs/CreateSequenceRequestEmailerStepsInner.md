
# CreateSequenceRequestEmailerStepsInner


## Properties

Name | Type
------------ | -------------
`type` | string
`waitTime` | number
`waitMode` | string
`exactDatetime` | string
`priority` | string
`note` | string
`maxEmailsPerDay` | number
`autoSkipInXDays` | number
`emailerTouches` | [Array&lt;CreateSequenceRequestEmailerStepsInnerEmailerTouchesInner&gt;](CreateSequenceRequestEmailerStepsInnerEmailerTouchesInner.md)

## Example

```typescript
import type { CreateSequenceRequestEmailerStepsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "waitTime": null,
  "waitMode": null,
  "exactDatetime": null,
  "priority": null,
  "note": null,
  "maxEmailsPerDay": null,
  "autoSkipInXDays": null,
  "emailerTouches": null,
} satisfies CreateSequenceRequestEmailerStepsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSequenceRequestEmailerStepsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


