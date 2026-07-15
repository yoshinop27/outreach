
# SearchForContacts200ResponseContactsInner


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
`presentRawAddress` | any
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
`sanitizedPhone` | any
`mergedCrmIds` | any
`updatedAt` | string
`queuedForCrmPush` | boolean
`suggestedFromRuleEngineConfigId` | any
`emailUnsubscribed` | any
`labelIds` | Array&lt;any&gt;
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
`account` | [SearchForContacts200ResponseContactsInnerAccount](SearchForContacts200ResponseContactsInnerAccount.md)
`contactEmails` | Array&lt;any&gt;
`organization` | [SearchForContacts200ResponseContactsInnerOrganization](SearchForContacts200ResponseContactsInnerOrganization.md)
`intentStrength` | any
`showIntent` | boolean
`phoneNumbers` | Array&lt;any&gt;
`accountPhoneNote` | any
`freeDomain` | boolean
`isLikelyToEngage` | boolean
`emailDomainCatchall` | boolean
`contactJobChangeEvent` | any

## Example

```typescript
import type { SearchForContacts200ResponseContactsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "contactRoles": null,
  "id": 66e3726977d36c03f2c30afc,
  "firstName": Walt,
  "lastName": Whitman,
  "name": Walt Whitman,
  "linkedinUrl": null,
  "title": Associate Writer,
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
  "presentRawAddress": null,
  "linkedinUid": null,
  "extrapolatedEmailConfidence": null,
  "salesforceId": null,
  "salesforceLeadId": null,
  "salesforceContactId": null,
  "salesforceAccountId": null,
  "crmOwnerId": null,
  "createdAt": 2024-09-12T22:59:53.423Z,
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
  "sanitizedPhone": null,
  "mergedCrmIds": null,
  "updatedAt": 2024-09-12T23:00:41.194Z,
  "queuedForCrmPush": false,
  "suggestedFromRuleEngineConfigId": null,
  "emailUnsubscribed": null,
  "labelIds": null,
  "hasPendingEmailArcgateRequest": false,
  "hasEmailArcgateRequest": false,
  "existenceLevel": full,
  "email": wwhitman@apollo.io,
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
  "account": null,
  "contactEmails": null,
  "organization": null,
  "intentStrength": null,
  "showIntent": false,
  "phoneNumbers": null,
  "accountPhoneNote": null,
  "freeDomain": false,
  "isLikelyToEngage": false,
  "emailDomainCatchall": false,
  "contactJobChangeEvent": null,
} satisfies SearchForContacts200ResponseContactsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchForContacts200ResponseContactsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


