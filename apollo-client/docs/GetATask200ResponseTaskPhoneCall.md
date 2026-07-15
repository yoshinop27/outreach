
# GetATask200ResponseTaskPhoneCall

Details about the logged phone call for this task. Only present for `call` type tasks that have an associated call log.

## Properties

Name | Type
------------ | -------------
`id` | string
`answered` | boolean
`createdAt` | string
`phoneCallOutcomeId` | any
`phoneCallPurposeId` | any
`toNumber` | string

## Example

```typescript
import type { GetATask200ResponseTaskPhoneCall } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e8cc45028aed019c25d720,
  "answered": true,
  "createdAt": 2024-09-17T00:24:37.436Z,
  "phoneCallOutcomeId": null,
  "phoneCallPurposeId": null,
  "toNumber": +1 (555) 555-****,
} satisfies GetATask200ResponseTaskPhoneCall

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetATask200ResponseTaskPhoneCall
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


