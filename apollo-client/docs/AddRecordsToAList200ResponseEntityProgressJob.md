
# AddRecordsToAList200ResponseEntityProgressJob

Returned instead of `labels` when `async` is `true`. Represents the background job processing the request; poll it to track progress.

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`jobType` | string
`entityIds` | Array&lt;string&gt;
`params` | object
`progress` | number
`batchSize` | number

## Example

```typescript
import type { AddRecordsToAList200ResponseEntityProgressJob } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "jobType": null,
  "entityIds": null,
  "params": null,
  "progress": null,
  "batchSize": null,
} satisfies AddRecordsToAList200ResponseEntityProgressJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddRecordsToAList200ResponseEntityProgressJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


