
# SearchForContacts200ResponseContactsInnerOrganization


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
`primaryPhone` | object
`languages` | Array&lt;any&gt;
`alexaRanking` | number
`phone` | any
`linkedinUid` | string
`foundedYear` | number
`publiclyTradedSymbol` | any
`publiclyTradedExchange` | any
`logoUrl` | string
`crunchbaseUrl` | any
`primaryDomain` | string

## Example

```typescript
import type { SearchForContacts200ResponseContactsInnerOrganization } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 5e66b6381e05b4008c8331b8,
  "name": Apollo.io,
  "websiteUrl": http://www.apollo.io,
  "blogUrl": null,
  "angellistUrl": null,
  "linkedinUrl": http://www.linkedin.com/company/apolloio,
  "twitterUrl": https://twitter.com/meetapollo/,
  "facebookUrl": https://www.facebook.com/MeetApollo,
  "primaryPhone": null,
  "languages": null,
  "alexaRanking": 3514,
  "phone": null,
  "linkedinUid": 18511550,
  "foundedYear": 2015,
  "publiclyTradedSymbol": null,
  "publiclyTradedExchange": null,
  "logoUrl": https://zenprospect-production.s3.amazonaws.com/uploads/pictures/79049be00ff8e398b5935de8/picture,
  "crunchbaseUrl": null,
  "primaryDomain": apollo.io,
} satisfies SearchForContacts200ResponseContactsInnerOrganization

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchForContacts200ResponseContactsInnerOrganization
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


