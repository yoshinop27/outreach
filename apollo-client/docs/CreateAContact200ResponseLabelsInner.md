
# CreateAContact200ResponseLabelsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`modality` | string
`cachedCount` | number
`name` | string
`createdAt` | string
`updatedAt` | string
`userId` | string

## Example

```typescript
import type { CreateAContact200ResponseLabelsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e34b81740c50074e3d1bd2,
  "modality": contacts,
  "cachedCount": 0,
  "name": typewriter,
  "createdAt": 2024-09-12T20:13:53.119Z,
  "updatedAt": 2024-09-12T20:13:53.279Z,
  "userId": 60affe7d6e270a00f5db6fe4,
} satisfies CreateAContact200ResponseLabelsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAContact200ResponseLabelsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


