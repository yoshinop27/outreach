# EmailerMessagesApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkEmailSendStatus**](EmailerMessagesApi.md#checkemailsendstatusoperation) | **POST** /emailer_messages/email_send_status | Check Email Send Status |
| [**createAnEmailDraft**](EmailerMessagesApi.md#createanemaildraftoperation) | **POST** /emailer_messages | Create an Email Draft |
| [**sendEmailNow**](EmailerMessagesApi.md#sendemailnowoperation) | **POST** /emailer_messages/{id}/send_now | Send Email Now |



## checkEmailSendStatus

> CheckEmailSendStatus200Response checkEmailSendStatus(checkEmailSendStatusRequest)

Check Email Send Status

Use the Check Email Send Status endpoint to check the current delivery status of an email message. This is typically used after calling the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/send-email-now\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Send Email Now endpoint&lt;/a&gt;, since emails are sent asynchronously and a successful send response only means the email was queued. &lt;br&gt;&lt;br&gt;You must provide the &#x60;id&#x60; of the email message. The message must belong to your team, otherwise a &#x60;404&#x60; is returned. &lt;br&gt;&lt;br&gt;The response always includes the message &#x60;id&#x60;, its current &#x60;status&#x60;, and a human-readable &#x60;message&#x60;. The remaining fields depend on the status: &lt;ul&gt; &lt;li&gt; If the email was delivered (&#x60;completed&#x60;), a &#x60;completed_at&#x60; timestamp is included. &lt;/li&gt; &lt;li&gt; If the email failed (&#x60;failed&#x60;), a &#x60;not_sent_reason&#x60;, &#x60;failure_reason&#x60;, and &#x60;failed_at&#x60; timestamp may be included. &lt;/li&gt; &lt;li&gt; If the email is still being processed (e.g. &#x60;drafted&#x60; or &#x60;scheduled&#x60;), a &#x60;retry_after_seconds&#x60; value is included to indicate how long to wait before checking again. &lt;/li&gt; &lt;/ul&gt;

### Example

```ts
import {
  Configuration,
  EmailerMessagesApi,
} from '';
import type { CheckEmailSendStatusOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailerMessagesApi(config);

  const body = {
    // CheckEmailSendStatusRequest
    checkEmailSendStatusRequest: {"id":"66e8cc45028aed019c25d724"},
  } satisfies CheckEmailSendStatusOperationRequest;

  try {
    const data = await api.checkEmailSendStatus(body);
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
| **checkEmailSendStatusRequest** | [CheckEmailSendStatusRequest](CheckEmailSendStatusRequest.md) |  | |

### Return type

[**CheckEmailSendStatus200Response**](CheckEmailSendStatus200Response.md)

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
| **404** | 404 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAnEmailDraft

> CreateAnEmailDraft200Response createAnEmailDraft(createAnEmailDraftRequest)

Create an Email Draft

Use the Create an Email Draft endpoint to create a single, unsent email message (an email draft) for a contact. The draft is created with a &#x60;drafted&#x60; status — this endpoint does not send the email. &lt;br&gt;&lt;br&gt;To send the draft after creating it, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/send-email-now\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Send Email Now endpoint&lt;/a&gt; with the &#x60;id&#x60; returned in the response. &lt;br&gt;&lt;br&gt;You must provide a &#x60;contact_id&#x60; so Apollo knows who the email is for. Alternatively, to draft a reply within an existing email thread, provide &#x60;in_response_to_emailer_message_id&#x60; instead and Apollo will infer the contact and recipients from the parent message. &lt;br&gt;&lt;br&gt;The email is drafted from the user that owns the API key. That user must have permission to email the contact (i.e. they own the contact or its account), and the contact must not be blocked by your team\&#39;s Do Not Contact (DNC) enforcement settings. &lt;br&gt;&lt;br&gt;This endpoint returns the created &#x60;emailer_message&#x60; object. If the draft is linked to an outreach task, a &#x60;task&#x60; object is also returned.

### Example

```ts
import {
  Configuration,
  EmailerMessagesApi,
} from '';
import type { CreateAnEmailDraftOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailerMessagesApi(config);

  const body = {
    // CreateAnEmailDraftRequest
    createAnEmailDraftRequest: {"contact_id":"66e34b81740c50074e3d1bd4","subject":"Quick question about your team's workflow","body_html":"<p>Hi Ava, I wanted to reach out about how Apollo can help your team.</p>","recipients":[{"email":"ava.ruiz@sumware.com","contact_id":"66e34b81740c50074e3d1bd4","recipient_type_cd":"to"}],"enable_tracking":true},
  } satisfies CreateAnEmailDraftOperationRequest;

  try {
    const data = await api.createAnEmailDraft(body);
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
| **createAnEmailDraftRequest** | [CreateAnEmailDraftRequest](CreateAnEmailDraftRequest.md) |  | |

### Return type

[**CreateAnEmailDraft200Response**](CreateAnEmailDraft200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendEmailNow

> SendEmailNow200Response sendEmailNow(id, sendEmailNowRequest)

Send Email Now

Use the Send Email Now endpoint to immediately send an existing email message. This works for emails that are currently in a &#x60;drafted&#x60;, &#x60;scheduled&#x60;, or &#x60;failed&#x60; state — Apollo schedules the email to be sent right away and processes it asynchronously. &lt;br&gt;&lt;br&gt;To first create an email draft, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-an-email-draft\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Create an Email Draft endpoint&lt;/a&gt; and then pass the returned &#x60;id&#x60; to this endpoint. &lt;br&gt;&lt;br&gt;The email is sent from the user that owns the API key. That user must have a linked email account on the message, must have permission to send from that email account, and must have permission to email the contact. The contact must also not be blocked by your team\&#39;s Do Not Contact (DNC) enforcement settings, and the user must not have exceeded their daily sending limit. &lt;br&gt;&lt;br&gt;Because sending is processed asynchronously, a successful &#x60;200&#x60; response means the email has been queued for sending — not that it has been delivered. To check whether the email was delivered, poll the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/check-email-send-status\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Check Email Send Status endpoint&lt;/a&gt; using the message &#x60;id&#x60;. &lt;br&gt;&lt;br&gt;This endpoint returns the &#x60;emailer_message&#x60; object. If the message is linked to an outreach task, a &#x60;task&#x60; object is also returned.

### Example

```ts
import {
  Configuration,
  EmailerMessagesApi,
} from '';
import type { SendEmailNowOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailerMessagesApi(config);

  const body = {
    // string | The Apollo ID of the email message to send. This is the `id` returned when you create an email draft. <br><br>Example: `66e8cc45028aed019c25d724`
    id: id_example,
    // SendEmailNowRequest (optional)
    sendEmailNowRequest: {"surface":"emails"},
  } satisfies SendEmailNowOperationRequest;

  try {
    const data = await api.sendEmailNow(body);
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
| **id** | `string` | The Apollo ID of the email message to send. This is the &#x60;id&#x60; returned when you create an email draft. &lt;br&gt;&lt;br&gt;Example: &#x60;66e8cc45028aed019c25d724&#x60; | [Defaults to `undefined`] |
| **sendEmailNowRequest** | [SendEmailNowRequest](SendEmailNowRequest.md) |  | [Optional] |

### Return type

[**SendEmailNow200Response**](SendEmailNow200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

