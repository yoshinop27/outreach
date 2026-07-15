
# GetCurrentUserProfile200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`teamId` | string
`firstName` | string
`lastName` | string
`title` | string
`email` | string
`numCreditsRemaining` | number
`effectiveNumLeadCredits` | number
`numLeadCreditsUsed` | number
`effectiveNumDirectDialCredits` | number
`numDirectDialCreditsUsed` | number
`effectiveNumExportCredits` | number
`numExportCreditsUsed` | number
`effectiveNumAiCredits` | number
`numAiCreditsUsed` | number
`effectiveNumPowerUpCredits` | number
`numPowerUpCreditsUsed` | number
`totalUnifiedCreditsUsed` | number

## Example

```typescript
import type { GetCurrentUserProfile200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66c8db577ed7f201b25c0eef,
  "teamId": 6095a710bd01d100a506d4ac,
  "firstName": John,
  "lastName": Doe,
  "title": Developer,
  "email": john.doe@example.com,
  "numCreditsRemaining": 9500,
  "effectiveNumLeadCredits": 10000,
  "numLeadCreditsUsed": 500,
  "effectiveNumDirectDialCredits": 1000,
  "numDirectDialCreditsUsed": 120,
  "effectiveNumExportCredits": 5000,
  "numExportCreditsUsed": 250,
  "effectiveNumAiCredits": 2000,
  "numAiCreditsUsed": 75,
  "effectiveNumPowerUpCredits": 1000,
  "numPowerUpCreditsUsed": 40,
  "totalUnifiedCreditsUsed": 910,
} satisfies GetCurrentUserProfile200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCurrentUserProfile200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


