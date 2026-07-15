
# CreateSequence200ResponseEmailerStepsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`emailerCampaignId` | string
`position` | number
`type` | string
`waitTime` | number
`waitMode` | string

## Example

```typescript
import type { CreateSequence200ResponseEmailerStepsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 68b1f3a2e1d2c40001a23b46,
  "emailerCampaignId": 68b1f3a2e1d2c40001a23b45,
  "position": 1,
  "type": auto_email,
  "waitTime": 3,
  "waitMode": day,
} satisfies CreateSequence200ResponseEmailerStepsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSequence200ResponseEmailerStepsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


