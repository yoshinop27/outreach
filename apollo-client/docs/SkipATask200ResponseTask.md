
# SkipATask200ResponseTask


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`note` | any
`completed` | boolean

## Example

```typescript
import type { SkipATask200ResponseTask } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 67a1b2c3d4e5f60001234567,
  "status": skipped,
  "note": null,
  "completed": false,
} satisfies SkipATask200ResponseTask

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SkipATask200ResponseTask
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


