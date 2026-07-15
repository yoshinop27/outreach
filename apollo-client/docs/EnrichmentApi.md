# EnrichmentApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkOrganizationEnrichment**](EnrichmentApi.md#bulkorganizationenrichmentoperation) | **POST** /organizations/bulk_enrich | Bulk Organization Enrichment |
| [**bulkPeopleEnrichment**](EnrichmentApi.md#bulkpeopleenrichmentoperation) | **POST** /people/bulk_match | Bulk People Enrichment |
| [**organizationEnrichment**](EnrichmentApi.md#organizationenrichment) | **GET** /organizations/enrich | Organization Enrichment |
| [**peopleEnrichment**](EnrichmentApi.md#peopleenrichment) | **POST** /people/match | People Enrichment |



## bulkOrganizationEnrichment

> BulkOrganizationEnrichment200Response bulkOrganizationEnrichment(domains, bulkOrganizationEnrichmentRequest)

Bulk Organization Enrichment

This endpoint consumes Apollo credits per enriched record when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/33699917233293-Enrichment-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Enrichment&lt;/a&gt; is when you refresh existing records so your prospecting data is up-to-date.&lt;br&gt;&lt;br&gt;Use the Bulk Organization Enrichment endpoint to enrich data for up to ten companies with a single API call. To enrich data for a single company, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/organization-enrichment\&quot;&gt;Organization Enrichment endpoint&lt;/a&gt; instead.&lt;br&gt;&lt;br&gt;You can identify the companies to enrich by providing a list of domains via the  &lt;code&gt;domains[]&lt;/code&gt; query parameter, or by providing a &lt;code&gt;details&lt;/code&gt; array in the request body where each company can be matched by any combination of domain, LinkedIn URL, name, and website.&lt;br&gt;&lt;br&gt;Enriched data potentially includes industry information, revenue, employee counts, funding round details, and corporate phone numbers and locations.&lt;br&gt;&lt;br&gt;This endpoint\&#39;s &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/rate-limits\&quot;&gt;rate limit&lt;/a&gt; is 20/min, 100/hour, 600/day.

### Example

```ts
import {
  Configuration,
  EnrichmentApi,
} from '';
import type { BulkOrganizationEnrichmentOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EnrichmentApi(config);

  const body = {
    // Array<string> | The domain of each company that you want to enrich. Do not include `www.`, the `@` symbol, or similar. <br><br>Use this parameter to match companies by domain only. To match by LinkedIn URL, name, or website in addition to domain, use the `details` array in the request body instead. <br><br>This parameter is required unless you provide a `details` payload in the request body. <br><br>Example: `apollo.io` and `microsoft.com` (optional)
    domains: ...,
    // BulkOrganizationEnrichmentRequest (optional)
    bulkOrganizationEnrichmentRequest: {"details":[{"domain":"apollo.io"},{"domain":"microsoft.com"}]},
  } satisfies BulkOrganizationEnrichmentOperationRequest;

  try {
    const data = await api.bulkOrganizationEnrichment(body);
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
| **domains** | `Array<string>` | The domain of each company that you want to enrich. Do not include &#x60;www.&#x60;, the &#x60;@&#x60; symbol, or similar. &lt;br&gt;&lt;br&gt;Use this parameter to match companies by domain only. To match by LinkedIn URL, name, or website in addition to domain, use the &#x60;details&#x60; array in the request body instead. &lt;br&gt;&lt;br&gt;This parameter is required unless you provide a &#x60;details&#x60; payload in the request body. &lt;br&gt;&lt;br&gt;Example: &#x60;apollo.io&#x60; and &#x60;microsoft.com&#x60; | [Optional] |
| **bulkOrganizationEnrichmentRequest** | [BulkOrganizationEnrichmentRequest](BulkOrganizationEnrichmentRequest.md) |  | [Optional] |

### Return type

[**BulkOrganizationEnrichment200Response**](BulkOrganizationEnrichment200Response.md)

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
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkPeopleEnrichment

> BulkPeopleEnrichment200Response bulkPeopleEnrichment(runWaterfallEmail, runWaterfallPhone, revealPersonalEmails, revealPhoneNumber, webhookUrl, bulkPeopleEnrichmentRequest)

Bulk People Enrichment

This endpoint consumes Apollo credits per enriched record when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/33699917233293-Enrichment-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Enrichment&lt;/a&gt; is when you refresh existing records so your prospecting data is up-to-date.&lt;br&gt;&lt;br&gt;Use the Bulk People Enrichment endpoint to enrich data for up to ten people with a single API call. To enrich data for a single person, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/people-enrichment\&quot;&gt;People Enrichment endpoint&lt;/a&gt; instead.&lt;br&gt;&lt;br&gt;Apollo relies on the information you pass via the endpoint\&#39;s parameters to identify the correct people to enrich. When you provide more information, Apollo is more likely to find matches within its database. If you only provide general information, such as a name without a domain or email address, you may receive a &#x60;200&#x60; response, but the response indicates that no records have been enriched. The details for each person should be passed as an object in the &#x60;details[]&#x60; array.&lt;br&gt;&lt;br&gt;By default, this endpoint doesn\&#39;t return personal emails or phone numbers. Use the &#x60;reveal_personal_emails&#x60; parameter to retrieve personal emails and &#x60;reveal_phone_number&#x60; to retrieve phone numbers. If you set either of these parameters to &#x60;true&#x60;, Apollo attempts to provide emails or phone numbers for all matches.&lt;br&gt;&lt;br&gt;When you use &#x60;reveal_phone_number&#x60;, a valid &#x60;webhook_url&#x60; is required so Apollo can deliver the completed phone enrichment results. Apollo returns the main enrichment response synchronously, then sends the requested phone numbers to the webhook asynchronously. [See webhook details](#webhook-details).&lt;br&gt;&lt;br&gt;You can also use the &#x60;run_waterfall_email&#x60; and &#x60;run_waterfall_phone&#x60; parameters to run waterfall enrichment via this endpoint. [Waterfall enrichment](https://knowledge.apollo.io/hc/en-us/articles/34071089002509-Waterfall-Enrichment-Overview) gives you broader data coverage by checking connected third-party data sources for contact emails and phone numbers.&lt;br&gt;&lt;br&gt;When you call this endpoint and include at least one waterfall parameter, a valid &#x60;webhook_url&#x60; is required so Apollo can deliver the completed waterfall enrichment results. Apollo returns an immediate synchronous response with demographic and firmographic data, along with a waterfall enrichment request status. Apollo then delivers enriched emails or phone numbers asynchronously to the configured webhook.&lt;br&gt;&lt;br&gt;  ### Webhook Details  * When using native phone enrichment, the webhook response follows: [Native webhook response details](doc:retrieve-mobile-phone-numbers-for-contacts#webhook-response-details).  * When using waterfall enrichment, the webhook response follows: [Waterfall webhook response details](doc:enrich-phone-and-email-using-data-waterfall#response-details).  * You can poll webhook results with the [Poll Webhook Result](doc:poll-webhook-result) endpoint by passing &lt;code&gt;request_id&lt;/code&gt;.  ### Webhook Requirements  * **HTTPS Required:** Your endpoint must be publicly accessible over HTTPS.  * **Rate Limiting:** Ensure your webhook endpoint can handle the volume of webhook traffic sent by Apollo.  * **Idempotency:** Apollo may retry webhook calls. Your endpoint should be idempotent to handle duplicate payloads safely.

### Example

```ts
import {
  Configuration,
  EnrichmentApi,
} from '';
import type { BulkPeopleEnrichmentOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EnrichmentApi(config);

  const body = {
    // boolean | Set to true to enable email waterfall enrichment (optional)
    runWaterfallEmail: true,
    // boolean | Set to true to enable phone waterfall enrichment (optional)
    runWaterfallPhone: true,
    // boolean | Set to `true` if you want to enrich all matched people with personal emails. This potentially consumes credits as part of your <a href=\"https://docs.apollo.io/docs/api-pricing\" target=\"_blank\">Apollo pricing plan</a>. The default value is `false`. <br><br>If a person resides in a <a href=\"https://knowledge.apollo.io/hc/en-us/articles/4409141087757\" target=\"_blank\">GDPR</a>-compliant region, Apollo will not reveal their personal email. (optional)
    revealPersonalEmails: true,
    // boolean | Set to `true` if you want to enrich the data of all matched people with all available phone numbers, including mobile phone numbers. This potentially consumes credits as part of your <a href=\"https://docs.apollo.io/docs/api-pricing\" target=\"_blank\">Apollo pricing plan</a>. The default value is `false`. <br><br>If this parameter is set to `true`, you must enter a webhook URL for the `webhook_url` parameter. Apollo will asynchronously verify phone numbers for you, then send a JSON response that includes only details about the phone numbers to the webhook URL you provide. It can take several minutes for the phone numbers to be delivered. (optional)
    revealPhoneNumber: true,
    // string | If you set the `reveal_phone_number` parameter to `true`, this parameter becomes mandatory. Otherwise, do not use this parameter. <br><br>Enter the webhook URL that specifies where Apollo should send a JSON response that includes the phone number you requested. Apollo suggests testing this flow to ensure you receive the separate response with the phone number. <br><br>If phone numbers are not revealed delivered to the webhook URL, try applying UTF-8 encoding to the webhook URL. <br><br>Example: `https://webhook.site/11f2643a-b1b4-c6be-8e6a-6c7da2c12610`; `https%3A%2F%2Fwebhook.site%2F11f2643a-b1b4-c6be-8e6a-6c7da2c12610` (optional)
    webhookUrl: webhookUrl_example,
    // BulkPeopleEnrichmentRequest (optional)
    bulkPeopleEnrichmentRequest: {"details":[{"id":"64a7ff0cc4dfae00013df1a5"}]},
  } satisfies BulkPeopleEnrichmentOperationRequest;

  try {
    const data = await api.bulkPeopleEnrichment(body);
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
| **runWaterfallEmail** | `boolean` | Set to true to enable email waterfall enrichment | [Optional] [Defaults to `false`] |
| **runWaterfallPhone** | `boolean` | Set to true to enable phone waterfall enrichment | [Optional] [Defaults to `false`] |
| **revealPersonalEmails** | `boolean` | Set to &#x60;true&#x60; if you want to enrich all matched people with personal emails. This potentially consumes credits as part of your &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/api-pricing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Apollo pricing plan&lt;/a&gt;. The default value is &#x60;false&#x60;. &lt;br&gt;&lt;br&gt;If a person resides in a &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409141087757\&quot; target&#x3D;\&quot;_blank\&quot;&gt;GDPR&lt;/a&gt;-compliant region, Apollo will not reveal their personal email. | [Optional] [Defaults to `false`] |
| **revealPhoneNumber** | `boolean` | Set to &#x60;true&#x60; if you want to enrich the data of all matched people with all available phone numbers, including mobile phone numbers. This potentially consumes credits as part of your &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/api-pricing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Apollo pricing plan&lt;/a&gt;. The default value is &#x60;false&#x60;. &lt;br&gt;&lt;br&gt;If this parameter is set to &#x60;true&#x60;, you must enter a webhook URL for the &#x60;webhook_url&#x60; parameter. Apollo will asynchronously verify phone numbers for you, then send a JSON response that includes only details about the phone numbers to the webhook URL you provide. It can take several minutes for the phone numbers to be delivered. | [Optional] [Defaults to `false`] |
| **webhookUrl** | `string` | If you set the &#x60;reveal_phone_number&#x60; parameter to &#x60;true&#x60;, this parameter becomes mandatory. Otherwise, do not use this parameter. &lt;br&gt;&lt;br&gt;Enter the webhook URL that specifies where Apollo should send a JSON response that includes the phone number you requested. Apollo suggests testing this flow to ensure you receive the separate response with the phone number. &lt;br&gt;&lt;br&gt;If phone numbers are not revealed delivered to the webhook URL, try applying UTF-8 encoding to the webhook URL. &lt;br&gt;&lt;br&gt;Example: &#x60;https://webhook.site/11f2643a-b1b4-c6be-8e6a-6c7da2c12610&#x60;; &#x60;https%3A%2F%2Fwebhook.site%2F11f2643a-b1b4-c6be-8e6a-6c7da2c12610&#x60; | [Optional] [Defaults to `undefined`] |
| **bulkPeopleEnrichmentRequest** | [BulkPeopleEnrichmentRequest](BulkPeopleEnrichmentRequest.md) |  | [Optional] |

### Return type

[**BulkPeopleEnrichment200Response**](BulkPeopleEnrichment200Response.md)

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


## organizationEnrichment

> OrganizationEnrichment200Response organizationEnrichment(domain, linkedinUrl, name, website)

Organization Enrichment

This endpoint consumes Apollo credits per enriched record when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/33699917233293-Enrichment-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Enrichment&lt;/a&gt; is when you refresh existing records so your prospecting data is up-to-date.&lt;br&gt;&lt;br&gt;Use the Organization Enrichment endpoint to enrich data for one company. To enrich data for up to ten companies with a single API call, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/bulk-organization-enrichment\&quot;&gt;Bulk Organization Enrichment endpoint&lt;/a&gt; instead.&lt;br&gt;&lt;br&gt;You can match the company to enrich by domain, LinkedIn URL, name, and/or website. At least one of these is required, and providing more than one improves match accuracy.&lt;br&gt;&lt;br&gt;Enriched data potentially includes industry information, revenue, employee counts, funding round details, corporate phone numbers, and locations.

### Example

```ts
import {
  Configuration,
  EnrichmentApi,
} from '';
import type { OrganizationEnrichmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EnrichmentApi(config);

  const body = {
    // string | The domain of the company that you want to enrich. Do not include `www.`, the `@` symbol, or similar. <br><br>At least one of `domain`, `linkedin_url`, `name`, or `website` is required. <br><br>Example: `apollo.io` or `microsoft.com` (optional)
    domain: domain_example,
    // string | The URL for the company\'s LinkedIn profile. <br><br>At least one of `domain`, `linkedin_url`, `name`, or `website` is required. <br><br>Example: `http://www.linkedin.com/company/apolloio` (optional)
    linkedinUrl: linkedinUrl_example,
    // string | The name of the company that you want to enrich. <br><br>At least one of `domain`, `linkedin_url`, `name`, or `website` is required. <br><br>Example: `apollo` (optional)
    name: name_example,
    // string | The full website URL of the company that you want to enrich. <br><br>At least one of `domain`, `linkedin_url`, `name`, or `website` is required. <br><br>Example: `http://www.apollo.io` (optional)
    website: website_example,
  } satisfies OrganizationEnrichmentRequest;

  try {
    const data = await api.organizationEnrichment(body);
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
| **domain** | `string` | The domain of the company that you want to enrich. Do not include &#x60;www.&#x60;, the &#x60;@&#x60; symbol, or similar. &lt;br&gt;&lt;br&gt;At least one of &#x60;domain&#x60;, &#x60;linkedin_url&#x60;, &#x60;name&#x60;, or &#x60;website&#x60; is required. &lt;br&gt;&lt;br&gt;Example: &#x60;apollo.io&#x60; or &#x60;microsoft.com&#x60; | [Optional] [Defaults to `undefined`] |
| **linkedinUrl** | `string` | The URL for the company\&#39;s LinkedIn profile. &lt;br&gt;&lt;br&gt;At least one of &#x60;domain&#x60;, &#x60;linkedin_url&#x60;, &#x60;name&#x60;, or &#x60;website&#x60; is required. &lt;br&gt;&lt;br&gt;Example: &#x60;http://www.linkedin.com/company/apolloio&#x60; | [Optional] [Defaults to `undefined`] |
| **name** | `string` | The name of the company that you want to enrich. &lt;br&gt;&lt;br&gt;At least one of &#x60;domain&#x60;, &#x60;linkedin_url&#x60;, &#x60;name&#x60;, or &#x60;website&#x60; is required. &lt;br&gt;&lt;br&gt;Example: &#x60;apollo&#x60; | [Optional] [Defaults to `undefined`] |
| **website** | `string` | The full website URL of the company that you want to enrich. &lt;br&gt;&lt;br&gt;At least one of &#x60;domain&#x60;, &#x60;linkedin_url&#x60;, &#x60;name&#x60;, or &#x60;website&#x60; is required. &lt;br&gt;&lt;br&gt;Example: &#x60;http://www.apollo.io&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**OrganizationEnrichment200Response**](OrganizationEnrichment200Response.md)

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


## peopleEnrichment

> PeopleEnrichment200Response peopleEnrichment(firstName, lastName, name, email, hashedEmail, organizationName, domain, id, linkedinUrl, runWaterfallEmail, runWaterfallPhone, revealPersonalEmails, revealPhoneNumber, webhookUrl)

People Enrichment

This endpoint consumes Apollo credits per enriched record when data is returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/33699917233293-Enrichment-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Enrichment&lt;/a&gt; is when you refresh existing records so your prospecting data is up-to-date.&lt;br&gt;&lt;br&gt;Use the People Enrichment endpoint to enrich data for one person. To enrich data for up to ten people with a single API call, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/bulk-people-enrichment\&quot;&gt;Bulk People Enrichment endpoint&lt;/a&gt; instead.&lt;br&gt;&lt;br&gt;Apollo relies on the information you pass via the endpoint\&#39;s parameters to identify the correct person to enrich. If you provide more information about a person, Apollo is more likely to find a match within its database. If you only provide general information, such as a name without a domain or email address, you might receive a &#x60;200&#x60; response, but the response indicates that no records have been enriched.&lt;br&gt;&lt;br&gt;By default, this endpoint doesn\&#39;t return personal emails or phone numbers. Use the &#x60;reveal_personal_emails&#x60; and &#x60;reveal_phone_number&#x60; parameters to retrieve emails and phone numbers.&lt;br&gt;&lt;br&gt;When you use &#x60;reveal_phone_number&#x60;, a valid &#x60;webhook_url&#x60; is required so Apollo can deliver the completed phone enrichment results. Apollo returns the main enrichment response synchronously, then sends the requested phone numbers to the webhook asynchronously. [See webhook details](#webhook-details).&lt;br&gt;&lt;br&gt;You can also use the &#x60;run_waterfall_email&#x60; and &#x60;run_waterfall_phone&#x60; parameters to run waterfall enrichment via this endpoint. [Waterfall enrichment](https://knowledge.apollo.io/hc/en-us/articles/34071089002509-Waterfall-Enrichment-Overview) gives you broader data coverage by checking connected third-party data sources for contact emails and phone numbers.&lt;br&gt;&lt;br&gt;When you call this endpoint and include at least one waterfall parameter, a valid &#x60;webhook_url&#x60; is required so Apollo can deliver the completed waterfall enrichment results. Apollo returns an immediate synchronous response with demographic and firmographic data, along with a waterfall enrichment request status. Apollo then delivers enriched emails or phone numbers asynchronously to the configured webhook.  ### Webhook Details  - When using Apollo enrichment for phone number reveal, the webhook response follows: [Native webhook response details](doc:retrieve-mobile-phone-numbers-for-contacts#webhook-response-details).  - When using waterfall enrichment, the webhook response follows: [Waterfall webhook response details](doc:enrich-phone-and-email-using-data-waterfall#response-details).  - You can poll webhook results with the [poll webhook result](doc:poll-webhook-result) endpoint by passing &lt;code&gt;request_id&lt;/code&gt;.  ### Webhook Requirements  - **HTTPS Required:** Your endpoint must be publicly accessible over HTTPS.  - **Rate Limiting:** Ensure your webhook endpoint can handle the volume of webhook traffic sent by Apollo.  - **Idempotency:** Apollo may retry webhook calls; your endpoint should be idempotent to handle duplicate payloads safely.

### Example

```ts
import {
  Configuration,
  EnrichmentApi,
} from '';
import type { PeopleEnrichmentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EnrichmentApi(config);

  const body = {
    // string | The first name of the person. This is typically used in combination with the `last_name` parameter. <br><br>Example: `tim` (optional)
    firstName: firstName_example,
    // string | The last name of the person. This is typically used in combination with the `first_name` parameter. <br><br>Example: `zheng` (optional)
    lastName: lastName_example,
    // string | The full name of the person. This will typically be a first name and last name separated by a space.  If you use this parameter, you do not need to use the `first_name` and `last_name` parameters. <br><br>Example: `tim zheng` (optional)
    name: name_example,
    // string | The email address of the person. <br><br>Example: `example@email.com` (optional)
    email: email_example,
    // string | The hashed email of the person. The email should adhere to either the MD5 or SHA-256 hash format. <br><br>Example: `8d935115b9ff4489f2d1f9249503cadf` (MD5) or `97817c0c49994eb500ad0a5e7e2d8aed51977b26424d508f66e4e8887746a152` (SHA-256) (optional)
    hashedEmail: hashedEmail_example,
    // string | The name of the person\'s employer. This can be the current employer or a previous employer. <br><br>Example: `apollo` (optional)
    organizationName: organizationName_example,
    // string | The domain name for the person\'s employer. This can be the current employer or a previous employer. Do not include `www.`, the `@` symbol, or similar. <br><br>Example: `apollo.io` or `microsoft.com` (optional)
    domain: domain_example,
    // string | The Apollo ID for the person. Each person in the Apollo database is assigned a unique ID. <br><br>To find IDs, call the <a href=\"https://docs.apollo.io/reference/people-api-search\" target=\"_blank\">People API Search endpoint</a> and identify the values for `person_id`. <br><br>Example: `587cf802f65125cad923a266` (optional)
    id: id_example,
    // string | The URL for the person\'s LinkedIn profile. <br><br>Example: `http://www.linkedin.com/in/tim-zheng-677ba010` (optional)
    linkedinUrl: linkedinUrl_example,
    // boolean | Set to true to enable email waterfall enrichment (optional)
    runWaterfallEmail: true,
    // boolean | Set to true to enable phone waterfall enrichment (optional)
    runWaterfallPhone: true,
    // boolean | Set to `true` if you want to enrich the person\'s data with personal emails. This potentially consumes credits as part of your <a href=\"https://docs.apollo.io/docs/api-pricing\" target=\"_blank\">Apollo pricing plan</a>. The default value is `false`. <br><br>If a person resides in a <a href=\"https://knowledge.apollo.io/hc/en-us/articles/4409141087757\" target=\"_blank\">GDPR</a>-compliant region, Apollo will not reveal their personal email. (optional)
    revealPersonalEmails: true,
    // boolean | Set to `true` if you want to enrich the person\'s data with all available phone numbers, including mobile phone numbers. This potentially consumes credits as part of your <a href=\"https://docs.apollo.io/docs/api-pricing\" target=\"_blank\">Apollo pricing plan</a>. The default value is `false`. <br><br>If this parameter is set to `true`, you must enter a webhook URL for the `webhook_url` parameter. Apollo will asynchronously verify phone numbers for you, then send a JSON response that includes only details about the person\'s phone numbers to the webhook URL you provide. It can take several minutes for the phone numbers to be delivered. (optional)
    revealPhoneNumber: true,
    // string | If you set the `reveal_phone_number` parameter to `true`, this parameter becomes mandatory. Otherwise, do not use this parameter. <br><br>Enter the webhook URL that specifies where Apollo should send a JSON response that includes the phone number you requested. Apollo suggests testing this flow to ensure you receive the separate response with the phone number. <br><br>If phone numbers are not revealed delivered to the webhook URL, try applying UTF-8 encoding to the webhook URL. <br><br>Example: `https://webhook.site/11f2643a-b1b4-c6be-8e6a-6c7da2c12610`; `https%3A%2F%2Fwebhook.site%2F11f2643a-b1b4-c6be-8e6a-6c7da2c12610` (optional)
    webhookUrl: webhookUrl_example,
  } satisfies PeopleEnrichmentRequest;

  try {
    const data = await api.peopleEnrichment(body);
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
| **firstName** | `string` | The first name of the person. This is typically used in combination with the &#x60;last_name&#x60; parameter. &lt;br&gt;&lt;br&gt;Example: &#x60;tim&#x60; | [Optional] [Defaults to `undefined`] |
| **lastName** | `string` | The last name of the person. This is typically used in combination with the &#x60;first_name&#x60; parameter. &lt;br&gt;&lt;br&gt;Example: &#x60;zheng&#x60; | [Optional] [Defaults to `undefined`] |
| **name** | `string` | The full name of the person. This will typically be a first name and last name separated by a space.  If you use this parameter, you do not need to use the &#x60;first_name&#x60; and &#x60;last_name&#x60; parameters. &lt;br&gt;&lt;br&gt;Example: &#x60;tim zheng&#x60; | [Optional] [Defaults to `undefined`] |
| **email** | `string` | The email address of the person. &lt;br&gt;&lt;br&gt;Example: &#x60;example@email.com&#x60; | [Optional] [Defaults to `undefined`] |
| **hashedEmail** | `string` | The hashed email of the person. The email should adhere to either the MD5 or SHA-256 hash format. &lt;br&gt;&lt;br&gt;Example: &#x60;8d935115b9ff4489f2d1f9249503cadf&#x60; (MD5) or &#x60;97817c0c49994eb500ad0a5e7e2d8aed51977b26424d508f66e4e8887746a152&#x60; (SHA-256) | [Optional] [Defaults to `undefined`] |
| **organizationName** | `string` | The name of the person\&#39;s employer. This can be the current employer or a previous employer. &lt;br&gt;&lt;br&gt;Example: &#x60;apollo&#x60; | [Optional] [Defaults to `undefined`] |
| **domain** | `string` | The domain name for the person\&#39;s employer. This can be the current employer or a previous employer. Do not include &#x60;www.&#x60;, the &#x60;@&#x60; symbol, or similar. &lt;br&gt;&lt;br&gt;Example: &#x60;apollo.io&#x60; or &#x60;microsoft.com&#x60; | [Optional] [Defaults to `undefined`] |
| **id** | `string` | The Apollo ID for the person. Each person in the Apollo database is assigned a unique ID. &lt;br&gt;&lt;br&gt;To find IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/people-api-search\&quot; target&#x3D;\&quot;_blank\&quot;&gt;People API Search endpoint&lt;/a&gt; and identify the values for &#x60;person_id&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;587cf802f65125cad923a266&#x60; | [Optional] [Defaults to `undefined`] |
| **linkedinUrl** | `string` | The URL for the person\&#39;s LinkedIn profile. &lt;br&gt;&lt;br&gt;Example: &#x60;http://www.linkedin.com/in/tim-zheng-677ba010&#x60; | [Optional] [Defaults to `undefined`] |
| **runWaterfallEmail** | `boolean` | Set to true to enable email waterfall enrichment | [Optional] [Defaults to `false`] |
| **runWaterfallPhone** | `boolean` | Set to true to enable phone waterfall enrichment | [Optional] [Defaults to `false`] |
| **revealPersonalEmails** | `boolean` | Set to &#x60;true&#x60; if you want to enrich the person\&#39;s data with personal emails. This potentially consumes credits as part of your &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/api-pricing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Apollo pricing plan&lt;/a&gt;. The default value is &#x60;false&#x60;. &lt;br&gt;&lt;br&gt;If a person resides in a &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409141087757\&quot; target&#x3D;\&quot;_blank\&quot;&gt;GDPR&lt;/a&gt;-compliant region, Apollo will not reveal their personal email. | [Optional] [Defaults to `false`] |
| **revealPhoneNumber** | `boolean` | Set to &#x60;true&#x60; if you want to enrich the person\&#39;s data with all available phone numbers, including mobile phone numbers. This potentially consumes credits as part of your &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/api-pricing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Apollo pricing plan&lt;/a&gt;. The default value is &#x60;false&#x60;. &lt;br&gt;&lt;br&gt;If this parameter is set to &#x60;true&#x60;, you must enter a webhook URL for the &#x60;webhook_url&#x60; parameter. Apollo will asynchronously verify phone numbers for you, then send a JSON response that includes only details about the person\&#39;s phone numbers to the webhook URL you provide. It can take several minutes for the phone numbers to be delivered. | [Optional] [Defaults to `false`] |
| **webhookUrl** | `string` | If you set the &#x60;reveal_phone_number&#x60; parameter to &#x60;true&#x60;, this parameter becomes mandatory. Otherwise, do not use this parameter. &lt;br&gt;&lt;br&gt;Enter the webhook URL that specifies where Apollo should send a JSON response that includes the phone number you requested. Apollo suggests testing this flow to ensure you receive the separate response with the phone number. &lt;br&gt;&lt;br&gt;If phone numbers are not revealed delivered to the webhook URL, try applying UTF-8 encoding to the webhook URL. &lt;br&gt;&lt;br&gt;Example: &#x60;https://webhook.site/11f2643a-b1b4-c6be-8e6a-6c7da2c12610&#x60;; &#x60;https%3A%2F%2Fwebhook.site%2F11f2643a-b1b4-c6be-8e6a-6c7da2c12610&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**PeopleEnrichment200Response**](PeopleEnrichment200Response.md)

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
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

