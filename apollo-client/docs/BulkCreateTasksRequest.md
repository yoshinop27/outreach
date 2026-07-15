
# BulkCreateTasksRequest


## Properties

Name | Type
------------ | -------------
`userId` | string
`contactIds` | Array&lt;string&gt;
`type` | string
`priority` | string
`status` | string
`dueAt` | Date
`note` | string

## Example

```typescript
import type { BulkCreateTasksRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "contactIds": null,
  "type": null,
  "priority": null,
  "status": null,
  "dueAt": null,
  "note": null,
} satisfies BulkCreateTasksRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateTasksRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


