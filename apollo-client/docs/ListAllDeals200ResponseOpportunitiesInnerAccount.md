
# ListAllDeals200ResponseOpportunitiesInnerAccount


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
`publiclyTradedExchange` | string
`logoUrl` | string
`crunchbaseUrl` | any
`primaryDomain` | string
`sanitizedPhone` | string
`domain` | string
`teamId` | string
`organizationId` | string
`accountStageId` | string
`source` | string
`originalSource` | string
`creatorId` | any
`ownerId` | any
`createdAt` | string
`phoneStatus` | string
`hubspotId` | any
`salesforceId` | any
`crmOwnerId` | any
`parentAccountId` | any
`accountPlaybookStatuses` | Array&lt;any&gt;
`accountRuleConfigStatuses` | [Array&lt;BulkPeopleEnrichment200ResponseMatchesInnerAccountAccountRuleConfigStatusesInner&gt;](BulkPeopleEnrichment200ResponseMatchesInnerAccountAccountRuleConfigStatusesInner.md)
`existenceLevel` | string
`labelIds` | Array&lt;string&gt;
`typedCustomFields` | object
`customFieldErrors` | any
`modality` | string
`sourceDisplayName` | string
`crmRecordUrl` | any
`contactEmailerCampaignIds` | Array&lt;any&gt;
`contactCampaignStatusTally` | object
`numContacts` | number
`lastActivityDate` | any

## Example

```typescript
import type { ListAllDeals200ResponseOpportunitiesInnerAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 60afffecbff6de00a4b82be7,
  "name": NASA - National Aeronautics and Space Administration,
  "websiteUrl": http://www.nasa.gov,
  "blogUrl": null,
  "angellistUrl": null,
  "linkedinUrl": http://www.linkedin.com/company/nasa,
  "twitterUrl": https://twitter.com/NASA,
  "facebookUrl": http://www.facebook.com/NASAJPL,
  "primaryPhone": null,
  "languages": null,
  "alexaRanking": 1751,
  "phone": +1 202-555-0117,
  "linkedinUid": 2003,
  "foundedYear": 1958,
  "publiclyTradedSymbol": null,
  "publiclyTradedExchange": nyse,
  "logoUrl": https://zenprospect-production.s3.amazonaws.com/uploads/pictures/139afb7258561417c1d70d4c/picture,
  "crunchbaseUrl": null,
  "primaryDomain": nasa.gov,
  "sanitizedPhone": +12025550117,
  "domain": nasa.gov,
  "teamId": 6095a710bd01d100a506d4ac,
  "organizationId": 55e16cfbf3e5bb66cf0026f3,
  "accountStageId": 6095a710bd01d100a506d4b9,
  "source": deployment,
  "originalSource": deployment,
  "creatorId": null,
  "ownerId": null,
  "createdAt": 2021-05-27T20:24:12.644Z,
  "phoneStatus": no_status,
  "hubspotId": null,
  "salesforceId": null,
  "crmOwnerId": null,
  "parentAccountId": null,
  "accountPlaybookStatuses": null,
  "accountRuleConfigStatuses": null,
  "existenceLevel": full,
  "labelIds": null,
  "typedCustomFields": null,
  "customFieldErrors": null,
  "modality": account,
  "sourceDisplayName": Requested from Apollo,
  "crmRecordUrl": null,
  "contactEmailerCampaignIds": null,
  "contactCampaignStatusTally": null,
  "numContacts": 2,
  "lastActivityDate": null,
} satisfies ListAllDeals200ResponseOpportunitiesInnerAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListAllDeals200ResponseOpportunitiesInnerAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


