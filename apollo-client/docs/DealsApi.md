# DealsApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDeal**](DealsApi.md#createdealoperation) | **POST** /opportunities | Create Deal |
| [**listAllDeals**](DealsApi.md#listalldeals) | **GET** /opportunities/search | List All Deals |
| [**listDealStages**](DealsApi.md#listdealstages) | **GET** /opportunity_stages | List Deal Stages |
| [**updateDeal**](DealsApi.md#updatedealoperation) | **PATCH** /opportunities/{opportunity_id} | Update Deal |
| [**viewDeal**](DealsApi.md#viewdeal) | **GET** /opportunities/{opportunity_id} | View Deal |



## createDeal

> CreateDeal200Response createDeal(createDealRequest)

Create Deal

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4415062467725-Deals-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Deals&lt;/a&gt; on Apollo help you track sales opportunities.&lt;br&gt;&lt;br&gt;Use the Create Deal endpoint to create new deals for an Apollo account.&lt;br&gt;&lt;br&gt;To update existing deals in your Apollo account, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-deal\&quot;&gt;Update Deal endpoint&lt;/a&gt; instead.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  DealsApi,
} from '';
import type { CreateDealOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // CreateDealRequest
    createDealRequest: ...,
  } satisfies CreateDealOperationRequest;

  try {
    const data = await api.createDeal(body);
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
| **createDealRequest** | [CreateDealRequest](CreateDealRequest.md) |  | |

### Return type

[**CreateDeal200Response**](CreateDeal200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAllDeals

> ListAllDeals200Response listAllDeals(sortByField, page, perPage)

List All Deals

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4415062467725-Deals-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Deals&lt;/a&gt; on Apollo help you track sales opportunities.&lt;br&gt;&lt;br&gt;Use the List All Deals endpoint to retrieve every deal that has been created for your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  DealsApi,
} from '';
import type { ListAllDealsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // string | Sort the tasks by 1 of the following options:    <ul> <li> `amount`: The largest deal values first. </li> <li> `is_closed`: Deals that have been closed first. </li> <li> `is_won`: Deals that have been won first. </li> </ul> (optional)
    sortByField: sortByField_example,
    // number | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: 56,
    // number | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: 56,
  } satisfies ListAllDealsRequest;

  try {
    const data = await api.listAllDeals(body);
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
| **sortByField** | `string` | Sort the tasks by 1 of the following options:    &lt;ul&gt; &lt;li&gt; &#x60;amount&#x60;: The largest deal values first. &lt;/li&gt; &lt;li&gt; &#x60;is_closed&#x60;: Deals that have been closed first. &lt;/li&gt; &lt;li&gt; &#x60;is_won&#x60;: Deals that have been won first. &lt;/li&gt; &lt;/ul&gt; | [Optional] [Defaults to `undefined`] |
| **page** | `number` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**ListAllDeals200Response**](ListAllDeals200Response.md)

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
| **403** | 403 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDealStages

> ListDealStages200Response listDealStages()

List Deal Stages

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4415062467725-Deals-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Deals&lt;/a&gt; on Apollo help you track sales opportunities.&lt;br&gt;&lt;br&gt;Use the List Deal Stages endpoint to retrieve information about every deal stage that\&#39;s available in your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;The &#x60;id&#x60; value for each deal stage can be used to set the stage when &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-deal\&quot;&gt;creating a deal&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-deal\&quot;&gt;updating a deal&lt;/a&gt; via the Apollo API.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  DealsApi,
} from '';
import type { ListDealStagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  try {
    const data = await api.listDealStages();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListDealStages200Response**](ListDealStages200Response.md)

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
| **403** | 403 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDeal

> UpdateDeal200Response updateDeal(opportunityId, updateDealRequest)

Update Deal

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4415062467725-Deals-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Deals&lt;/a&gt; on Apollo help you track sales opportunities.&lt;br&gt;&lt;br&gt;Use the Update Deal endpoint to update the details of existing deals within your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;To create new deals in your Apollo account, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-deal\&quot;&gt;Create Deal endpoint&lt;/a&gt; instead.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  DealsApi,
} from '';
import type { UpdateDealOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // string | The ID for the deal you want to update. <br><br>Each deal in the Apollo database is assigned a unique ID. To find deal IDs, call the <a href=\"https://docs.apollo.io/reference/list-all-deals\" target=\"_blank\">List All Deals endpoint</a> and identify the value for `id` for the desired deal. <br><br>Example: `66e09ea8e3cfcf01b2208ec7`
    opportunityId: opportunityId_example,
    // UpdateDealRequest
    updateDealRequest: ...,
  } satisfies UpdateDealOperationRequest;

  try {
    const data = await api.updateDeal(body);
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
| **opportunityId** | `string` | The ID for the deal you want to update. &lt;br&gt;&lt;br&gt;Each deal in the Apollo database is assigned a unique ID. To find deal IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/list-all-deals\&quot; target&#x3D;\&quot;_blank\&quot;&gt;List All Deals endpoint&lt;/a&gt; and identify the value for &#x60;id&#x60; for the desired deal. &lt;br&gt;&lt;br&gt;Example: &#x60;66e09ea8e3cfcf01b2208ec7&#x60; | [Defaults to `undefined`] |
| **updateDealRequest** | [UpdateDealRequest](UpdateDealRequest.md) |  | |

### Return type

[**UpdateDeal200Response**](UpdateDeal200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## viewDeal

> ViewDeal200Response viewDeal(opportunityId)

View Deal

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4415062467725-Deals-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Deals&lt;/a&gt; on Apollo help you track sales opportunities.&lt;br&gt;&lt;br&gt;Use the View Deal endpoint to retrieve complete details about a deal within your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;Deal information can include the ID of the deal owner, the monetary value of the deal, the deal stage, and general details about the account.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  DealsApi,
} from '';
import type { ViewDealRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DealsApi(config);

  const body = {
    // string | The ID for the deal you want to view. <br><br>Each deal in the Apollo database is assigned a unique ID. To find deal IDs, call the <a href=\"https://docs.apollo.io/reference/list-all-deals\" target=\"_blank\">List All Deals endpoint</a> and identify the value for `id` for the desired deal. <br><br>Example: `66e09ea8e3cfcf01b2208ec7`
    opportunityId: opportunityId_example,
  } satisfies ViewDealRequest;

  try {
    const data = await api.viewDeal(body);
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
| **opportunityId** | `string` | The ID for the deal you want to view. &lt;br&gt;&lt;br&gt;Each deal in the Apollo database is assigned a unique ID. To find deal IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/list-all-deals\&quot; target&#x3D;\&quot;_blank\&quot;&gt;List All Deals endpoint&lt;/a&gt; and identify the value for &#x60;id&#x60; for the desired deal. &lt;br&gt;&lt;br&gt;Example: &#x60;66e09ea8e3cfcf01b2208ec7&#x60; | [Defaults to `undefined`] |

### Return type

[**ViewDeal200Response**](ViewDeal200Response.md)

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
| **403** | 403 |  -  |
| **404** | 404 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

