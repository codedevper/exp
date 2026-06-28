# Profile Data

## Schema

The schema defines all the fields that exist for a profile data object.

id

integer	A unique numeric ID for the profile data.
Read only
Context: view, edit

field_id

integer	The ID of the field the data is from.
Read only
Context: view, edit

user_id

integer	The ID of the user the field data is from.
Read only
Context: view, edit

value

object	The raw, unserialized and rendered values for this profile field.
Context: view, edit

last_updated

string or null	The date the field data was last updated, in the site's timezone.
Read only
Context: view, edit

last_updated_gmt

string or null	The date the field data was last updated, as GMT.
Read only
Context: view, edit

Note: Depending on the field type, the field value can be stored in database as a serialized array or as a regular string. For example: in the case of a checkbox the user can select multiple options. To make sure data types returned by the BP REST API are consistent, the value property is an object containing:
- the raw value: the string as it exists into the database
- the unserialized value: an array containing the field value or the list of options selected for fields supporting multiple values (eg: checkbox)
- the rendered value: an HTML string as it would be output on the front-end of the site.

## Retrieve a specific Profile Data

### Arguments

Name	Type	Description
field_id	integer	The ID of the profile field the data is from.
Required
user_id	integer	The ID of the user the field data is from.
Required

### Definition

GET /buddypress/v1/xprofile/<field_id>/data/<user_id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/6/data/1',
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

## Save a specific Profile Data

### Arguments

Name	Type	Description
field_id	integer	The ID of the field the data is from.
Required
user_id	integer	The ID of the user the field data is from.
Required
value	string	The value(s) (comma separated list of values needs to be used in case of multiple values) for the field data.
Required

### Definition

POST /buddypress/v1/xprofile/<field_id>/data/<user_id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/6/data/1',
  type: 'POST',
  data: {
    context: 'edit',
    value: 'First value,Second value'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Delete a specific Profile Data

### Arguments

Name	Type	Description
field_id	integer	The ID of the profile field the data is from.
Required
user_id	integer	The ID of the user the field data is from.
Required

### Definition

DELETE /buddypress/v1/xprofile/<field_id>/data/<user_id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/xprofile/6/data/1',
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
