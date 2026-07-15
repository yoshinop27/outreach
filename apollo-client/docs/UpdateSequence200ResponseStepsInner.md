
# UpdateSequence200ResponseStepsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`position` | number
`stepType` | string
`waitTime` | number
`waitMode` | string
`autoSkipInXDays` | any

## Example

```typescript
import type { UpdateSequence200ResponseStepsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e361494acd1307386d4073,
  "position": 1,
  "stepType": auto_email,
  "waitTime": 1,
  "waitMode": day,
  "autoSkipInXDays": null,
} satisfies UpdateSequence200ResponseStepsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSequence200ResponseStepsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


