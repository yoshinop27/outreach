
# PeopleEnrichment200ResponsePersonOrganization


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
`industry` | string
`keywords` | Array&lt;string&gt;
`estimatedNumEmployees` | number
`industries` | Array&lt;string&gt;
`secondaryIndustries` | Array&lt;any&gt;
`snippetsLoaded` | boolean
`industryTagId` | string
`industryTagHash` | [PeopleEnrichment200ResponsePersonOrganizationIndustryTagHash](PeopleEnrichment200ResponsePersonOrganizationIndustryTagHash.md)
`retailLocationCount` | number
`rawAddress` | string
`streetAddress` | string
`city` | string
`state` | string
`postalCode` | string
`country` | string
`ownedByOrganizationId` | any
`seoDescription` | string
`shortDescription` | string
`suborganizations` | Array&lt;any&gt;
`numSuborganizations` | number
`annualRevenuePrinted` | string
`annualRevenue` | number
`totalFunding` | number
`totalFundingPrinted` | string
`latestFundingRoundDate` | string
`latestFundingStage` | string
`fundingEvents` | [Array&lt;PeopleEnrichment200ResponsePersonOrganizationFundingEventsInner&gt;](PeopleEnrichment200ResponsePersonOrganizationFundingEventsInner.md)
`technologyNames` | Array&lt;string&gt;
`currentTechnologies` | [Array&lt;PeopleEnrichment200ResponsePersonOrganizationCurrentTechnologiesInner&gt;](PeopleEnrichment200ResponsePersonOrganizationCurrentTechnologiesInner.md)
`orgChartRootPeopleIds` | Array&lt;string&gt;
`orgChartSector` | string
`orgChartRemoved` | boolean
`orgChartShowDepartmentFilter` | boolean

## Example

```typescript
import type { PeopleEnrichment200ResponsePersonOrganization } from ''

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
  "industry": information technology & services,
  "keywords": null,
  "estimatedNumEmployees": 1600,
  "industries": null,
  "secondaryIndustries": null,
  "snippetsLoaded": true,
  "industryTagId": 5567cd4773696439b10b0000,
  "industryTagHash": null,
  "retailLocationCount": 0,
  "rawAddress": 415 Mission St, Floor 37, San Francisco, California 94105, US,
  "streetAddress": 415 Mission St,
  "city": San Francisco,
  "state": California,
  "postalCode": 94105-2301,
  "country": United States,
  "ownedByOrganizationId": null,
  "seoDescription": Search, engage, and convert over 275 million contacts at over 73 million companies with Apollo's sales intelligence and engagement platform.,
  "shortDescription": Apollo.io combines a buyer database of over 270M contacts and powerful sales engagement and automation tools in one, easy to use platform. Trusted by over 160,000 companies including Autodesk, Rippling, Deel, Jasper.ai, Divvy, and Heap, Apollo has more than one million users globally. By helping sales professionals find their ideal buyers and intelligently automate outreach, Apollo helps go-to-market teams sell anything.

Celebrating a $100M Series D Funding Round 🦄,
  "suborganizations": null,
  "numSuborganizations": 0,
  "annualRevenuePrinted": 100M,
  "annualRevenue": 100000000,
  "totalFunding": 251200000,
  "totalFundingPrinted": 251.2M,
  "latestFundingRoundDate": 2023-08-01T00:00:00.000+00:00,
  "latestFundingStage": Series D,
  "fundingEvents": null,
  "technologyNames": null,
  "currentTechnologies": null,
  "orgChartRootPeopleIds": null,
  "orgChartSector": OrgChart::SectorHierarchy::Rules::IT,
  "orgChartRemoved": false,
  "orgChartShowDepartmentFilter": true,
} satisfies PeopleEnrichment200ResponsePersonOrganization

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleEnrichment200ResponsePersonOrganization
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


