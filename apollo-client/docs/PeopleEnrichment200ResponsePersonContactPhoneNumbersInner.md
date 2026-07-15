
# PeopleEnrichment200ResponsePersonContactPhoneNumbersInner


## Properties

Name | Type
------------ | -------------
`rawNumber` | string
`sanitizedNumber` | string
`type` | any
`position` | number
`status` | string
`dncStatus` | any
`dncOtherInfo` | any
`dialerFlags` | any

## Example

```typescript
import type { PeopleEnrichment200ResponsePersonContactPhoneNumbersInner } from ''

// TODO: Update the object below with actual values
const example = {
  "rawNumber": (123) 555-0158,
  "sanitizedNumber": +11235550158,
  "type": null,
  "position": 0,
  "status": valid_number,
  "dncStatus": null,
  "dncOtherInfo": null,
  "dialerFlags": null,
} satisfies PeopleEnrichment200ResponsePersonContactPhoneNumbersInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleEnrichment200ResponsePersonContactPhoneNumbersInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


