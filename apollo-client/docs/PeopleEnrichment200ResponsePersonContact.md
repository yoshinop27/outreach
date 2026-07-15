
# PeopleEnrichment200ResponsePersonContact


## Properties

Name | Type
------------ | -------------
`contactRoles` | Array&lt;any&gt;
`id` | string
`firstName` | string
`lastName` | string
`name` | string
`linkedinUrl` | string
`title` | string
`contactStageId` | string
`ownerId` | any
`creatorId` | string
`personId` | string
`emailNeedsTickling` | any
`organizationName` | string
`source` | string
`originalSource` | string
`organizationId` | string
`headline` | string
`photoUrl` | any
`presentRawAddress` | string
`linkedinUid` | any
`extrapolatedEmailConfidence` | number
`salesforceId` | any
`salesforceLeadId` | any
`salesforceContactId` | any
`salesforceAccountId` | any
`crmOwnerId` | any
`createdAt` | string
`emailerCampaignIds` | Array&lt;any&gt;
`directDialStatus` | any
`directDialEnrichmentFailedAt` | any
`emailStatus` | string
`emailSource` | any
`accountId` | string
`lastActivityDate` | any
`hubspotVid` | any
`hubspotCompanyId` | any
`crmId` | any
`sanitizedPhone` | string
`mergedCrmIds` | any
`updatedAt` | string
`queuedForCrmPush` | any
`suggestedFromRuleEngineConfigId` | any
`emailUnsubscribed` | any
`labelIds` | Array&lt;any&gt;
`hasPendingEmailArcgateRequest` | boolean
`hasEmailArcgateRequest` | boolean
`existenceLevel` | string
`email` | string
`emailFromCustomer` | boolean
`typedCustomFields` | object
`customFieldErrors` | any
`crmRecordUrl` | any
`emailStatusUnavailableReason` | any
`emailTrueStatus` | string
`updatedEmailTrueStatus` | boolean
`contactRuleConfigStatuses` | Array&lt;any&gt;
`sourceDisplayName` | string
`contactEmails` | [Array&lt;PeopleEnrichment200ResponsePersonContactContactEmailsInner&gt;](PeopleEnrichment200ResponsePersonContactContactEmailsInner.md)
`timeZone` | string
`phoneNumbers` | [Array&lt;PeopleEnrichment200ResponsePersonContactPhoneNumbersInner&gt;](PeopleEnrichment200ResponsePersonContactPhoneNumbersInner.md)
`accountPhoneNote` | any
`freeDomain` | boolean
`isLikelyToEngage` | boolean

## Example

```typescript
import type { PeopleEnrichment200ResponsePersonContact } from ''

// TODO: Update the object below with actual values
const example = {
  "contactRoles": null,
  "id": 664fa05cf8299f0001f90876,
  "firstName": Roy,
  "lastName": Chung,
  "name": Roy Chung,
  "linkedinUrl": http://www.linkedin.com/in/tim-zheng-677ba010,
  "title": Reaching Peak Potential 💪⛰️📈🧪️ | President,
  "contactStageId": 6095a710bd01d100a506d4ae,
  "ownerId": null,
  "creatorId": 66302798d03b9601c7934ec2,
  "personId": 64a7ff0cc4dfae00013df1a5,
  "emailNeedsTickling": null,
  "organizationName": Apollo.io,
  "source": crm,
  "originalSource": crm,
  "organizationId": 5e66b6381e05b4008c8331b8,
  "headline": Reaching Peak Potential 💪⛰️📈🧪️ | President at FRC,
  "photoUrl": null,
  "presentRawAddress": New York, New York, United States,
  "linkedinUid": null,
  "extrapolatedEmailConfidence": null,
  "salesforceId": null,
  "salesforceLeadId": null,
  "salesforceContactId": null,
  "salesforceAccountId": null,
  "crmOwnerId": null,
  "createdAt": 2024-05-23T20:00:28.527Z,
  "emailerCampaignIds": null,
  "directDialStatus": null,
  "directDialEnrichmentFailedAt": null,
  "emailStatus": verified,
  "emailSource": null,
  "accountId": 6658955877a2f20001c648ac,
  "lastActivityDate": null,
  "hubspotVid": null,
  "hubspotCompanyId": null,
  "crmId": null,
  "sanitizedPhone": +11235550158,
  "mergedCrmIds": null,
  "updatedAt": 2024-06-02T08:53:51.266Z,
  "queuedForCrmPush": null,
  "suggestedFromRuleEngineConfigId": null,
  "emailUnsubscribed": null,
  "labelIds": null,
  "hasPendingEmailArcgateRequest": false,
  "hasEmailArcgateRequest": false,
  "existenceLevel": invisible,
  "email": roy@apollo.io,
  "emailFromCustomer": true,
  "typedCustomFields": null,
  "customFieldErrors": null,
  "crmRecordUrl": null,
  "emailStatusUnavailableReason": null,
  "emailTrueStatus": Verified,
  "updatedEmailTrueStatus": false,
  "contactRuleConfigStatuses": null,
  "sourceDisplayName": Imported from CRM,
  "contactEmails": null,
  "timeZone": America/Los_Angeles,
  "phoneNumbers": null,
  "accountPhoneNote": null,
  "freeDomain": false,
  "isLikelyToEngage": false,
} satisfies PeopleEnrichment200ResponsePersonContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleEnrichment200ResponsePersonContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


