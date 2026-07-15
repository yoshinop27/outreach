
# PeopleEnrichment200ResponsePersonOrganizationFundingEventsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`date` | string
`newsUrl` | any
`type` | string
`investors` | string
`amount` | string
`currency` | string

## Example

```typescript
import type { PeopleEnrichment200ResponsePersonOrganizationFundingEventsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 6574c1ff9b797d0001fdab1b,
  "date": 2023-08-01T00:00:00.000+00:00,
  "newsUrl": null,
  "type": Series D,
  "investors": Bain Capital Ventures, Sequoia Capital, Tribe Capital, Nexus Venture Partners,
  "amount": 100M,
  "currency": $,
} satisfies PeopleEnrichment200ResponsePersonOrganizationFundingEventsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleEnrichment200ResponsePersonOrganizationFundingEventsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


