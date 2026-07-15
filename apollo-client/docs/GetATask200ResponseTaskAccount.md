
# GetATask200ResponseTaskAccount

The account associated with this task, when the task has one. Includes the same fields as the <a href=\"https://docs.apollo.io/reference/view-an-account\">View an Account</a> endpoint\'s response, plus `linkedin_uid` and `account_queues`.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`websiteUrl` | string
`domain` | string
`linkedinUrl` | string
`linkedinUid` | string
`phone` | string
`phoneStatus` | string
`ownerId` | string
`accountStageId` | any
`organizationId` | string
`industry` | string
`estimatedNumEmployees` | number
`labelIds` | Array&lt;any&gt;
`typedCustomFields` | object
`accountQueues` | Array&lt;any&gt;
`createdAt` | string

## Example

```typescript
import type { GetATask200ResponseTaskAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 612f9d6cd26c290001d9bda0,
  "name": Example Corp,
  "websiteUrl": http://www.example.com,
  "domain": example.com,
  "linkedinUrl": https://www.linkedin.com/company/example-corp,
  "linkedinUid": 18511550,
  "phone": +1 (555) 555-0164,
  "phoneStatus": no_status,
  "ownerId": 66302798d03b9601c7934ebf,
  "accountStageId": null,
  "organizationId": 5fc93db64c38d300d6aa24e6,
  "industry": information technology & services,
  "estimatedNumEmployees": 910,
  "labelIds": null,
  "typedCustomFields": null,
  "accountQueues": null,
  "createdAt": 2021-09-01T15:34:04.371Z,
} satisfies GetATask200ResponseTaskAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetATask200ResponseTaskAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


