# Group Membership Requests

## Topics

- Schema
- List the Group Membership Requests
- Request a Group Membership
- Retrieve a specific Group Membership Request
- Accept a Group Membership Request
- Reject or cancel a Group Membership Request

## Schema

The schema defines all the fields that exist for a group membership request object.

| Field | Type | Description |
| --- | --- | --- |
| id | integer | A unique numeric ID for the BP Invitation object.<br>Read only<br>Context: view, edit |
| user_id | integer | The ID of the user who requested a Group membership.<br>Context: view, edit |
| group_id | integer | The ID of the group the user requested a membership for.<br>Context: view, edit |
| date_modified | string, date-time | The date the object was created or last updated, in the site's timezone.<br>Context: view, edit |
| type | string | A request for membership to a private group.<br>Context: view, edit<br>Default: request<br>One of: invite, request |
| message | string | The raw and rendered versions for the content of the message.<br>Context: view, edit |

## List the Group Membership Requests

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: view<br>One of: view, edit |
| page | integer | Current page of the collection.<br>Default: 1 |
| per_page | integer | Maximum number of items to be returned in result set.<br>Default: 10 |
| group_id | integer | The ID of the group the user requested a membership for. |
| user_id | integer | Return only Membership requests made by a specific user. |

### Definition

`GET /buddypress/v1/groups/membership-requests`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/membership-requests',
  type: 'GET',
  data: {
    context: 'view'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Request a Group Membership

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| user_id | integer | The ID of the user who requested a Group membership.<br>Default: the logged in user ID |
| group_id | integer | The ID of the group the user requested a membership for.<br>Required |
| message | string | The optional message the user requesting membership to private group sends to the group administrator. |

### Definition

`POST /buddypress/v1/groups/membership-requests`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/membership-requests',
  type: 'POST',
  data: {
    context: 'edit',
    group_id: 30
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific Group Membership Request

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| request_id | integer | A unique numeric ID for the group membership request.<br>Required |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: view<br>One of: view, edit |

### Definition

`GET /buddypress/v1/groups/membership-requests/<request_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/membership-requests/12',
  type: 'GET',
  data: {
    context: 'view'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Accept a Group Membership Request

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| request_id | integer | A unique numeric ID for the group membership request.<br>Required |

### Definition

`PUT /buddypress/v1/groups/membership-requests/<request_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/membership-requests/12',
  type: 'PUT',
  data: {
    context: 'edit'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Reject or cancel a Group Membership Request

> Note: If the logged in user is the one who requested a Group membership, using this endpoint will cancel it. Otherwise it will reject it.

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| request_id | integer | A unique numeric ID for the group membership request.<br>Required |

### Definition

`DELETE /buddypress/v1/groups/membership-requests/<request_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/membership-requests/12',
  type: 'DELETE',
  data: {
    context: 'edit'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```
