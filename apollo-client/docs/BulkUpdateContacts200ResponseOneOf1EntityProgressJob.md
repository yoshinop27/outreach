
# BulkUpdateContacts200ResponseOneOf1EntityProgressJob


## Properties

Name | Type
------------ | -------------
`id` | string
`jobType` | string
`status` | string
`entityIds` | Array&lt;string&gt;
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { BulkUpdateContacts200ResponseOneOf1EntityProgressJob } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e34b81740c50074e3d1234,
  "jobType": contact_bulk_update,
  "status": pending,
  "entityIds": ["66e34b81740c50074e3d1bd4","66e370fbf5f5c003f0e1d0cf"],
  "createdAt": 2024-09-12T10:30:00.000Z,
  "updatedAt": 2024-09-12T10:30:00.000Z,
} satisfies BulkUpdateContacts200ResponseOneOf1EntityProgressJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateContacts200ResponseOneOf1EntityProgressJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


