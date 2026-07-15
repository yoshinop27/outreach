
# OrganizationSearch200ResponseOrganizationsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`websiteUrl` | string
`blogUrl` | any
`angellistUrl` | any
`linkedinUrl` | string
`twitterUrl` | string
`facebookUrl` | string
`primaryPhone` | [OrganizationSearch200ResponseOrganizationsInnerPrimaryPhone](OrganizationSearch200ResponseOrganizationsInnerPrimaryPhone.md)
`languages` | Array&lt;string&gt;
`alexaRanking` | number
`phone` | string
`linkedinUid` | string
`foundedYear` | number
`publiclyTradedSymbol` | any
`publiclyTradedExchange` | any
`logoUrl` | string
`crunchbaseUrl` | any
`primaryDomain` | string
`sanitizedPhone` | string
`ownedByOrganizationId` | any
`intentStrength` | any
`showIntent` | boolean
`hasIntentSignalAccount` | boolean
`intentSignalAccount` | any

## Example

```typescript
import type { OrganizationSearch200ResponseOrganizationsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 615d029256de500001bdb460,
  "name": Nikkei Asia,
  "websiteUrl": http://www.nikkei.com,
  "blogUrl": null,
  "angellistUrl": null,
  "linkedinUrl": http://www.linkedin.com/company/nikkeiasia,
  "twitterUrl": https://twitter.com/nikkei,
  "facebookUrl": https://facebook.com/nikkei,
  "primaryPhone": null,
  "languages": null,
  "alexaRanking": 1583,
  "phone": +81 576-95-0781,
  "linkedinUid": 3335963,
  "foundedYear": 1876,
  "publiclyTradedSymbol": null,
  "publiclyTradedExchange": null,
  "logoUrl": https://zenprospect-production.s3.amazonaws.com/uploads/pictures/ff63c201695aca418dd88bd9/picture,
  "crunchbaseUrl": null,
  "primaryDomain": nikkei.com,
  "sanitizedPhone": +81576950781,
  "ownedByOrganizationId": null,
  "intentStrength": null,
  "showIntent": true,
  "hasIntentSignalAccount": false,
  "intentSignalAccount": null,
} satisfies OrganizationSearch200ResponseOrganizationsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationSearch200ResponseOrganizationsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


