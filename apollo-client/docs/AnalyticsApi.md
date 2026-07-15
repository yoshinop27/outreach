# AnalyticsApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**syncReport**](AnalyticsApi.md#syncreportoperation) | **POST** /reports/sync_report | Query Analytics Report |



## syncReport

> SyncReport200Response syncReport(syncReportRequest)

Query Analytics Report

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the Query Analytics Report endpoint to programmatically query &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/33574373762317-Analytics-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Apollo analytics&lt;/a&gt; and retrieve aggregated sales activity data for your team.&lt;br&gt;&lt;br&gt;This endpoint accepts a flexible payload specifying which metrics to measure, how to group and filter results, and which date range to apply — returning the same data that powers Apollo\&#39;s built-in Analytics dashboards. &lt;br&gt;&lt;br&gt;Three query modes are supported: flat totals (no &lt;code&gt;group_by&lt;/code&gt;), grouped by one dimension such as user or sequence, and pivot cross-tab (one &lt;code&gt;group_by&lt;/code&gt; dimension as rows + one &lt;code&gt;pivot_group_by&lt;/code&gt; dimension as columns). Each array supports a maximum of one entry.&lt;br&gt;&lt;br&gt; &lt;strong&gt;Authentication:&lt;/strong&gt; Requires an Apollo API key with access to the &lt;code&gt;api/v1/reports/sync_report&lt;/code&gt; API. When creating or editing an API key in Apollo Settings, open the &lt;strong&gt;APIs&lt;/strong&gt; tab and select &lt;code&gt;api/v1/reports/sync_report&lt;/code&gt; from the list. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; for detailed instructions.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Tip:&lt;/strong&gt; The easiest way to discover valid metric and group_by combinations is to build a report interactively at &lt;a href&#x3D;\&quot;https://app.apollo.io/#/analytics/reports/new\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Apollo Analytics → Start from scratch&lt;/a&gt;, then replicate that configuration in your API request.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '';
import type { SyncReportOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // SyncReportRequest
    syncReportRequest: {"metrics":[{"value":"num_emails_sent","smart_datetime_reference":"smart_datetime_range","smart_user_id_reference":"smart_user_id"},{"value":"num_emails_opened","smart_datetime_reference":"smart_datetime_range","smart_user_id_reference":"smart_user_id"},{"value":"percent_emails_opened_tracked","smart_datetime_reference":"smart_datetime_range","smart_user_id_reference":"smart_user_id"}],"group_by":[],"pivot_group_by":[],"sorts":[],"filters":{},"group_by_totals_selected":false,"pivot_group_by_totals_selected":false,"date_ranges":[{"modality":"last_30_days"}]},
  } satisfies SyncReportOperationRequest;

  try {
    const data = await api.syncReport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **syncReportRequest** | [SyncReportRequest](SyncReportRequest.md) |  | |

### Return type

[**SyncReport200Response**](SyncReport200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **400** | 400 |  -  |
| **401** | 401 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

