# Profile Group

## Schema

The schema defines all the fields that exist for a profile group object.

id

integer	A unique numeric ID for the group of profile fields.
Read only
Context: view, edit

name

string	The name of the group of profile fields.
Context: view, edit

description

object	The raw and rendered descriptions of the group of profile fields.
Context: view, edit

group_order

integer	The order of the group of profile fields.
Context: view, edit

can_delete

boolean	Whether the group of profile fields can be deleted or not.
Context: view, edit

fields

array	The list of profile fields object attached to the group of profile fields.
Context: view, edit

## List groups of profile fields

### Arguments

Name	Type	Description
context	string	Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit
page	integer	Current page of the collection of groups of profile fields.
Default: 1
per_page	integer	Maximum number of groups of profile fields to be returned in result set.
Default: 10
search	string	Limit results to those matching a string.
profile_group_id	integer	ID of the group of profile fields that has fields.
hide_empty_groups	boolean	Whether to hide profile groups that do not have any profile fields or not.
Default: false
user_id	integer	Needed if you want to load a specific user's data.
Default: the logged in user ID.
member_type	array	Limit fields by those restricted to a given member type, or array of member types. If $user_id is provided, the value of $member_type will be overridden by the member types of the provided user. The special value of 'any' will return only those fields that are unrestricted by member type -- i.e., those applicable to any type.
Default: []
hide_empty_fields	boolean	Whether to hide profile fields of profile groups that do not have any content or not.
Default: false
fetch_fields	boolean	Whether to fetch the profile fields for each profile group.
Default: false
fetch_field_data	boolean	Whether to fetch data for each profile field. Requires a $user_id.
Default: false
fetch_visibility_level	boolean	Whether to fetch the visibility level for each profile field.
Default: false
signup_fields_only	boolean	Whether to only return signup fields.
Default: false
exclude_groups	array	Ensure result set excludes specific groups of profile fields.
Default: []
exclude_fields	array	Ensure result set excludes specific profile fields.
Default: []
update_meta_cache	boolean	Whether to pre-fetch xprofile metadata for all retrieved groups, fields, and data.
Default: true

### Definition

GET /buddypress/v1/xprofile/groups

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/groups',
  type: 'GET',
  data: {
    context: 'view',
    fetch_fields: true,
    signup_fields_only: true
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Create a group of profile fields

### Arguments

Name	Type	Description
name	string	The name of the group of profile fields.
Required
description	string	The description of the group of profile fields.
can_delete	boolean	Whether the group of profile fields can be deleted or not.
Default: true

### Definition

POST /buddypress/v1/xprofile/groups

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/groups',
  type: 'POST',
  data: {
    context: 'edit',
    name: 'Skills',
    description: 'Information about your skills'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific group of profile fields

### Arguments

Name	Type	Description
id	integer	A unique numeric ID for the group of profile fields.
Required

### Definition

GET /buddypress/v1/xprofile/groups/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/groups/3',
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

## Update a specific group of profile fields

### Arguments

Name	Type	Description
id	integer	A unique numeric ID for the group of profile fields.
Required
name	string	The name of the group of profile fields.
description	string	The description of the group of profile fields.
group_order	integer	The order of the group of profile fields.
can_delete	boolean	Whether the group of profile fields can be deleted or not.

### Definition

PUT /buddypress/v1/xprofile/groups/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/groups/3',
  type: 'PUT',
  data: {
    context: 'edit',
    group_order: 1
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Delete a group of profile fields

### Arguments

Name	Type	Description
id	integer	A unique numeric ID for the group of profile fields.
Required

### Definition

DELETE /buddypress/v1/xprofile/groups/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/groups/3',
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
