
# PeopleEnrichment200ResponsePersonContactContactEmailsInner


## Properties

Name | Type
------------ | -------------
`email` | string
`emailMd5` | string
`emailSha256` | string
`emailStatus` | string
`emailSource` | any
`extrapolatedEmailConfidence` | number
`position` | number
`emailFromCustomer` | any
`freeDomain` | boolean

## Example

```typescript
import type { PeopleEnrichment200ResponsePersonContactContactEmailsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "email": roy@apollo.iorrr,
  "emailMd5": 879440a4afe6515e2de11dd7c531b770,
  "emailSha256": d445592892011f8539d5e92394929dfda7936867c21000b21788be8a46aa73d9,
  "emailStatus": verified,
  "emailSource": null,
  "extrapolatedEmailConfidence": null,
  "position": 0,
  "emailFromCustomer": null,
  "freeDomain": false,
} satisfies PeopleEnrichment200ResponsePersonContactContactEmailsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleEnrichment200ResponsePersonContactContactEmailsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


