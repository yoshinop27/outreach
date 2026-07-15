
# BulkCreateContactsRequestContactsInner


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`email` | string
`title` | string
`primaryTitle` | string
`organizationName` | string
`phone` | string
`presentRawAddress` | string
`linkedinUrl` | string
`facebookUrl` | string
`twitterUrl` | string
`photoUrl` | string
`accountId` | string
`organizationId` | string
`contactStageId` | string
`salesforceId` | string
`hubspotId` | string
`salesforceLeadId` | string
`salesforceContactId` | string
`salesforceAccountId` | string
`outreachId` | string
`salesloftId` | string
`phoneStatusCd` | string
`typedCustomFields` | { [key: string]: string; }
`contactEmails` | [Array&lt;BulkCreateContactsRequestContactsInnerContactEmailsInner&gt;](BulkCreateContactsRequestContactsInnerContactEmailsInner.md)
`phoneNumbers` | [Array&lt;BulkCreateContactsRequestContactsInnerPhoneNumbersInner&gt;](BulkCreateContactsRequestContactsInnerPhoneNumbersInner.md)
`contactRoleTypeIds` | Array&lt;string&gt;

## Example

```typescript
import type { BulkCreateContactsRequestContactsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "firstName": John,
  "lastName": Doe,
  "email": john.doe@example.com,
  "title": Senior Manager,
  "primaryTitle": VP of Sales,
  "organizationName": Acme Corporation,
  "phone": +1-555-0135,
  "presentRawAddress": San Francisco, CA,
  "linkedinUrl": https://www.linkedin.com/in/john-doe-3f9a7c21,
  "facebookUrl": https://www.facebook.com/johndoe,
  "twitterUrl": https://twitter.com/johndoe,
  "photoUrl": https://example.com/photo.jpg,
  "accountId": 507f1f77bcf86cd799439011,
  "organizationId": 507f1f77bcf86cd799439012,
  "contactStageId": 507f1f77bcf86cd799439014,
  "salesforceId": 003xx000004TmiQAAS,
  "hubspotId": 12345678,
  "salesforceLeadId": 00Qxx000001abcDEFG,
  "salesforceContactId": 003xx000004TmiQAAS,
  "salesforceAccountId": 001pJNj9pix2idKsfj,
  "outreachId": 98765,
  "salesloftId": 54321,
  "phoneStatusCd": null,
  "typedCustomFields": {"60c39ed82bd02f01154c470a":"2025-08-07"},
  "contactEmails": null,
  "phoneNumbers": null,
  "contactRoleTypeIds": ["507f1f77bcf86cd799439020"],
} satisfies BulkCreateContactsRequestContactsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateContactsRequestContactsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


