# AccountsApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkCreateAccounts**](AccountsApi.md#bulkcreateaccountsoperation) | **POST** /accounts/bulk_create | Bulk Create Accounts |
| [**bulkUpdateAccounts**](AccountsApi.md#bulkupdateaccountsoperation) | **POST** /accounts/bulk_update | Bulk Update Accounts |
| [**createAnAccount**](AccountsApi.md#createanaccountoperation) | **POST** /accounts | Create an Account |
| [**getAccountsid**](AccountsApi.md#getaccountsid) | **GET** /accounts/{id} | View an Account |
| [**listAccountStages**](AccountsApi.md#listaccountstages) | **GET** /account_stages | List Account Stages |
| [**searchForAccounts**](AccountsApi.md#searchforaccountsoperation) | **POST** /accounts/search | Search for Accounts |
| [**updateAccountOwnership**](AccountsApi.md#updateaccountownership) | **POST** /accounts/update_owners | Update Account Owner for Multiple Accounts |
| [**updateAnAccount**](AccountsApi.md#updateanaccountoperation) | **PATCH** /accounts/{account_id} | Update an Account |



## bulkCreateAccounts

> BulkCreateAccounts200Response bulkCreateAccounts(bulkCreateAccountsRequest)

Bulk Create Accounts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  An &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995865049229-View-and-Edit-Accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;account&lt;/a&gt; is a company saved in Apollo.&lt;br&gt;&lt;br&gt;Use the bulk create accounts endpoint to create up to one hundred accounts in a single API request. This endpoint supports intelligent deduplication and returns separate arrays for newly created and existing accounts. &lt;br&gt;&lt;br&gt;**Important**: This endpoint creates new accounts but doesn\&#39;t update existing ones. Existing accounts that match the criteria are returned in the &lt;code&gt;existing_accounts&lt;/code&gt; array without modification. &lt;br&gt;&lt;br&gt;To update existing accounts, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/bulk-update-accounts\&quot;&gt;Bulk Update Accounts endpoint&lt;/a&gt;.

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '';
import type { BulkCreateAccountsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountsApi(config);

  const body = {
    // BulkCreateAccountsRequest
    bulkCreateAccountsRequest: {"accounts":[{"name":"Acme Corporation","domain":"acme.com","phone":"+1-555-0135"},{"name":"TechStart Inc","domain":"example.com","linkedin_url":"https://linkedin.com/company/techstart"}]},
  } satisfies BulkCreateAccountsOperationRequest;

  try {
    const data = await api.bulkCreateAccounts(body);
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
| **bulkCreateAccountsRequest** | [BulkCreateAccountsRequest](BulkCreateAccountsRequest.md) |  | |

### Return type

[**BulkCreateAccounts200Response**](BulkCreateAccounts200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 - Successful bulk create operation |  -  |
| **401** | 401 - Unauthorized |  -  |
| **422** | 422 - Unprocessable Entity |  -  |
| **429** | 429 - Too Many Requests |  -  |
| **500** | 500 - Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkUpdateAccounts

> BulkUpdateAccounts200Response bulkUpdateAccounts(bulkUpdateAccountsRequest)

Bulk Update Accounts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  An &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995865049229-View-and-Edit-Accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;account&lt;/a&gt; is a company saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Bulk Update Accounts endpoint to simultaneously update multiple accounts in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;This endpoint allows you to update common fields across multiple accounts efficiently, such as account stages, owners, names, and custom fields. &lt;br&gt;&lt;br&gt;You can update up to 1,000 accounts per request.&lt;br&gt;&lt;br&gt;&lt;b&gt;Important:&lt;/b&gt; Asynchronous processing (async parameter) is only supported when using &lt;code&gt;account_ids&lt;/code&gt; to apply the same updates to all accounts. If you use async with &lt;code&gt;account_attributes&lt;/code&gt; (individual updates per account), the request fails with a 422 error.

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '';
import type { BulkUpdateAccountsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountsApi(config);

  const body = {
    // BulkUpdateAccountsRequest
    bulkUpdateAccountsRequest: ...,
  } satisfies BulkUpdateAccountsOperationRequest;

  try {
    const data = await api.bulkUpdateAccounts(body);
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
| **bulkUpdateAccountsRequest** | [BulkUpdateAccountsRequest](BulkUpdateAccountsRequest.md) |  | |

### Return type

[**BulkUpdateAccounts200Response**](BulkUpdateAccounts200Response.md)

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


## createAnAccount

> CreateAnAccount200Response createAnAccount(createAnAccountRequest)

Create an Account

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  An &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995865049229-View-and-Edit-Accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;account&lt;/a&gt; is a company saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Create an Account endpoint to add a new account to your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;Apollo doesn\&#39;t apply deduplication processes when you create a new account via the API. If your entry has the same name, domain, or other details as an existing account, Apollo creates a new account instead of updating the existing account. To update an existing account, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-an-account\&quot;&gt;Update an Account endpoint&lt;/a&gt; instead.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '';
import type { CreateAnAccountOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountsApi(config);

  const body = {
    // CreateAnAccountRequest
    createAnAccountRequest: ...,
  } satisfies CreateAnAccountOperationRequest;

  try {
    const data = await api.createAnAccount(body);
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
| **createAnAccountRequest** | [CreateAnAccountRequest](CreateAnAccountRequest.md) |  | |

### Return type

[**CreateAnAccount200Response**](CreateAnAccount200Response.md)

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


## getAccountsid

> getAccountsid(id)

View an Account

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  An &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995865049229-View-and-Edit-Accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;account&lt;/a&gt; is a company saved in Apollo.&lt;br&gt;&lt;br&gt;Use the View an Account endpoint to retrieve details for an existing account.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create API keys&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '';
import type { GetAccountsidRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountsApi(config);

  const body = {
    // string | The Apollo ID for the account that you want to retrieve. <br><br>To find account IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-accounts#/\" target=\"_blank\">Search for Accounts endpoint</a> and identify the `id` value for the account. <br><br>Example: `6518c6184f20350001a0b9c0`
    id: id_example,
  } satisfies GetAccountsidRequest;

  try {
    const data = await api.getAccountsid(body);
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
| **id** | `string` | The Apollo ID for the account that you want to retrieve. &lt;br&gt;&lt;br&gt;To find account IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-accounts#/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Accounts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the account. &lt;br&gt;&lt;br&gt;Example: &#x60;6518c6184f20350001a0b9c0&#x60; | [Defaults to `&#39;&#39;`] |

### Return type

`void` (Empty response body)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAccountStages

> ListAccountStages200Response listAccountStages()

List Account Stages

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4410623601165-Contact-and-Account-Stages-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Account stages&lt;/a&gt; help you track progress on sales and marketing pipelines.&lt;br&gt;&lt;br&gt;Use the List Accounts Stages endpoint to retrieve the IDs for the available account stages in your team\&#39;s Apollo account. This endpoint doesn\&#39;t require parameters. &lt;br&gt;&lt;br&gt;Account stage IDs can be used to &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-an-account\&quot;&gt;update individual accounts&lt;/a&gt; and &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/bulk-update-accounts\&quot;&gt;update the account stages for multiple accounts&lt;/a&gt; via Apollo API. &lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '';
import type { ListAccountStagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountsApi(config);

  try {
    const data = await api.listAccountStages();
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

[**ListAccountStages200Response**](ListAccountStages200Response.md)

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


## searchForAccounts

> SearchForAccounts200Response searchForAccounts(searchForAccountsRequest)

Search for Accounts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).   An &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995865049229-View-and-Edit-Accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;account&lt;/a&gt; is a company saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Search for Accounts endpoint to search for an account that has been saved to Apollo.&lt;br&gt;&lt;br&gt;This endpoint only returns accounts in the search results. To search for companies in Apollo, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/organization-search\&quot;&gt;Organization Search endpoint&lt;/a&gt;.&lt;br&gt;&lt;br&gt;To protect Apollo\&#39;s performance for all users, this endpoint has a display limit of 50,000 records (100 records per page, up to 500 pages). Add more filters to narrow your search results as much as possible.

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '';
import type { SearchForAccountsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountsApi(config);

  const body = {
    // SearchForAccountsRequest
    searchForAccountsRequest: ...,
  } satisfies SearchForAccountsOperationRequest;

  try {
    const data = await api.searchForAccounts(body);
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
| **searchForAccountsRequest** | [SearchForAccountsRequest](SearchForAccountsRequest.md) |  | |

### Return type

[**SearchForAccounts200Response**](SearchForAccounts200Response.md)

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


## updateAccountOwnership

> UpdateAccountOwnership200Response updateAccountOwnership(accountIds, ownerId)

Update Account Owner for Multiple Accounts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5631686093069-Edit-a-Contact-or-Account-Owner\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Account owners&lt;/a&gt; manage saved accounts in Apollo.&lt;br&gt;&lt;br&gt;Use the Update Account Owner for Multiple Accounts endpoint to assign multiple accounts to a different user in your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;To update more than the account owner, such as domains or phone numbers, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-an-account\&quot;&gt;Update an Account endpoint&lt;/a&gt; instead. &lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '';
import type { UpdateAccountOwnershipRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountsApi(config);

  const body = {
    // Array<string> | The Apollo IDs for the account that you want to assign to an owner. <br><br>To find account IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-accounts\" target=\"_blank\">Search for Accounts endpoint</a> and identify the `id` value for the account. <br><br>Example: `66e9abf95ac32901b20d1a0d`
    accountIds: ...,
    // string | The ID for the account owner within your team\'s Apollo account. This user will be assigned ownership of the accounts. <br><br>Use the <a href=\"https://docs.apollo.io/reference/get-a-list-of-users\" target=\"_blank\">Get a List of Users endpoint</a> to retrieve IDs for all of the users within your Apollo account. <br><br>Example: `66302798d03b9601c7934ebf`
    ownerId: ownerId_example,
  } satisfies UpdateAccountOwnershipRequest;

  try {
    const data = await api.updateAccountOwnership(body);
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
| **accountIds** | `Array<string>` | The Apollo IDs for the account that you want to assign to an owner. &lt;br&gt;&lt;br&gt;To find account IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Accounts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the account. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9abf95ac32901b20d1a0d&#x60; | |
| **ownerId** | `string` | The ID for the account owner within your team\&#39;s Apollo account. This user will be assigned ownership of the accounts. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Users endpoint&lt;/a&gt; to retrieve IDs for all of the users within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;66302798d03b9601c7934ebf&#x60; | [Defaults to `undefined`] |

### Return type

[**UpdateAccountOwnership200Response**](UpdateAccountOwnership200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAnAccount

> UpdateAnAccount200Response updateAnAccount(accountId, updateAnAccountRequest)

Update an Account

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).   An &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995865049229-View-and-Edit-Accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;account&lt;/a&gt; is a company saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Update an Account endpoint to update existing accounts in your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;To create a new account, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-an-account\&quot;&gt;Create an Account endpoint&lt;/a&gt; instead. To update the account stage for multiple accounts, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/bulk-update-accounts\&quot;&gt;Bulk Update Accounts endpoint&lt;/a&gt;.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '';
import type { UpdateAnAccountOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountsApi(config);

  const body = {
    // string | The Apollo ID for the account that you want to update. <br><br>To find account IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-accounts\" target=\"_blank\">Search for Accounts endpoint</a> and identify the `id` value for the contact. <br><br>Example: `66e9abf95ac32901b20d1a0d`
    accountId: accountId_example,
    // UpdateAnAccountRequest
    updateAnAccountRequest: ...,
  } satisfies UpdateAnAccountOperationRequest;

  try {
    const data = await api.updateAnAccount(body);
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
| **accountId** | `string` | The Apollo ID for the account that you want to update. &lt;br&gt;&lt;br&gt;To find account IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Accounts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the contact. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9abf95ac32901b20d1a0d&#x60; | [Defaults to `undefined`] |
| **updateAnAccountRequest** | [UpdateAnAccountRequest](UpdateAnAccountRequest.md) |  | |

### Return type

[**UpdateAnAccount200Response**](UpdateAnAccount200Response.md)

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

