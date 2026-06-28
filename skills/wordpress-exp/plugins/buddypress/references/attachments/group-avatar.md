# Group Avatar

## Topics

- Schema
- Retrieve the Avatar of a Group
  - Arguments
  - Definition
  - Example of use
- Attach an Avatar to a Group
  - Arguments
  - Definition
  - Example of use
- Delete the Avatar of a Group
  - Arguments
  - Definition
  - Example of use

## Schema

The schema defines all the fields that exist for a group avatar object.

| Field | Type | Description |
| ----- | ---- | ----------- |
| full | string, uri | Full size of the image file. Read only. Context: view, edit |
| thumb | string, uri | Thumb size of the image file. Read only. Context: view, edit |

## Retrieve the Avatar of a Group

### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| group_id | integer | A unique numeric ID for the Group. Required |
| context | string | Scope under which the request is made; determines fields present in response. Default: view. One of: view, edit |
| html | boolean | Whether to return an `<img>` HTML element, vs a raw URL to a group avatar. Default: false |
| alt | string | The alt attribute for the `<img>` element. Default: [] |

### Definition

`GET /buddypress/v1/groups/<group_id>/avatar`

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/3/avatar',
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

## Attach an Avatar to a Group

### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| group_id | integer | A unique numeric ID for the Group. Required |

Alert: The file input name to use to upload the file must be file and the form action must be bp_avatar_upload.

### Definition

`POST /buddypress/v1/groups/<group_id>/avatar`

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
( function( $ ){
    // Listen to the injected File Input's change.
    $( '#main article .entry-content' ).on( 'change', 'input[type="file"]', function( event ) {
        var formData = new FormData();

        if ( ! event.currentTarget.files || ! event.currentTarget.files[0] ) {
            return;
        }

        // The `action` is required and must be `bp_avatar_upload`.
        formData.append( 'action', 'bp_avatar_upload' );

        // The `file` is required and must be an image.
        formData.append( 'file', event.currentTarget.files[0] );

        bp.apiRequest( {
            path: 'buddypress/v1/groups/27/avatar',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
        } ).done( function( data ) {
            console.log( data );
        } ).fail( function( error ) {
            console.log( error );
        } );
    } );

    /**
     * Inject a File input
     *
     * PS: Active WordPress Theme for the test is Twenty Nineteen.
     */
    $( document ).ready( function() {
        $( '#main article .entry-content' ).append(
            $( '<input></input>' ).prop( {
                type: 'file',
                accept: 'image/jpg'
            } )
        );
    } );
}( jQuery ) );
```

## Delete the Avatar of a Group

### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| group_id | integer | A unique numeric ID for the Group. Required |

### Definition

`DELETE /buddypress/v1/groups/<group_id>/avatar`

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/3/avatar',
  type: 'DELETE'
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```
