
# CreateSequence200ResponseEmailerCampaign

The newly created sequence, including its settings, aggregate email stats (`loading` until computed), contact status counts, and sharing permissions.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`active` | boolean
`permissions` | string
`userId` | string
`emailerScheduleId` | string
`numSteps` | number
`creationType` | string
`createdAt` | string

## Example

```typescript
import type { CreateSequence200ResponseEmailerCampaign } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 68b1f3a2e1d2c40001a23b45,
  "name": Q3 Outbound Outreach,
  "active": true,
  "permissions": team_can_use,
  "userId": 60affe7d6e270a00f5db6fe4,
  "emailerScheduleId": 66e9e215ece19801b2199900,
  "numSteps": 2,
  "creationType": new,
  "createdAt": 2026-06-12T10:15:30.000Z,
} satisfies CreateSequence200ResponseEmailerCampaign

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSequence200ResponseEmailerCampaign
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


