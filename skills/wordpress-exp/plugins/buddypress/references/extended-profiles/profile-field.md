# Profile Field

## Schema

The schema defines all the fields that exist for a profile field object.

id

integer	A unique numeric ID for the profile field.
Read only
Context: view, edit

group_id

integer	The ID of the group the profile field is part of.
Context: view, edit

parent_id

integer	The ID of the parent field.
Context: view, edit

type

string	The form element used by the profile field.
Context: view, edit
One of: checkbox, datebox, multiselectbox, number, url, radio, selectbox, textarea, textbox, telephone, option (1)

name

string	The name of the profile field.
Context: view, edit

description

object	The raw and rendered descriptions of the profile field.
Context: view, edit

is_required

boolean	Whether the profile field must have a value or not.
Context: view, edit

can_delete

boolean	Whether the profile field can be deleted or not.
Default: true
Context: view, edit

field_order

integer	The order of the profile field within the group of profile fields.
Context: view, edit

option_order

integer	The order of the option within the profile field's list of options.
Context: view, edit

order_by

string	How the options of a profile field are sorted.
Context: view, edit
Default: asc
One of: asc, desc

is_default_option

boolean	Whether the option is the default one for the profile field.
Context: view, edit

visibility_level

string	Who may see the saved value for this profile field.
Context: view, edit
Default: public
One of: public, adminsonly, loggedin, friends (1)

options

array	Options of the profile field.
Read only.
Context: view, edit

data

object	The raw, unserialized and rendered values for this profile field.
Context: view, edit
More details about the value object.

(1) This is the list of BuddyPress built-in Profile field types. Please note that BuddyPress plugins can extend this list.

(2) The friends visibility level is only available when the Friend Connections component is active.

## List profile fields

### Arguments

Name	Type	Description
context	string	Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit
page	integer	Current page of the collection.
Default: 1
per_page	integer	Maximum number of profile fields to be returned in the result set.
Default: 10
search	string	Limit results to those matching a string.
profile_group_id	integer	ID of the profile group that has profile fields.
hide_empty_groups	boolean	Whether to hide profile groups that do not have any profile fields or not.
Default: false
user_id	integer	Required if you want to load a specific user's data.
Default: the logged in user ID.
member_type	array	Limit profile fields to those restricted to a given member type, or array of member types. If the $user_id is provided, then the value of $member_type will be overridden by the member types of that user. The special value of 'any' will return only those fields that are unrestricted by member type -- i.e., those applicable to any type.
Default: []
hide_empty_fields	boolean	Whether to hide profile fields where the user has not provided data or not.
Default: false
fetch_field_data	boolean	Whether to fetch data for each profile field. Requires a $user_id.
Default: false
fetch_visibility_level	boolean	Whether to fetch the visibility level for each field.
Default: false
signup_fields_only	boolean	Whether to only return signup fields.
Default: false
exclude_groups	array	Ensure result set excludes specific profile field groups.
Default: []
exclude_fields	array	Ensure result set excludes specific profile fields.
Default: []
update_meta_cache	boolean	Whether to pre-fetch xprofilemeta for all retrieved groups, fields, and data.
Default: true

### Definition

GET /buddypress/v1/xprofile/fields

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/fields',
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

## Create a profile field

### Arguments

Name	Type	Description
group_id	integer	The ID of the group the field is part of.
Required
parent_id	integer	The ID of the parent field.
type	string	The form element of the profile field.
Required
One of: checkbox, datebox, multiselectbox, number, url, radio, selectbox, textarea, textbox, telephone, option
name	string	The name of the profile field.
Required
description	string	The description of the profile field.
is_required	boolean	Whether the profile field must have a value.
can_delete	boolean	Whether the profile field can be deleted or not.
Default: true
field_order	integer	The order of the profile field within the group of profile fields.
option_order	integer	The order of the option within the profile field's list of options.
order_by	string	How the options of a profile field are sorted.
Default: asc
One of: asc, desc
is_default_option	boolean	Whether the option is the default one for the profile field.
default_visibility	string	Default visibility for the profile field.
Default: public
One of: public, adminsonly, loggedin, friends
allow_custom_visibility	string	Whether to allow members to set the visibility for the profile field data or not.
Default: allowed
One of: allowed, disabled
do_autolink	string	Autolink status for this profile field.
Default: off
One of: on, off

### Definition

POST /buddypress/v1/xprofile/fields

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/fields',
  type: 'POST',
  data: {
    context: 'edit',
    group_id: 2,                    // Required
    type: 'textbox',                // Required
    name: 'BuddyPress.org username' // Required
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific profile field

### Arguments

Name	Type	Description
id	integer	A unique numeric ID for the profile field.
Required
user_id	integer	Required if you want to load a specific user's data.
Default: 0
fetch_field_data	boolean	Whether to fetch data for the field. Requires $user_id.
Default: false

### Definition

GET /buddypress/v1/xprofile/fields/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/fields/5',
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

## Update a specific profile field

### Arguments

Name	Type	Description
id	integer	A unique numeric ID for the profile field.
Required
group_id	integer	The ID of the profile group the profile field is part of.
parent_id	integer	The ID of the parent profile field.
type	string	The form element used by the profile field.
One of: checkbox, datebox, multiselectbox, number, url, radio, selectbox, textarea, textbox, telephone, option
name	string	The name of the profile field.
description	string	The description of the profile field.
is_required	boolean	Whether the profile field must have a value.
can_delete	boolean	Whether the profile field can be deleted or not.
Default: true
field_order	integer	The order of the profile field within the group of profile fields.
option_order	integer	The order of the option within the profile field's list of options.
order_by	string	How the options of a profile field are sorted.
Default: asc
One of: asc, desc
is_default_option	boolean	Whether the option is the default one for the profile field.
default_visibility	string	Default visibility for the profile field.
Default: public
One of: public, adminsonly, loggedin, friends
allow_custom_visibility	string	Whether to allow members to set the visibility for the profile field data or not.
Default: allowed
One of: allowed, disabled
do_autolink	string	Autolink status for this profile field.
Default: off
One of: on, off

### Definition

PUT /buddypress/v1/xprofile/fields/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/fields/5',
  type: 'PUT',
  data: {
    context: 'edit',
    description: 'The username you used to register on BuddyPress.org'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Delete a specific profile field

### Arguments

Name	Type	Description
id	integer	A unique numeric ID for the profile field.
Required
delete_data	boolean	Required if you want to delete users data for the field.
Default: false

### Definition

DELETE /buddypress/v1/xprofile/fields/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/fields/5',
  type: 'DELETE',
  data: {
    context: 'edit',
    delete_data: true
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```
