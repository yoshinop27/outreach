# DefaultApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCurrentUserProfile**](DefaultApi.md#getcurrentuserprofile) | **GET** /users/api_profile | Get Current User Profile |



## getCurrentUserProfile

> GetCurrentUserProfile200Response getCurrentUserProfile(includeCreditUsage)

Get Current User Profile

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409130537101-Add-Manage-and-Deactivate-Users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Users&lt;/a&gt; are the people who use your Apollo workspace.&lt;br&gt;&lt;br&gt;Use the Get Current User Profile endpoint to retrieve the authenticated profile of the person who owns the API key being used.&lt;br&gt;&lt;br&gt;By default, the endpoint returns the user\&#39;s identity fields. Set the &#x60;include_credit_usage&#x60; query parameter to &#x60;true&#x60; to also return the user\&#39;s and team\&#39;s credit usage and remaining credit balances.&lt;br&gt;&lt;br&gt;If you call this endpoint without valid access credentials, you receive a &#x60;401&#x60; response.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetCurrentUserProfileRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // boolean | Set to `true` to include credit usage and remaining credit details (lead, direct dial, export, AI, and power-up credits) in the response. Accepts boolean (`true`/`false`) or string (`\"true\"`/`\"false\"`) values. Defaults to `false`. <br><br>Example: `true` (optional)
    includeCreditUsage: true,
  } satisfies GetCurrentUserProfileRequest;

  try {
    const data = await api.getCurrentUserProfile(body);
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
| **includeCreditUsage** | `boolean` | Set to &#x60;true&#x60; to include credit usage and remaining credit details (lead, direct dial, export, AI, and power-up credits) in the response. Accepts boolean (&#x60;true&#x60;/&#x60;false&#x60;) or string (&#x60;\&quot;true\&quot;&#x60;/&#x60;\&quot;false\&quot;&#x60;) values. Defaults to &#x60;false&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;true&#x60; | [Optional] [Defaults to `false`] |

### Return type

[**GetCurrentUserProfile200Response**](GetCurrentUserProfile200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

