
# CreateAContact200ResponseContactPhoneNumbersInner


## Properties

Name | Type
------------ | -------------
`rawNumber` | string
`sanitizedNumber` | string
`type` | string
`position` | number
`status` | string
`dncStatus` | any
`dncOtherInfo` | any
`dialerFlags` | any

## Example

```typescript
import type { CreateAContact200ResponseContactPhoneNumbersInner } from ''

// TODO: Update the object below with actual values
const example = {
  "rawNumber": 555-555-0149,
  "sanitizedNumber": +15555550149,
  "type": work_direct,
  "position": 0,
  "status": no_status,
  "dncStatus": null,
  "dncOtherInfo": null,
  "dialerFlags": null,
} satisfies CreateAContact200ResponseContactPhoneNumbersInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAContact200ResponseContactPhoneNumbersInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


