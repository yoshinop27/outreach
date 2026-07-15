
# BulkCreateTasks200Response


## Properties

Name | Type
------------ | -------------
`success` | boolean
`tasks` | [Array&lt;CreateATask200ResponseTask&gt;](CreateATask200ResponseTask.md)

## Example

```typescript
import type { BulkCreateTasks200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "tasks": null,
} satisfies BulkCreateTasks200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateTasks200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


