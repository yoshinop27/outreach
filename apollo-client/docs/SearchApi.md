# SearchApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizationsid**](SearchApi.md#getorganizationsid) | **GET** /organizations/{id} | Get Complete Organization Info |
| [**getPeopleid**](SearchApi.md#getpeopleid) | **GET** /people/{id} | Get Complete Person Info |
| [**newsArticlesSearch**](SearchApi.md#newsarticlessearch) | **POST** /news_articles/search | News Articles Search |
| [**organizationJobsPostings**](SearchApi.md#organizationjobspostings) | **GET** /organizations/{organization_id}/job_postings | Organization Job Postings |
| [**organizationSearch**](SearchApi.md#organizationsearch) | **POST** /mixed_companies/search | Organization Search |
| [**peopleApiSearch**](SearchApi.md#peopleapisearch) | **POST** /mixed_people/api_search | People API Search |



## getOrganizationsid

> getOrganizationsid(id)

Get Complete Organization Info

This endpoint consumes Apollo credits per record when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4412658766477-Search-for-Companies\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Organizations&lt;/a&gt; are companies you haven\&#39;t yet saved as accounts on Apollo.&lt;br&gt;&lt;br&gt;Use the Get Complete Organization Info endpoint to retrieve complete details about an organization in Apollo.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { GetOrganizationsidRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SearchApi(config);

  const body = {
    // string | The Apollo ID for the organization that you want to research. <br><br>To find organization IDs, call the <a href=\"https://docs.apollo.io/reference/organization-search#/\" target=\"_blank\">Organization Search endpoint</a> and identify the `organizaton_id` value for the organization. <br><br>Example: `5e66b6381e05b4008c8331b8`
    id: id_example,
  } satisfies GetOrganizationsidRequest;

  try {
    const data = await api.getOrganizationsid(body);
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
| **id** | `string` | The Apollo ID for the organization that you want to research. &lt;br&gt;&lt;br&gt;To find organization IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/organization-search#/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Organization Search endpoint&lt;/a&gt; and identify the &#x60;organizaton_id&#x60; value for the organization. &lt;br&gt;&lt;br&gt;Example: &#x60;5e66b6381e05b4008c8331b8&#x60; | [Defaults to `&#39;&#39;`] |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPeopleid

> getPeopleid(id)

Get Complete Person Info

This endpoint consumes Apollo credits per record when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the Get Complete Person Info endpoint to retrieve complete details about a person in the Apollo database, including employment history, location, and the full details of the person\&#39;s current organization.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call this endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { GetPeopleidRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SearchApi(config);

  const body = {
    // string | The Apollo ID for the person that you want to research. <br><br>To find person IDs, call the <a href=\"https://docs.apollo.io/reference/people-search\" target=\"_blank\">People Search endpoint</a> and identify the `id` value for the person. <br><br>Example: `65f0a1b2c3d4e5f600012345`
    id: id_example,
  } satisfies GetPeopleidRequest;

  try {
    const data = await api.getPeopleid(body);
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
| **id** | `string` | The Apollo ID for the person that you want to research. &lt;br&gt;&lt;br&gt;To find person IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/people-search\&quot; target&#x3D;\&quot;_blank\&quot;&gt;People Search endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the person. &lt;br&gt;&lt;br&gt;Example: &#x60;65f0a1b2c3d4e5f600012345&#x60; | [Defaults to `&#39;&#39;`] |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## newsArticlesSearch

> newsArticlesSearch(organizationIds, categories, publishedAtMin, publishedAtMax, page, perPage)

News Articles Search

This endpoint consumes Apollo credits per page when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4412665755661-Search-Filters-Overview#news\&quot; target&#x3D;\&quot;_blank\&quot;&gt;News&lt;/a&gt; includes articles related to companies in Apollo.&lt;br&gt;&lt;br&gt;Use the News Articles Search endpoint to find news articles related to specific companies. Several filters are available to help narrow your search.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { NewsArticlesSearchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SearchApi(config);

  const body = {
    // Array<string> | The Apollo IDs for the companies you want to include in your search results. Each company in the Apollo database is assigned a unique ID. <br><br>To find IDs, call the <a href=\"https://docs.apollo.io/reference/organization-search\" target=\"_blank\">Organization Search endpoint</a> and identify the values for `organization_id`.  <br><br>Example: `5e66b6381e05b4008c8331b8`
    organizationIds: ...,
    // Array<string> | Filter your search to include only certain categories or sub-categories of news. Use the <b>News</b> search filter for companies within Apollo to uncover all possible categories and sub-categories. <br><br>Examples: `hires`; `investment`; `contract` (optional)
    categories: ...,
    // Date | Set the lower bound of the date range you want to search. <br><br>Use this parameter in combination with the `published_at[max]` parameter. This date should fall before the `published_at[max]` date. <br><br>The date should be formatted as `YYYY-MM-DD`. <br><br>Example: `2025-02-15` (optional)
    publishedAtMin: 2013-10-20,
    // Date | Set the upper bound of the date range you want to search. <br><br>Use this parameter in combination with the `published_at[min]` parameter. This date should fall after the `published_at[min]` date. <br><br>The date should be formatted as `YYYY-MM-DD`. <br><br>Example: `2025-05-15` (optional)
    publishedAtMax: 2013-10-20,
    // number | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: 56,
    // number | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: 56,
  } satisfies NewsArticlesSearchRequest;

  try {
    const data = await api.newsArticlesSearch(body);
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
| **organizationIds** | `Array<string>` | The Apollo IDs for the companies you want to include in your search results. Each company in the Apollo database is assigned a unique ID. &lt;br&gt;&lt;br&gt;To find IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/organization-search\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Organization Search endpoint&lt;/a&gt; and identify the values for &#x60;organization_id&#x60;.  &lt;br&gt;&lt;br&gt;Example: &#x60;5e66b6381e05b4008c8331b8&#x60; | |
| **categories** | `Array<string>` | Filter your search to include only certain categories or sub-categories of news. Use the &lt;b&gt;News&lt;/b&gt; search filter for companies within Apollo to uncover all possible categories and sub-categories. &lt;br&gt;&lt;br&gt;Examples: &#x60;hires&#x60;; &#x60;investment&#x60;; &#x60;contract&#x60; | [Optional] |
| **publishedAtMin** | `Date` | Set the lower bound of the date range you want to search. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;published_at[max]&#x60; parameter. This date should fall before the &#x60;published_at[max]&#x60; date. &lt;br&gt;&lt;br&gt;The date should be formatted as &#x60;YYYY-MM-DD&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-02-15&#x60; | [Optional] [Defaults to ``] |
| **publishedAtMax** | `Date` | Set the upper bound of the date range you want to search. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;published_at[min]&#x60; parameter. This date should fall after the &#x60;published_at[min]&#x60; date. &lt;br&gt;&lt;br&gt;The date should be formatted as &#x60;YYYY-MM-DD&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-05-15&#x60; | [Optional] [Defaults to ``] |
| **page** | `number` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to ``] |
| **perPage** | `number` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to ``] |

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
| **422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizationJobsPostings

> OrganizationJobsPostings200Response organizationJobsPostings(organizationId, page, perPage)

Organization Job Postings

This endpoint consumes Apollo credits per page when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4412658766477-Search-for-Companies\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Organizations&lt;/a&gt; are companies you haven\&#39;t yet saved as accounts on Apollo.&lt;br&gt;&lt;br&gt;Use the Organization Job Postings endpoint to retrieve the current job postings for companies. This can help you identify companies that are growing headcount in areas that are strategically important for you.&lt;br&gt;&lt;br&gt;To protect Apollo\&#39;s performance for all users, this endpoint has a display limit of 10,000 records.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { OrganizationJobsPostingsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SearchApi(config);

  const body = {
    // string | The organization ID of the company for which you want to find job postings.<br><br>Each company in the Apollo database is assigned a unique ID. To find IDs, call the <a href=\"https://docs.apollo.io/reference/organization-search\" target=\"_blank\">Organization Search endpoint</a> and identify the values for `organization_id`. <br><br>Example: `5e66b6381e05b4008c8331b8`
    organizationId: organizationId_example,
    // number | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: 56,
    // number | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: 56,
  } satisfies OrganizationJobsPostingsRequest;

  try {
    const data = await api.organizationJobsPostings(body);
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
| **organizationId** | `string` | The organization ID of the company for which you want to find job postings.&lt;br&gt;&lt;br&gt;Each company in the Apollo database is assigned a unique ID. To find IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/organization-search\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Organization Search endpoint&lt;/a&gt; and identify the values for &#x60;organization_id&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;5e66b6381e05b4008c8331b8&#x60; | [Defaults to `undefined`] |
| **page** | `number` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**OrganizationJobsPostings200Response**](OrganizationJobsPostings200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## organizationSearch

> OrganizationSearch200Response organizationSearch(qOrganizationDomainsList, organizationNumEmployeesRanges, organizationLocations, organizationNotLocations, revenueRangeMin, revenueRangeMax, currentlyUsingAnyOfTechnologyUids, qOrganizationKeywordTags, qOrganizationName, organizationIds, latestFundingAmountRangeMin, latestFundingAmountRangeMax, totalFundingRangeMin, totalFundingRangeMax, latestFundingDateRangeMin, latestFundingDateRangeMax, qOrganizationJobTitles, organizationJobLocations, organizationNumJobsRangeMin, organizationNumJobsRangeMax, organizationJobPostedAtRangeMin, organizationJobPostedAtRangeMax, page, perPage)

Organization Search

This endpoint consumes Apollo credits per page when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4412658766477-Search-for-Companies\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Organizations&lt;/a&gt; are companies you haven\&#39;t yet saved as accounts on Apollo.&lt;br&gt;&lt;br&gt;Use the Organization Search endpoint to find companies in the Apollo database. Several filters are available to help narrow your search.&lt;br&gt;&lt;br&gt;To protect Apollo\&#39;s performance for all users, this endpoint has a display limit of 50,000 records (100 records per page, up to 500 pages). Add more filters to narrow your search results as much as possible.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { OrganizationSearchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SearchApi(config);

  const body = {
    // Array<string> | The domain name for the person\'s employer. This can be the current employer or a previous employer. Do not include `www.`, the `@` symbol, or similar. <br><br>This parameter accepts up to 1,000 domains in a single request. <br><br>Examples: `apollo.io`; `microsoft.com` (optional)
    qOrganizationDomainsList: ...,
    // Array<string> | The number range of employees working for the company. This enables you to find companies based on headcount. You can add multiple ranges to expand your search results. <br><br>Each range you add needs to be a string, with the upper and lower numbers of the range separated only by a comma. <br><br>Examples: `1,10`; `250,500`; `10000,20000` (optional)
    organizationNumEmployeesRanges: ...,
    // Array<string> | The location of the company headquarters. You can search across cities, US states, and countries. <br><br>If a company has several office locations, results are still based on the headquarters location. For example, if you search `chicago` but a company\'s HQ location is in `boston`, any Boston-based companies will not appearch in your search results, even if they match other parameters.. <br><br>To exclude companies based on location, use the `organization_not_locations` parameter. <br><br>Examples: `texas`; `tokyo`; `spain` (optional)
    organizationLocations: ...,
    // Array<string> | Exclude companies from search results based on the location of the company headquarters. You can use cities, US states, and countries as locations to exclude. <br><br>This parameter is useful for ensuring you do not prospect in an undesirable territory. For example, if you use `ireland` as a value, no Ireland-based companies will appear in your search results. <br><br>Examples: `minnesota`; `ireland`; `seoul` (optional)
    organizationNotLocations: ...,
    // number | Search for organizations based on their revenue. <br><br>Use this parameter to set the lower range of organization revenue. Use the `revenue_range[max]` parameter to set the upper range of revenue. <br><br>Do not enter currency symbols, commas, or decimal points in the figure. <br><br>Example: `300000` (optional)
    revenueRangeMin: 56,
    // number | Search for organizations based on their revenue. <br><br>Use this parameter to set the upper range of organization revenue. Use the `revenue_range[min]` parameter to set the lower range of revenue. <br><br>Do not enter currency symbols, commas, or decimal points in the figure. <br><br>Example: `50000000` (optional)
    revenueRangeMax: 56,
    // Array<string> | Find organizations based on the technologies they currently use. Apollo supports filtering by 1,500+ technologies. <br><br>Apollo calculates technologies data from multiple sources. This data is updated regularly. Check out the full list of supported technologies by <a href=\"https://api.apollo.io/v1/auth/supported_technologies_csv\" target=\"_blank\">downloading this CSV file</a>. <br><br>Use underscores (`_`) to replace spaces and periods for the technologies listed in the CSV file. <br><br>Examples: `salesforce`; `google_analytics`; `wordpress_org` (optional)
    currentlyUsingAnyOfTechnologyUids: ...,
    // Array<string> | Filter search results based on keywords associated with companies. For example, you can enter `mining` as a value to return only companies that have an association with the mining industry. <br><br>Examples: `mining`; `sales strategy`; `consulting` (optional)
    qOrganizationKeywordTags: ...,
    // string | Filter search results to include a specific company name. <br><br>If the value you enter for this parameter does not match with a company\'s name, the company will not appear in search results, even if it matches other parameters. Partial matches are accepted. For example, if you filter by the value `marketing`, a company called `NY Marketing Unlimited` would still be eligible as a search result, but `NY Market Analysis` would not be eligible. <br><br>Example: `apollo` or `mining` (optional)
    qOrganizationName: qOrganizationName_example,
    // Array<string> | The Apollo IDs for the companies you want to include in your search results. Each company in the Apollo database is assigned a unique ID. <br><br>To find IDs, identify the values for `organization_id` when you call this endpoint. <br><br>Example: `5e66b6381e05b4008c8331b8` (optional)
    organizationIds: ...,
    // number | The minimum amount the company received with its most recent funding round. Use this parameter in combination with `latest_funding_amount_range[max]` to set a monetary range for the company\'s most recent funding round. <br><br>Do not enter currency symbols, commas, or decimal points in the figure. <br><br>Examples: `5000000`; `15000000` (optional)
    latestFundingAmountRangeMin: 56,
    // number | The maximium amount the company received with its most recent funding round. Use this parameter in combination with `latest_funding_amount_range[min]` to set a monetary range for the company\'s most recent funding round. <br><br>Do not enter currency symbols, commas, or decimal points in the figure. <br><br>Examples: `5000000`; `15000000` (optional)
    latestFundingAmountRangeMax: 56,
    // number | The minimum amount the company received during all of its funding rounds combined. Use this parameter in combination with `total_funding_range[max]` to set a monetary range for all of the company\'s funding rounds. <br><br>Do not enter currency symbols, commas, or decimal points in the figure. <br><br>Examples: `50000000`; `350000000` (optional)
    totalFundingRangeMin: 56,
    // number | The maximum amount the company received during all of its funding rounds combined. Use this parameter in combination with `total_funding_range[min]` to set a monetary range for all of the company\'s funding rounds. <br><br>Do not enter currency symbols, commas, or decimal points in the figure. <br><br>Examples: `50000000`; `350000000` (optional)
    totalFundingRangeMax: 56,
    // Date | The earliest date when the company received its most recent funding round. Use this parameter in combination with `latest_funding_date_range[max]` to set a date range for when the company received its most recent funding round. <br><br>Example: `2025-07-25` (optional)
    latestFundingDateRangeMin: 2013-10-20,
    // Date | The latest date when the company received its most recent funding round. Use this parameter in combination with `latest_funding_date_range[min]` to set a date range for when the company received its most recent funding round. <br><br>Example: `2025-09-25` (optional)
    latestFundingDateRangeMax: 2013-10-20,
    // Array<string> | The job titles that are listed in active job postings at the company. <br><br>Examples: `sales manager`; `research analyst` (optional)
    qOrganizationJobTitles: ...,
    // Array<string> | The locations of the jobs being actively recruited by the company. <br><br>Examples: `atlanta`; `japan` (optional)
    organizationJobLocations: ...,
    // number | The minimum number of job postings active at the company. Use this parameter in combination with `organization_num_jobs_range[max]` to set a job postings range. <br><br>Examples: `50`; `500` (optional)
    organizationNumJobsRangeMin: 56,
    // number | The maximum number of job postings active at the company. Use this parameter in combination with `organization_num_jobs_range[min]` to set a job postings range. <br><br>Examples: `50`; `500` (optional)
    organizationNumJobsRangeMax: 56,
    // Date | The earliest date when jobs were posted by the company. Use this parameter in combination with `organization_job_posted_at_range[max]` to set a date range for when jobs posted. <br><br>Example: `2025-07-25` (optional)
    organizationJobPostedAtRangeMin: 2013-10-20,
    // Date | The latest date when jobs were posted by the company. Use this parameter in combination with `organization_job_posted_at_range[min]` to set a date range for when jobs posted. <br><br>Example: `2025-09-25` (optional)
    organizationJobPostedAtRangeMax: 2013-10-20,
    // number | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: 56,
    // number | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: 56,
  } satisfies OrganizationSearchRequest;

  try {
    const data = await api.organizationSearch(body);
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
| **qOrganizationDomainsList** | `Array<string>` | The domain name for the person\&#39;s employer. This can be the current employer or a previous employer. Do not include &#x60;www.&#x60;, the &#x60;@&#x60; symbol, or similar. &lt;br&gt;&lt;br&gt;This parameter accepts up to 1,000 domains in a single request. &lt;br&gt;&lt;br&gt;Examples: &#x60;apollo.io&#x60;; &#x60;microsoft.com&#x60; | [Optional] |
| **organizationNumEmployeesRanges** | `Array<string>` | The number range of employees working for the company. This enables you to find companies based on headcount. You can add multiple ranges to expand your search results. &lt;br&gt;&lt;br&gt;Each range you add needs to be a string, with the upper and lower numbers of the range separated only by a comma. &lt;br&gt;&lt;br&gt;Examples: &#x60;1,10&#x60;; &#x60;250,500&#x60;; &#x60;10000,20000&#x60; | [Optional] |
| **organizationLocations** | `Array<string>` | The location of the company headquarters. You can search across cities, US states, and countries. &lt;br&gt;&lt;br&gt;If a company has several office locations, results are still based on the headquarters location. For example, if you search &#x60;chicago&#x60; but a company\&#39;s HQ location is in &#x60;boston&#x60;, any Boston-based companies will not appearch in your search results, even if they match other parameters.. &lt;br&gt;&lt;br&gt;To exclude companies based on location, use the &#x60;organization_not_locations&#x60; parameter. &lt;br&gt;&lt;br&gt;Examples: &#x60;texas&#x60;; &#x60;tokyo&#x60;; &#x60;spain&#x60; | [Optional] |
| **organizationNotLocations** | `Array<string>` | Exclude companies from search results based on the location of the company headquarters. You can use cities, US states, and countries as locations to exclude. &lt;br&gt;&lt;br&gt;This parameter is useful for ensuring you do not prospect in an undesirable territory. For example, if you use &#x60;ireland&#x60; as a value, no Ireland-based companies will appear in your search results. &lt;br&gt;&lt;br&gt;Examples: &#x60;minnesota&#x60;; &#x60;ireland&#x60;; &#x60;seoul&#x60; | [Optional] |
| **revenueRangeMin** | `number` | Search for organizations based on their revenue. &lt;br&gt;&lt;br&gt;Use this parameter to set the lower range of organization revenue. Use the &#x60;revenue_range[max]&#x60; parameter to set the upper range of revenue. &lt;br&gt;&lt;br&gt;Do not enter currency symbols, commas, or decimal points in the figure. &lt;br&gt;&lt;br&gt;Example: &#x60;300000&#x60; | [Optional] [Defaults to `undefined`] |
| **revenueRangeMax** | `number` | Search for organizations based on their revenue. &lt;br&gt;&lt;br&gt;Use this parameter to set the upper range of organization revenue. Use the &#x60;revenue_range[min]&#x60; parameter to set the lower range of revenue. &lt;br&gt;&lt;br&gt;Do not enter currency symbols, commas, or decimal points in the figure. &lt;br&gt;&lt;br&gt;Example: &#x60;50000000&#x60; | [Optional] [Defaults to `undefined`] |
| **currentlyUsingAnyOfTechnologyUids** | `Array<string>` | Find organizations based on the technologies they currently use. Apollo supports filtering by 1,500+ technologies. &lt;br&gt;&lt;br&gt;Apollo calculates technologies data from multiple sources. This data is updated regularly. Check out the full list of supported technologies by &lt;a href&#x3D;\&quot;https://api.apollo.io/v1/auth/supported_technologies_csv\&quot; target&#x3D;\&quot;_blank\&quot;&gt;downloading this CSV file&lt;/a&gt;. &lt;br&gt;&lt;br&gt;Use underscores (&#x60;_&#x60;) to replace spaces and periods for the technologies listed in the CSV file. &lt;br&gt;&lt;br&gt;Examples: &#x60;salesforce&#x60;; &#x60;google_analytics&#x60;; &#x60;wordpress_org&#x60; | [Optional] |
| **qOrganizationKeywordTags** | `Array<string>` | Filter search results based on keywords associated with companies. For example, you can enter &#x60;mining&#x60; as a value to return only companies that have an association with the mining industry. &lt;br&gt;&lt;br&gt;Examples: &#x60;mining&#x60;; &#x60;sales strategy&#x60;; &#x60;consulting&#x60; | [Optional] |
| **qOrganizationName** | `string` | Filter search results to include a specific company name. &lt;br&gt;&lt;br&gt;If the value you enter for this parameter does not match with a company\&#39;s name, the company will not appear in search results, even if it matches other parameters. Partial matches are accepted. For example, if you filter by the value &#x60;marketing&#x60;, a company called &#x60;NY Marketing Unlimited&#x60; would still be eligible as a search result, but &#x60;NY Market Analysis&#x60; would not be eligible. &lt;br&gt;&lt;br&gt;Example: &#x60;apollo&#x60; or &#x60;mining&#x60; | [Optional] [Defaults to `undefined`] |
| **organizationIds** | `Array<string>` | The Apollo IDs for the companies you want to include in your search results. Each company in the Apollo database is assigned a unique ID. &lt;br&gt;&lt;br&gt;To find IDs, identify the values for &#x60;organization_id&#x60; when you call this endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;5e66b6381e05b4008c8331b8&#x60; | [Optional] |
| **latestFundingAmountRangeMin** | `number` | The minimum amount the company received with its most recent funding round. Use this parameter in combination with &#x60;latest_funding_amount_range[max]&#x60; to set a monetary range for the company\&#39;s most recent funding round. &lt;br&gt;&lt;br&gt;Do not enter currency symbols, commas, or decimal points in the figure. &lt;br&gt;&lt;br&gt;Examples: &#x60;5000000&#x60;; &#x60;15000000&#x60; | [Optional] [Defaults to ``] |
| **latestFundingAmountRangeMax** | `number` | The maximium amount the company received with its most recent funding round. Use this parameter in combination with &#x60;latest_funding_amount_range[min]&#x60; to set a monetary range for the company\&#39;s most recent funding round. &lt;br&gt;&lt;br&gt;Do not enter currency symbols, commas, or decimal points in the figure. &lt;br&gt;&lt;br&gt;Examples: &#x60;5000000&#x60;; &#x60;15000000&#x60; | [Optional] [Defaults to ``] |
| **totalFundingRangeMin** | `number` | The minimum amount the company received during all of its funding rounds combined. Use this parameter in combination with &#x60;total_funding_range[max]&#x60; to set a monetary range for all of the company\&#39;s funding rounds. &lt;br&gt;&lt;br&gt;Do not enter currency symbols, commas, or decimal points in the figure. &lt;br&gt;&lt;br&gt;Examples: &#x60;50000000&#x60;; &#x60;350000000&#x60; | [Optional] [Defaults to ``] |
| **totalFundingRangeMax** | `number` | The maximum amount the company received during all of its funding rounds combined. Use this parameter in combination with &#x60;total_funding_range[min]&#x60; to set a monetary range for all of the company\&#39;s funding rounds. &lt;br&gt;&lt;br&gt;Do not enter currency symbols, commas, or decimal points in the figure. &lt;br&gt;&lt;br&gt;Examples: &#x60;50000000&#x60;; &#x60;350000000&#x60; | [Optional] [Defaults to ``] |
| **latestFundingDateRangeMin** | `Date` | The earliest date when the company received its most recent funding round. Use this parameter in combination with &#x60;latest_funding_date_range[max]&#x60; to set a date range for when the company received its most recent funding round. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-07-25&#x60; | [Optional] [Defaults to ``] |
| **latestFundingDateRangeMax** | `Date` | The latest date when the company received its most recent funding round. Use this parameter in combination with &#x60;latest_funding_date_range[min]&#x60; to set a date range for when the company received its most recent funding round. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-09-25&#x60; | [Optional] [Defaults to ``] |
| **qOrganizationJobTitles** | `Array<string>` | The job titles that are listed in active job postings at the company. &lt;br&gt;&lt;br&gt;Examples: &#x60;sales manager&#x60;; &#x60;research analyst&#x60; | [Optional] |
| **organizationJobLocations** | `Array<string>` | The locations of the jobs being actively recruited by the company. &lt;br&gt;&lt;br&gt;Examples: &#x60;atlanta&#x60;; &#x60;japan&#x60; | [Optional] |
| **organizationNumJobsRangeMin** | `number` | The minimum number of job postings active at the company. Use this parameter in combination with &#x60;organization_num_jobs_range[max]&#x60; to set a job postings range. &lt;br&gt;&lt;br&gt;Examples: &#x60;50&#x60;; &#x60;500&#x60; | [Optional] [Defaults to ``] |
| **organizationNumJobsRangeMax** | `number` | The maximum number of job postings active at the company. Use this parameter in combination with &#x60;organization_num_jobs_range[min]&#x60; to set a job postings range. &lt;br&gt;&lt;br&gt;Examples: &#x60;50&#x60;; &#x60;500&#x60; | [Optional] [Defaults to ``] |
| **organizationJobPostedAtRangeMin** | `Date` | The earliest date when jobs were posted by the company. Use this parameter in combination with &#x60;organization_job_posted_at_range[max]&#x60; to set a date range for when jobs posted. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-07-25&#x60; | [Optional] [Defaults to ``] |
| **organizationJobPostedAtRangeMax** | `Date` | The latest date when jobs were posted by the company. Use this parameter in combination with &#x60;organization_job_posted_at_range[min]&#x60; to set a date range for when jobs posted. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-09-25&#x60; | [Optional] [Defaults to ``] |
| **page** | `number` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**OrganizationSearch200Response**](OrganizationSearch200Response.md)

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


## peopleApiSearch

> PeopleApiSearch200Response peopleApiSearch(personTitles, includeSimilarTitles, qKeywords, personLocations, personSeniorities, organizationLocations, qOrganizationDomainsList, contactEmailStatus, organizationIds, organizationNumEmployeesRanges, revenueRangeMin, revenueRangeMax, currentlyUsingAllOfTechnologyUids, currentlyUsingAnyOfTechnologyUids, currentlyNotUsingAnyOfTechnologyUids, qOrganizationJobTitles, organizationJobLocations, organizationNumJobsRangeMin, organizationNumJobsRangeMax, organizationJobPostedAtRangeMin, organizationJobPostedAtRangeMax, page, perPage)

People API Search

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4412658716941-Search-for-People\&quot; target&#x3D;\&quot;_blank\&quot;&gt;People&lt;/a&gt; are net-new prospects you haven\&#39;t yet saved as contacts on Apollo.&lt;br&gt;&lt;br&gt;Use the People API Search endpoint to find new prospects. Several filters are available to help narrow your search. This endpoint doesn\&#39;t return email addresses or phone numbers. Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/people-enrichment\&quot;&gt;People Enrichment&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/bulk-people-enrichment\&quot;&gt;Bulk People Enrichment&lt;/a&gt; endpoints to enrich data.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.&lt;br&gt;&lt;br&gt;To protect Apollo\&#39;s performance for all users, this endpoint has a display limit of 50,000 records (100 records per page, up to 500 pages). Add more filters to narrow your search results as much as possible.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { PeopleApiSearchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SearchApi(config);

  const body = {
    // Array<string> | Job titles held by the people you want to find. For a person to be included in search results, they only need to match 1 of the job titles you add. Adding more job titles expands your search results. <br><br>Results also include job titles with the same terms, even if they are not exact matches. For example, searching for `marketing manager` might return people with the job title `content marketing manager`. <br><br>Use this parameter in combination with the `person_seniorities[]` parameter to find people based on specific job functions and seniority levels. <br><br>Examples: `sales development representative`; `marketing manager`; `research analyst` (optional)
    personTitles: ...,
    // boolean | This parameter determines whether people with job titles similar to the titles you define in the `person_titles[]` parameter are returned in the response. <br><br>Set this parameter to `false` when using `person_titles[]` to return only strict matches for job titles. (optional)
    includeSimilarTitles: true,
    // string | A string of words over which we want to filter the results. (optional)
    qKeywords: qKeywords_example,
    // Array<string> | The location where people live. You can search across cities, US states, and countries. <br><br>To find people based on the headquarters locations of their current employer, use the `organization_locations` parameter. <br><br>Examples: `california`; `ireland`; `chicago` (optional)
    personLocations: ...,
    // Array<string> | The job seniority that people hold within their current employer. This enables you to find people that currently hold positions at certain reporting levels, such as Director level or senior IC level. <br><br>For a person to be included in search results, they only need to match 1 of the seniorities you add. Adding more seniorities expands your search results. <br><br> Searches only return results based on their current job title, so searching for Director-level employees only returns people that currently hold a Director-level title. If someone was previously a Director, but is currently a VP, they would not be included in your search results. <br><br>Use this parameter in combination with the `person_titles[]` parameter to find people based on specific job functions and seniority levels. <br><br>The following options can be used for this parameter: <br><ul><li><code>owner</code></li><li><code>founder</code></li><li><code>c_suite</code></li><li><code>partner</code></li><li><code>vp</code></li><li><code>head</code></li><li><code>director</code></li><li><code>manager</code></li><li><code>senior</code></li><li><code>entry</code></li><li><code>intern</code></li></ul> (optional)
    personSeniorities: ...,
    // Array<string> | The location of the company headquarters for a person\'s current employer. You can search across cities, US states, and countries. <br><br>If a company has several office locations, results are still based on the headquarters location. For example, if you search `chicago` but a company\'s HQ location is in `boston`, people that work for the Boston-based company will not appear in your results, even if they match other \\parameters. <br><br>To find people based on their personal location, use the `person_locations` parameter. <br><br>Examples: `texas`; `tokyo`; `spain` (optional)
    organizationLocations: ...,
    // Array<string> | The domain name for the person\'s employer. This can be the current employer or a previous employer. Do not include `www.`, the `@` symbol, or similar. <br><br>This parameter accepts up to 1,000 domains in a single request. <br><br>Examples: `apollo.io`; `microsoft.com` (optional)
    qOrganizationDomainsList: ...,
    // Array<string> | The email statuses for the people you want to find. You can add multiple statuses to expand your search. <br><br>The statuses you can search include:  <ul> <li> <code>verified</code> </li> <li> <code>unverified</code> </li> <li> <code>likely to engage</code> </li> <li> <code>unavailable</code> </li>  </ul> (optional)
    contactEmailStatus: ...,
    // Array<string> | The Apollo IDs for the companies (employers) you want to include in your search results. Each company in the Apollo database is assigned a unique ID. <br><br>To find IDs, call the <a href=\"https://docs.apollo.io/reference/organization-search\" target=\"_blank\">Organization Search endpoint</a> and identify the values for `organization_id`.  <br><br>Example: `5e66b6381e05b4008c8331b8` (optional)
    organizationIds: ...,
    // Array<string> | The number range of employees working for the person\'s current company. This enables you to find people based on the headcount of their employer. You can add multiple ranges to expand your search results. <br><br>Each range you add needs to be a string, with the upper and lower numbers of the range separated only by a comma. <br><br>Examples: `1,10`; `250,500`; `10000,20000` (optional)
    organizationNumEmployeesRanges: ...,
    // number | The minimum revenue the person\'s current employer generates. Use this parameter in combination with `revenue_range[max]` to set a revenue range. <br><br>Do not enter currency symbols, commas, or decimal points in the figure. <br><br>Examples: `500000`; `1500000` (optional)
    revenueRangeMin: 56,
    // number | The maximum revenue the person\'s current employer generates. Use this parameter in combination with `revenue_range[min]` to set a revenue range. <br><br>Do not enter currency symbols, commas, or decimal points in the figure. <br><br>Examples: `500000`; `1500000` (optional)
    revenueRangeMax: 56,
    // Array<string> | Find people based on all of the technologies their current employer uses. Apollo supports filtering by 1,500+ technologies. <br><br>Apollo calculates technologies data from multiple sources. This data is updated regularly. Check out the full list of supported technologies by <a href=\"https://api.apollo.io/v1/auth/supported_technologies_csv\" target=\"_blank\">downloading this CSV file</a>. <br><br>Use underscores (`_`) to replace spaces and periods for the technologies listed in the CSV file. <br><br>Examples: `salesforce`; `google_analytics`; `wordpress_org` (optional)
    currentlyUsingAllOfTechnologyUids: ...,
    // Array<string> | Find people based on any of the technologies their current employer uses. Apollo supports filtering by 1,500+ technologies. <br><br>Apollo calculates technologies data from multiple sources. This data is updated regularly. Check out the full list of supported technologies by <a href=\"https://api.apollo.io/v1/auth/supported_technologies_csv\" target=\"_blank\">downloading this CSV file</a>. <br><br>Use underscores (`_`) to replace spaces and periods for the technologies listed in the CSV file. <br><br>Examples: `salesforce`; `google_analytics`; `wordpress_org` (optional)
    currentlyUsingAnyOfTechnologyUids: ...,
    // Array<string> | Exclude people from your search based on any of the technologies their current employer uses. Apollo supports filtering by 1,500+ technologies. <br><br>Apollo calculates technologies data from multiple sources. This data is updated regularly. Check out the full list of supported technologies by <a href=\"https://api.apollo.io/v1/auth/supported_technologies_csv\" target=\"_blank\">downloading this CSV file</a>. <br><br>Use underscores (`_`) to replace spaces and periods for the technologies listed in the CSV file. <br><br>Examples: `salesforce`; `google_analytics`; `wordpress_org` (optional)
    currentlyNotUsingAnyOfTechnologyUids: ...,
    // Array<string> | The job titles that are listed in active job postings at the person\'s current employer. <br><br>Examples: `sales manager`; `research analyst` (optional)
    qOrganizationJobTitles: ...,
    // Array<string> | The locations of the jobs being actively recruited by the person\'s employer. <br><br>Examples: `atlanta`; `japan` (optional)
    organizationJobLocations: ...,
    // number | The minimum number of job postings active at the person\'s current empployer. Use this parameter in combination with `organization_num_jobs_range[max]` to set a job postings range. <br><br>Examples: `50`; `500` (optional)
    organizationNumJobsRangeMin: 56,
    // number | The maximum number of job postings active at the person\'s current empployer. Use this parameter in combination with `organization_num_jobs_range[min]` to set a job postings range. <br><br>Examples: `50`; `500` (optional)
    organizationNumJobsRangeMax: 56,
    // Date | The earliest date when jobs were posted by the person\'s current employer. Use this parameter in combination with `organization_job_posted_at_range[max]` to set a date range for when jobs posted. <br><br>Example: `2025-07-25` (optional)
    organizationJobPostedAtRangeMin: 2013-10-20,
    // Date | The latest date when jobs were posted by the person\'s current employer. Use this parameter in combination with `organization_job_posted_at_range[min]` to set a date range for when jobs posted. <br><br>Example: `2025-09-25` (optional)
    organizationJobPostedAtRangeMax: 2013-10-20,
    // number | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: 56,
    // number | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: 56,
  } satisfies PeopleApiSearchRequest;

  try {
    const data = await api.peopleApiSearch(body);
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
| **personTitles** | `Array<string>` | Job titles held by the people you want to find. For a person to be included in search results, they only need to match 1 of the job titles you add. Adding more job titles expands your search results. &lt;br&gt;&lt;br&gt;Results also include job titles with the same terms, even if they are not exact matches. For example, searching for &#x60;marketing manager&#x60; might return people with the job title &#x60;content marketing manager&#x60;. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;person_seniorities[]&#x60; parameter to find people based on specific job functions and seniority levels. &lt;br&gt;&lt;br&gt;Examples: &#x60;sales development representative&#x60;; &#x60;marketing manager&#x60;; &#x60;research analyst&#x60; | [Optional] |
| **includeSimilarTitles** | `boolean` | This parameter determines whether people with job titles similar to the titles you define in the &#x60;person_titles[]&#x60; parameter are returned in the response. &lt;br&gt;&lt;br&gt;Set this parameter to &#x60;false&#x60; when using &#x60;person_titles[]&#x60; to return only strict matches for job titles. | [Optional] [Defaults to `false`] |
| **qKeywords** | `string` | A string of words over which we want to filter the results. | [Optional] [Defaults to `&#39;&#39;`] |
| **personLocations** | `Array<string>` | The location where people live. You can search across cities, US states, and countries. &lt;br&gt;&lt;br&gt;To find people based on the headquarters locations of their current employer, use the &#x60;organization_locations&#x60; parameter. &lt;br&gt;&lt;br&gt;Examples: &#x60;california&#x60;; &#x60;ireland&#x60;; &#x60;chicago&#x60; | [Optional] |
| **personSeniorities** | `Array<string>` | The job seniority that people hold within their current employer. This enables you to find people that currently hold positions at certain reporting levels, such as Director level or senior IC level. &lt;br&gt;&lt;br&gt;For a person to be included in search results, they only need to match 1 of the seniorities you add. Adding more seniorities expands your search results. &lt;br&gt;&lt;br&gt; Searches only return results based on their current job title, so searching for Director-level employees only returns people that currently hold a Director-level title. If someone was previously a Director, but is currently a VP, they would not be included in your search results. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;person_titles[]&#x60; parameter to find people based on specific job functions and seniority levels. &lt;br&gt;&lt;br&gt;The following options can be used for this parameter: &lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;owner&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;founder&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;c_suite&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;partner&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;vp&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;head&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;director&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;manager&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;senior&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;entry&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;intern&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; | [Optional] |
| **organizationLocations** | `Array<string>` | The location of the company headquarters for a person\&#39;s current employer. You can search across cities, US states, and countries. &lt;br&gt;&lt;br&gt;If a company has several office locations, results are still based on the headquarters location. For example, if you search &#x60;chicago&#x60; but a company\&#39;s HQ location is in &#x60;boston&#x60;, people that work for the Boston-based company will not appear in your results, even if they match other \\parameters. &lt;br&gt;&lt;br&gt;To find people based on their personal location, use the &#x60;person_locations&#x60; parameter. &lt;br&gt;&lt;br&gt;Examples: &#x60;texas&#x60;; &#x60;tokyo&#x60;; &#x60;spain&#x60; | [Optional] |
| **qOrganizationDomainsList** | `Array<string>` | The domain name for the person\&#39;s employer. This can be the current employer or a previous employer. Do not include &#x60;www.&#x60;, the &#x60;@&#x60; symbol, or similar. &lt;br&gt;&lt;br&gt;This parameter accepts up to 1,000 domains in a single request. &lt;br&gt;&lt;br&gt;Examples: &#x60;apollo.io&#x60;; &#x60;microsoft.com&#x60; | [Optional] |
| **contactEmailStatus** | `Array<string>` | The email statuses for the people you want to find. You can add multiple statuses to expand your search. &lt;br&gt;&lt;br&gt;The statuses you can search include:  &lt;ul&gt; &lt;li&gt; &lt;code&gt;verified&lt;/code&gt; &lt;/li&gt; &lt;li&gt; &lt;code&gt;unverified&lt;/code&gt; &lt;/li&gt; &lt;li&gt; &lt;code&gt;likely to engage&lt;/code&gt; &lt;/li&gt; &lt;li&gt; &lt;code&gt;unavailable&lt;/code&gt; &lt;/li&gt;  &lt;/ul&gt; | [Optional] |
| **organizationIds** | `Array<string>` | The Apollo IDs for the companies (employers) you want to include in your search results. Each company in the Apollo database is assigned a unique ID. &lt;br&gt;&lt;br&gt;To find IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/organization-search\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Organization Search endpoint&lt;/a&gt; and identify the values for &#x60;organization_id&#x60;.  &lt;br&gt;&lt;br&gt;Example: &#x60;5e66b6381e05b4008c8331b8&#x60; | [Optional] |
| **organizationNumEmployeesRanges** | `Array<string>` | The number range of employees working for the person\&#39;s current company. This enables you to find people based on the headcount of their employer. You can add multiple ranges to expand your search results. &lt;br&gt;&lt;br&gt;Each range you add needs to be a string, with the upper and lower numbers of the range separated only by a comma. &lt;br&gt;&lt;br&gt;Examples: &#x60;1,10&#x60;; &#x60;250,500&#x60;; &#x60;10000,20000&#x60; | [Optional] |
| **revenueRangeMin** | `number` | The minimum revenue the person\&#39;s current employer generates. Use this parameter in combination with &#x60;revenue_range[max]&#x60; to set a revenue range. &lt;br&gt;&lt;br&gt;Do not enter currency symbols, commas, or decimal points in the figure. &lt;br&gt;&lt;br&gt;Examples: &#x60;500000&#x60;; &#x60;1500000&#x60; | [Optional] [Defaults to ``] |
| **revenueRangeMax** | `number` | The maximum revenue the person\&#39;s current employer generates. Use this parameter in combination with &#x60;revenue_range[min]&#x60; to set a revenue range. &lt;br&gt;&lt;br&gt;Do not enter currency symbols, commas, or decimal points in the figure. &lt;br&gt;&lt;br&gt;Examples: &#x60;500000&#x60;; &#x60;1500000&#x60; | [Optional] [Defaults to ``] |
| **currentlyUsingAllOfTechnologyUids** | `Array<string>` | Find people based on all of the technologies their current employer uses. Apollo supports filtering by 1,500+ technologies. &lt;br&gt;&lt;br&gt;Apollo calculates technologies data from multiple sources. This data is updated regularly. Check out the full list of supported technologies by &lt;a href&#x3D;\&quot;https://api.apollo.io/v1/auth/supported_technologies_csv\&quot; target&#x3D;\&quot;_blank\&quot;&gt;downloading this CSV file&lt;/a&gt;. &lt;br&gt;&lt;br&gt;Use underscores (&#x60;_&#x60;) to replace spaces and periods for the technologies listed in the CSV file. &lt;br&gt;&lt;br&gt;Examples: &#x60;salesforce&#x60;; &#x60;google_analytics&#x60;; &#x60;wordpress_org&#x60; | [Optional] |
| **currentlyUsingAnyOfTechnologyUids** | `Array<string>` | Find people based on any of the technologies their current employer uses. Apollo supports filtering by 1,500+ technologies. &lt;br&gt;&lt;br&gt;Apollo calculates technologies data from multiple sources. This data is updated regularly. Check out the full list of supported technologies by &lt;a href&#x3D;\&quot;https://api.apollo.io/v1/auth/supported_technologies_csv\&quot; target&#x3D;\&quot;_blank\&quot;&gt;downloading this CSV file&lt;/a&gt;. &lt;br&gt;&lt;br&gt;Use underscores (&#x60;_&#x60;) to replace spaces and periods for the technologies listed in the CSV file. &lt;br&gt;&lt;br&gt;Examples: &#x60;salesforce&#x60;; &#x60;google_analytics&#x60;; &#x60;wordpress_org&#x60; | [Optional] |
| **currentlyNotUsingAnyOfTechnologyUids** | `Array<string>` | Exclude people from your search based on any of the technologies their current employer uses. Apollo supports filtering by 1,500+ technologies. &lt;br&gt;&lt;br&gt;Apollo calculates technologies data from multiple sources. This data is updated regularly. Check out the full list of supported technologies by &lt;a href&#x3D;\&quot;https://api.apollo.io/v1/auth/supported_technologies_csv\&quot; target&#x3D;\&quot;_blank\&quot;&gt;downloading this CSV file&lt;/a&gt;. &lt;br&gt;&lt;br&gt;Use underscores (&#x60;_&#x60;) to replace spaces and periods for the technologies listed in the CSV file. &lt;br&gt;&lt;br&gt;Examples: &#x60;salesforce&#x60;; &#x60;google_analytics&#x60;; &#x60;wordpress_org&#x60; | [Optional] |
| **qOrganizationJobTitles** | `Array<string>` | The job titles that are listed in active job postings at the person\&#39;s current employer. &lt;br&gt;&lt;br&gt;Examples: &#x60;sales manager&#x60;; &#x60;research analyst&#x60; | [Optional] |
| **organizationJobLocations** | `Array<string>` | The locations of the jobs being actively recruited by the person\&#39;s employer. &lt;br&gt;&lt;br&gt;Examples: &#x60;atlanta&#x60;; &#x60;japan&#x60; | [Optional] |
| **organizationNumJobsRangeMin** | `number` | The minimum number of job postings active at the person\&#39;s current empployer. Use this parameter in combination with &#x60;organization_num_jobs_range[max]&#x60; to set a job postings range. &lt;br&gt;&lt;br&gt;Examples: &#x60;50&#x60;; &#x60;500&#x60; | [Optional] [Defaults to ``] |
| **organizationNumJobsRangeMax** | `number` | The maximum number of job postings active at the person\&#39;s current empployer. Use this parameter in combination with &#x60;organization_num_jobs_range[min]&#x60; to set a job postings range. &lt;br&gt;&lt;br&gt;Examples: &#x60;50&#x60;; &#x60;500&#x60; | [Optional] [Defaults to ``] |
| **organizationJobPostedAtRangeMin** | `Date` | The earliest date when jobs were posted by the person\&#39;s current employer. Use this parameter in combination with &#x60;organization_job_posted_at_range[max]&#x60; to set a date range for when jobs posted. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-07-25&#x60; | [Optional] [Defaults to ``] |
| **organizationJobPostedAtRangeMax** | `Date` | The latest date when jobs were posted by the person\&#39;s current employer. Use this parameter in combination with &#x60;organization_job_posted_at_range[min]&#x60; to set a date range for when jobs posted. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-09-25&#x60; | [Optional] [Defaults to ``] |
| **page** | `number` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to ``] |

### Return type

[**PeopleApiSearch200Response**](PeopleApiSearch200Response.md)

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

