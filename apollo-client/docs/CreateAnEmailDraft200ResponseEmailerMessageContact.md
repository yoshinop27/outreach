
# CreateAnEmailDraft200ResponseEmailerMessageContact


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
`accountId` | string
`ownerId` | string
`emailStatus` | string

## Example

```typescript
import type { CreateAnEmailDraft200ResponseEmailerMessageContact } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e34b81740c50074e3d1bd4,
  "firstName": Ava,
  "lastName": Ruiz,
  "name": Ava Ruiz,
  "email": ava.ruiz@sumware.com,
  "title": Founder & CEO,
  "organizationName": Sumware Software,
  "accountId": 612f9d6cd26c290001d9bda0,
  "ownerId": 66302798d03b9601c7934ebf,
  "emailStatus": verified,
} satisfies CreateAnEmailDraft200ResponseEmailerMessageContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAnEmailDraft200ResponseEmailerMessageContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


