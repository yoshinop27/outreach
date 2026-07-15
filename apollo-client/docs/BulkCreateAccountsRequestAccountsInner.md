
# BulkCreateAccountsRequestAccountsInner


## Properties

Name | Type
------------ | -------------
`name` | string
`domain` | string
`ownerId` | string
`phone` | string
`phoneStatusCd` | string
`rawAddress` | string
`linkedinUrl` | string
`facebookUrl` | string
`twitterUrl` | string
`salesforceId` | string
`hubspotId` | string
`mergedCrmIds` | Array&lt;string&gt;
`organizationId` | string
`parentAccountId` | string
`accountStageId` | string
`typedCustomFields` | { [key: string]: string; }

## Example

```typescript
import type { BulkCreateAccountsRequestAccountsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "name": Acme Corporation,
  "domain": acme.com,
  "ownerId": 507f1f77bcf86cd799439013,
  "phone": +1-555-0135,
  "phoneStatusCd": null,
  "rawAddress": 123 Main St, San Francisco, CA 94105,
  "linkedinUrl": https://linkedin.com/company/acme,
  "facebookUrl": https://facebook.com/acme,
  "twitterUrl": https://twitter.com/acme,
  "salesforceId": 001pJNj9pix2idKsfj,
  "hubspotId": 12345678,
  "mergedCrmIds": null,
  "organizationId": 507f1f77bcf86cd799439012,
  "parentAccountId": 507f1f77bcf86cd799439016,
  "accountStageId": 507f1f77bcf86cd799439014,
  "typedCustomFields": {"507f1f77bcf86cd799439020":"High Value","507f1f77bcf86cd799439021":"Q4 2025"},
} satisfies BulkCreateAccountsRequestAccountsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkCreateAccountsRequestAccountsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


