
# SyncReportRequestFilters

Key/value filter map to narrow the result set. Pass an empty object <code>{}</code> for no filters. Common filter keys are documented in the <code>properties</code> below; additional dimension-based filters may also be passed using the same key names as <code>group_by[].name</code> values. Refer to the <a href=\"https://docs.apollo.io/reference/sync-report-metrics\" target=\"_blank\">Metrics and Dimensions Reference</a> for a complete list.

## Properties

Name | Type
------------ | -------------
`smartUserId` | Array&lt;string&gt;
`smartSubteamId` | Array&lt;string&gt;
`emailerCampaignIds` | Array&lt;string&gt;
`contactStageIds` | Array&lt;string&gt;
`accountStageIds` | Array&lt;string&gt;
`opportunityStageIds` | Array&lt;string&gt;
`emailAccountIds` | Array&lt;string&gt;
`smartDatetimeRange` | [SyncReportRequestFiltersSmartDatetimeRange](SyncReportRequestFiltersSmartDatetimeRange.md)

## Example

```typescript
import type { SyncReportRequestFilters } from ''

// TODO: Update the object below with actual values
const example = {
  "smartUserId": null,
  "smartSubteamId": null,
  "emailerCampaignIds": null,
  "contactStageIds": null,
  "accountStageIds": null,
  "opportunityStageIds": null,
  "emailAccountIds": null,
  "smartDatetimeRange": null,
} satisfies SyncReportRequestFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SyncReportRequestFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


