
# CreateAContact200ResponseContact


## Properties

Name | Type
------------ | -------------
`contactRoles` | Array&lt;any&gt;
`id` | string
`firstName` | string
`lastName` | string
`name` | string
`linkedinUrl` | any
`title` | string
`contactStageId` | string
`ownerId` | string
`creatorId` | string
`personId` | any
`emailNeedsTickling` | any
`organizationName` | string
`source` | string
`originalSource` | string
`organizationId` | string
`headline` | any
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
`queuedForCrmPush` | boolean
`suggestedFromRuleEngineConfigId` | any
`emailUnsubscribed` | any
`labelIds` | Array&lt;string&gt;
`hasPendingEmailArcgateRequest` | boolean
`hasEmailArcgateRequest` | boolean
`existenceLevel` | string
`email` | string
`emailFromCustomer` | boolean
`typedCustomFields` | object
`customFieldErrors` | object
`crmRecordUrl` | any
`emailStatusUnavailableReason` | any
`emailTrueStatus` | string
`updatedEmailTrueStatus` | boolean
`contactRuleConfigStatuses` | Array&lt;any&gt;
`sourceDisplayName` | string
`twitterUrl` | any
`contactCampaignStatuses` | [Array&lt;CreateAContact200ResponseContactContactCampaignStatusesInner&gt;](CreateAContact200ResponseContactContactCampaignStatusesInner.md)
`contactEmails` | Array&lt;any&gt;
`nextContactId` | any
`timeZone` | string
`city` | string
`state` | string
`country` | string
`intentStrength` | any
`showIntent` | boolean
`phoneNumbers` | [Array&lt;CreateAContact200ResponseContactPhoneNumbersInner&gt;](CreateAContact200ResponseContactPhoneNumbersInner.md)
`accountPhoneNote` | any
`freeDomain` | boolean
`isLikelyToEngage` | boolean
`emailDomainCatchall` | boolean

## Example

```typescript
import type { CreateAContact200ResponseContact } from ''

// TODO: Update the object below with actual values
const example = {
  "contactRoles": null,
  "id": 66e34b81740c50074e3d1bd4,
  "firstName": Fyodor,
  "lastName": Dostoevsky,
  "name": Fyodor Dostoevsky,
  "linkedinUrl": null,
  "title": Chief Fiction Writer,
  "contactStageId": 6095a710bd01d100a506d4ae,
  "ownerId": 60affe7d6e270a00f5db6fe4,
  "creatorId": 60affe7d6e270a00f5db6fe4,
  "personId": null,
  "emailNeedsTickling": null,
  "organizationName": Apollo.io,
  "source": api,
  "originalSource": api,
  "organizationId": 5e66b6381e05b4008c8331b8,
  "headline": null,
  "photoUrl": null,
  "presentRawAddress": St. Petersburg, Russia,
  "linkedinUid": null,
  "extrapolatedEmailConfidence": null,
  "salesforceId": null,
  "salesforceLeadId": null,
  "salesforceContactId": null,
  "salesforceAccountId": null,
  "crmOwnerId": null,
  "createdAt": 2024-09-12T20:13:53.207Z,
  "emailerCampaignIds": null,
  "directDialStatus": null,
  "directDialEnrichmentFailedAt": null,
  "emailStatus": verified,
  "emailSource": null,
  "accountId": 63f53afe4ceeca00016bdd2f,
  "lastActivityDate": null,
  "hubspotVid": null,
  "hubspotCompanyId": null,
  "crmId": null,
  "sanitizedPhone": +15555550149,
  "mergedCrmIds": null,
  "updatedAt": 2024-09-12T20:13:53.331Z,
  "queuedForCrmPush": true,
  "suggestedFromRuleEngineConfigId": null,
  "emailUnsubscribed": null,
  "labelIds": null,
  "hasPendingEmailArcgateRequest": false,
  "hasEmailArcgateRequest": false,
  "existenceLevel": full,
  "email": fyodo@apollo.io,
  "emailFromCustomer": true,
  "typedCustomFields": null,
  "customFieldErrors": null,
  "crmRecordUrl": null,
  "emailStatusUnavailableReason": null,
  "emailTrueStatus": User Managed,
  "updatedEmailTrueStatus": true,
  "contactRuleConfigStatuses": null,
  "sourceDisplayName": Created from API,
  "twitterUrl": null,
  "contactCampaignStatuses": null,
  "contactEmails": null,
  "nextContactId": null,
  "timeZone": Asia/Krasnoyarsk,
  "city": Saint Petersburg,
  "state": Saint Petersburg,
  "country": Russia,
  "intentStrength": null,
  "showIntent": false,
  "phoneNumbers": null,
  "accountPhoneNote": null,
  "freeDomain": false,
  "isLikelyToEngage": false,
  "emailDomainCatchall": false,
} satisfies CreateAContact200ResponseContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAContact200ResponseContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


