
# CreateSequence200ResponseEmailerTouchesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`emailerStepId` | string
`emailerTemplateId` | string
`status` | string
`type` | string

## Example

```typescript
import type { CreateSequence200ResponseEmailerTouchesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 68b1f3a2e1d2c40001a23b48,
  "emailerStepId": 68b1f3a2e1d2c40001a23b46,
  "emailerTemplateId": 68b1f3a2e1d2c40001a23b4a,
  "status": approved,
  "type": new_thread,
} satisfies CreateSequence200ResponseEmailerTouchesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSequence200ResponseEmailerTouchesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


