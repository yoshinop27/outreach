
# SyncReportRequest


## Properties

Name | Type
------------ | -------------
`metrics` | [Array&lt;SyncReportRequestMetricsInner&gt;](SyncReportRequestMetricsInner.md)
`groupBy` | [Array&lt;SyncReportRequestGroupByInner&gt;](SyncReportRequestGroupByInner.md)
`pivotGroupBy` | [Array&lt;SyncReportRequestGroupByInner&gt;](SyncReportRequestGroupByInner.md)
`sorts` | [Array&lt;SyncReportRequestSortsInner&gt;](SyncReportRequestSortsInner.md)
`filters` | [SyncReportRequestFilters](SyncReportRequestFilters.md)
`groupByTotalsSelected` | boolean
`pivotGroupByTotalsSelected` | boolean
`dateRanges` | [Array&lt;SyncReportRequestDateRangesInner&gt;](SyncReportRequestDateRangesInner.md)
`skipGroupByValues` | Array&lt;string&gt;
`minRatioDenominator` | number

## Example

```typescript
import type { SyncReportRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "metrics": null,
  "groupBy": null,
  "pivotGroupBy": null,
  "sorts": null,
  "filters": null,
  "groupByTotalsSelected": null,
  "pivotGroupByTotalsSelected": null,
  "dateRanges": null,
  "skipGroupByValues": null,
  "minRatioDenominator": null,
} satisfies SyncReportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SyncReportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


