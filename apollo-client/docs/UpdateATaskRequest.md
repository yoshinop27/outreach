
# UpdateATaskRequest


## Properties

Name | Type
------------ | -------------
`userId` | string
`creatorId` | string
`contactId` | string
`note` | string
`type` | string
`priority` | string
`priorityCd` | any
`status` | string
`dueAt` | Date
`title` | string
`callScript` | string
`relevantFields` | Array&lt;any&gt;

## Example

```typescript
import type { UpdateATaskRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "creatorId": null,
  "contactId": null,
  "note": null,
  "type": null,
  "priority": null,
  "priorityCd": null,
  "status": null,
  "dueAt": null,
  "title": null,
  "callScript": null,
  "relevantFields": null,
} satisfies UpdateATaskRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateATaskRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


