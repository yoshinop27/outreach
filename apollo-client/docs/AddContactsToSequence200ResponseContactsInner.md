
# AddContactsToSequence200ResponseContactsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastName` | string
`name` | string
`email` | string
`title` | string
`organizationName` | string
`linkedinUrl` | string
`contactStageId` | string
`ownerId` | string
`creatorId` | string
`personId` | string
`organizationId` | string
`accountId` | string
`source` | string
`originalSource` | string
`createdAt` | Date
`updatedAt` | Date
`emailerCampaignIds` | Array&lt;string&gt;
`emailStatus` | string
`city` | string
`country` | string
`state` | string
`sanitizedPhone` | string
`timeZone` | string
`contactCampaignStatuses` | [Array&lt;AddContactsToSequence200ResponseContactsInnerContactCampaignStatusesInner&gt;](AddContactsToSequence200ResponseContactsInnerContactCampaignStatusesInner.md)
`contactEmails` | [Array&lt;AddContactsToSequence200ResponseContactsInnerContactEmailsInner&gt;](AddContactsToSequence200ResponseContactsInnerContactEmailsInner.md)
`phoneNumbers` | [Array&lt;AddContactsToSequence200ResponseContactsInnerPhoneNumbersInner&gt;](AddContactsToSequence200ResponseContactsInnerPhoneNumbersInner.md)
`labelIds` | Array&lt;string&gt;
`typedCustomFields` | object
`freeDomain` | boolean
`emailDomainCatchall` | boolean

## Example

```typescript
import type { AddContactsToSequence200ResponseContactsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": null,
  "lastName": null,
  "name": null,
  "email": null,
  "title": null,
  "organizationName": null,
  "linkedinUrl": null,
  "contactStageId": null,
  "ownerId": null,
  "creatorId": null,
  "personId": null,
  "organizationId": null,
  "accountId": null,
  "source": null,
  "originalSource": null,
  "createdAt": null,
  "updatedAt": null,
  "emailerCampaignIds": null,
  "emailStatus": null,
  "city": null,
  "country": null,
  "state": null,
  "sanitizedPhone": null,
  "timeZone": null,
  "contactCampaignStatuses": null,
  "contactEmails": null,
  "phoneNumbers": null,
  "labelIds": null,
  "typedCustomFields": null,
  "freeDomain": null,
  "emailDomainCatchall": null,
} satisfies AddContactsToSequence200ResponseContactsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddContactsToSequence200ResponseContactsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


