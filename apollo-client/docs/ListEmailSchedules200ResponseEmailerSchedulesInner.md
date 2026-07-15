
# ListEmailSchedules200ResponseEmailerSchedulesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`_default` | boolean
`timeZone` | string
`scheduleHash` | object
`createdAt` | string
`useContactsTimeZone` | boolean
`skipHolidays` | boolean

## Example

```typescript
import type { ListEmailSchedules200ResponseEmailerSchedulesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 6605a1f2e4b0c80012a3d456,
  "name": Normal Business Hours,
  "_default": true,
  "timeZone": America/Los_Angeles,
  "scheduleHash": null,
  "createdAt": 2024-03-28T18:56:24.067Z,
  "useContactsTimeZone": true,
  "skipHolidays": true,
} satisfies ListEmailSchedules200ResponseEmailerSchedulesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListEmailSchedules200ResponseEmailerSchedulesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


