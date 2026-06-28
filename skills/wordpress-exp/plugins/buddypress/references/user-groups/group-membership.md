# Group Membership

## Topics

- Schema
- List the Group Members
- Add a specific Member into a Group
- Promote or demote a specific Group Member
- Remove a specific Group Member

## Schema

The schema defines all the fields that exist for a group member object.

| Field | Type | Description |
| --- | --- | --- |
| id | integer | Unique identifier for the member.<br>Read only<br>Context: embed, view, edit |
| name | string | Display name for the member.<br>Context: embed, view, edit |
| mention_name | string | The name used for that user in @-mentions.<br>Context: embed, view, edit |
| link | string, uri | Profile URL of the member.<br>Read only<br>Context: embed, view, edit |
| user_login | string | A numeric identifier for the member.<br>Required<br>Context: embed, view, edit |
| member_types | array | Member types associated with the member.<br>Read only<br>Context: embed, view, edit |
| registered_date | string or null | Registration date for the member, in the site's timezone.<br>Read only<br>Context: edit |
| registered_date_gmt | string or null | Registration date for the member, as GMT.<br>Read only<br>Context: edit |
| password | string | Password for the member (never included).<br>Required<br>Context: none |
| roles | array | Roles assigned to the member.<br>Context: edit |
| capabilities | object | All capabilities assigned to the member.<br>Read only<br>Context: edit |
| extra_capabilities | object | All capabilities assigned to the member.<br>Read only<br>Context: edit |
| xprofile (1) | array | Member XProfile groups and its fields.<br>Read only<br>Context: view, edit |
| friendship_status (2) | boolean | Whether the logged in user has a friendship relationship with the fetched user.<br>Read only<br>Context: view, edit |
| friendship_status_slug (2) | string | Slug of the friendship relationship status the logged in user has with the fetched user.<br>Read only<br>One of: is_friend, not_friends, pending, awaiting_response<br>Context: view, edit |
| avatar_urls (3) | object | Avatar URLs for the member (Full & Thumb sizes).<br>Read only<br>Context: embed, view, edit |
| is_confirmed | integer | 1 if the membership of this user has been confirmed, 0 otherwise.<br>Context: view, edit<br>One of: 0, 1 |
| is_mod | integer | 1 if this member is a Group moderator, 0 otherwise.<br>Context: view, edit<br>One of: 0, 1 |
| is_admin | integer | 1 if this member is a Group administrator, 0 otherwise.<br>Context: view, edit<br>One of: 0, 1 |
| is_banned | integer | 1 if this member has been banned from the Group, 0 otherwise.<br>Context: view, edit<br>One of: 0, 1 |
| date_modified | string or null | The date of the last time the membership of this user was modified, in the site's timezone.<br>Read only<br>Context: view, edit |
| date_modified_gmt | string or null | The date of the last time the membership of this user was modified, as GMT.<br>Read only<br>Context: view, edit |

(1) Data is only fetched if the xProfile component is active

(2) Data is only fetched if the Friends component is active

(3) Only if the WordPress discussion settings allow avatars.

## List the Group Members

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| group_id | integer | A unique numeric ID for the Group.<br>Required |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: view<br>One of: view, embed, edit |
| page | integer | Current page of the collection.<br>Default: 1 |
| per_page | integer | Maximum number of Group members to be returned in result set.<br>Default: 10 |
| search | string | Limit results to members name matching a string. |
| status | string | Sort the order of results by the status of the group members.<br>Default: last_joined<br>One of: last_joined, first_joined, alphabetical, group_activity (1) |
| roles | array | Ensure result set includes specific Group roles.<br>Default: []<br>One or more of: admin, mod, member, banned |
| exclude | array | Ensure result set excludes specific member IDs.<br>Default: [] |
| exclude_admins | boolean | Whether results should exclude group admins and mods.<br>Default: true |
| exclude_banned | boolean | Whether results should exclude banned group members.<br>Default: true |

(1) The group_activity status is only available if the Activity BuddyPress component is active.

### Definition

`GET /buddypress/v1/groups/<group_id>/members`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/4/members',
  type: 'GET',
  data: {
    context: 'view',
    exclude_admins: false
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Add a specific Member into a Group

> Note: To make a logged in user join a public Group, you need to use the view context. In this case the role argument is not available and the user is added to the Group as a member.

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| group_id | integer | A unique numeric ID for the Group.<br>Required |
| user_id | integer | A unique numeric ID for the Member to add to the Group.<br>Required<br>Default: the logged in user ID |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: edit<br>One of: view, embed, edit |
| role | string | Group role to assign the user to.<br>Default: member<br>One of: admin, mod, member |

### Definition

`POST /buddypress/v1/groups/<group_id>/members`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/5/members',
  type: 'POST',
  data: {
    context: 'edit',
    user_id: 3
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Promote or demote a specific Group Member

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| group_id | integer | A unique numeric ID for the Group.<br>Required |
| user_id | integer | A unique numeric ID for the Group Member.<br>Required |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: edit<br>One of: view, embed, edit |
| role | string | Group role to assign the user to.<br>Default: member<br>One of: admin, mod, member |
| action | string | Action used to update a group member.<br>Default: promote<br>One of: promote, demote, ban, unban |

### Definition

`PUT /buddypress/v1/groups/<group_id>/members/<user_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/5/members/3',
  type: 'PUT',
  data: {
    context: 'edit',
    role: 'mod',
    action: 'promote'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Remove a specific Group Member

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| group_id | integer | A unique numeric ID for the Group.<br>Required |
| user_id | integer | A unique numeric ID for the Group Member.<br>Required |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: edit<br>One of: view, embed, edit |

### Definition

`DELETE /buddypress/v1/groups/<group_id>/members/<user_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/5/members/3',
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
