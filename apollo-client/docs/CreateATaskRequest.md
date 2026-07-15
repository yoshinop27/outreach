
# CreateATaskRequest


## Properties

Name | Type
------------ | -------------
`userId` | string
`contactId` | string
`type` | string
`priority` | string
`status` | string
`dueAt` | Date
`title` | string
`note` | string

## Example

```typescript
import type { CreateATaskRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "contactId": null,
  "type": null,
  "priority": null,
  "status": null,
  "dueAt": null,
  "title": null,
  "note": null,
} satisfies CreateATaskRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateATaskRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


