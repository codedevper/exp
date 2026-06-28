# Group Invites

## Topics

- Schema
- List the Group Invites
- Invite a user to join a Group
- Retrieve a specific Group Invite
- Accept a specific Group Invite
- Reject or remove a specific Group Invite

## Schema

The schema defines all the fields that exist for a group invite object.

| Field | Type | Description |
| --- | --- | --- |
| id | integer | A unique numeric ID for the BP Invitation object.<br>Read only<br>Context: view, edit |
| user_id | integer | The ID of the user who is invited to join the Group.<br>Context: view, edit |
| invite_sent | boolean | Whether the invite has been sent to the invitee.<br>Context: view, edit |
| inviter_id | integer | The ID of the user who made the invite.<br>Context: view, edit |
| group_id | integer | The ID of the group to which the user has been invited.<br>Context: view, edit |
| date_modified | string or null | The date the object was created or last updated, in the site's timezone.<br>Read only<br>Context: view, edit |
| date_modified_gmt | string or null | The date the object was created or last updated, as GMT.<br>Read only<br>Context: view, edit |
| type | string | Invitation or request.<br>Context: view, edit<br>Default: invite<br>One of: invite, request |
| message | object | The raw and rendered versions for the content of the message.<br>Context: view, edit |

## List the Group Invites

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: view<br>One of: view, edit |
| page | integer | Current page of the collection.<br>Default: 1 |
| per_page | integer | Maximum number of items to be returned in result set.<br>Default: 10 |
| group_id | integer | ID of the group to limit results to.<br>Default: 0 |
| user_id | integer | Return only invitations extended to this user.<br>Default: 0 |
| inviter_id | integer | Return only invitations extended by this user.<br>Default: 0 |
| invite_sent | string | Limit result set to invites that have been sent, not sent, or include all.<br>Default: sent<br>One of: draft, sent, all |

### Definition

`GET /buddypress/v1/groups/invites`

### Example of Use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/invites',
  type: 'GET',
  data: {
    context: 'view',
    group_id: 3
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Invite a user to join a Group

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| user_id | integer | The ID of the user who is invited to join the Group.<br>Required |
| inviter_id | integer | The ID of the user who made the invite.<br>Default: the current logged in user ID. |
| group_id | integer | The ID of the group to which the user has been invited.<br>Required |
| message | string | The optional message to send to the invited user. |
| send_invite | boolean | Whether the invite should be sent to the invitee.<br>Default: true |

### Definition

`POST /buddypress/v1/groups/invites`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/invites',
  type: 'POST',
  data: {
    context: 'edit',
    user_id: 13,
    group_id: 7,
    message: 'Join the BuddyPress Contributors Group'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific Group Invite

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| invite_id | integer | A unique numeric ID for the group invitation.<br>Required |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: view<br>One of: view, edit |

### Definition

`GET /buddypress/v1/groups/invites/<invite_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/invites/5',
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

## Accept a specific Group Invite

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| invite_id | integer | A unique numeric ID for the group invitation.<br>Required |

### Definition

`PUT /buddypress/v1/groups/invites/<invite_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/invites/5',
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

## Reject or remove a specific Group Invite

> Note: If the invited user is the logged in user then the Group Invite will be rejected. Otherwise the uninvite action will be used.

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| invite_id | integer | A unique numeric ID for the group invitation.<br>Required |

### Definition

`DELETE /buddypress/v1/groups/invites/<invite_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/invites/5',
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
