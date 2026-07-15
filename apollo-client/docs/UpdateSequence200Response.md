
# UpdateSequence200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`active` | boolean
`archived` | boolean
`createdAt` | string
`updatedAt` | string
`numSteps` | number
`steps` | [Array&lt;UpdateSequence200ResponseStepsInner&gt;](UpdateSequence200ResponseStepsInner.md)
`emailerCampaign` | [UpdateSequence200ResponseEmailerCampaign](UpdateSequence200ResponseEmailerCampaign.md)
`emailerSteps` | [Array&lt;UpdateSequence200ResponseEmailerStepsInner&gt;](UpdateSequence200ResponseEmailerStepsInner.md)
`emailerTouches` | [Array&lt;UpdateSequence200ResponseEmailerTouchesInner&gt;](UpdateSequence200ResponseEmailerTouchesInner.md)

## Example

```typescript
import type { UpdateSequence200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e34b81740c50074e3d1bd4,
  "name": first campaign,
  "active": true,
  "archived": false,
  "createdAt": 2024-09-12T20:13:53.207Z,
  "updatedAt": 2024-09-12T20:14:53.134Z,
  "numSteps": 1,
  "steps": null,
  "emailerCampaign": null,
  "emailerSteps": null,
  "emailerTouches": null,
} satisfies UpdateSequence200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSequence200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


