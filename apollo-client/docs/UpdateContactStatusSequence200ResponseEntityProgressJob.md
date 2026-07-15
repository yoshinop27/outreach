
# UpdateContactStatusSequence200ResponseEntityProgressJob


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`jobType` | string
`entityIds` | Array&lt;string&gt;
`params` | [UpdateContactStatusSequence200ResponseEntityProgressJobParams](UpdateContactStatusSequence200ResponseEntityProgressJobParams.md)
`progress` | number
`batchSize` | number

## Example

```typescript
import type { UpdateContactStatusSequence200ResponseEntityProgressJob } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e9fca8cc087302d18b83be,
  "userId": 60affe7d6e270a00f5db6fe4,
  "jobType": sequence_remove_stop_contacts,
  "entityIds": null,
  "params": null,
  "progress": 0,
  "batchSize": 999,
} satisfies UpdateContactStatusSequence200ResponseEntityProgressJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateContactStatusSequence200ResponseEntityProgressJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


