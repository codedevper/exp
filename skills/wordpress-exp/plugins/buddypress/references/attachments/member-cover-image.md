# Member Cover Image

## Topics

- Schema
- Retrieve the Cover Image of a Member
  - Arguments
  - Definition
  - Example of use
- Attach a Cover Image to a Member
  - Arguments
  - Definition
  - Example of use
- Delete the Cover Image of a Member
  - Arguments
  - Definition
  - Example of use

## Schema

The schema defines all the fields that exist for a member's cover image object.

| Field | Type | Description |
| ----- | ---- | ----------- |
| image | string, uri | Full size of the image file. Read only. Context: view, edit |

## Retrieve the Cover Image of a Member

### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| user_id | integer | A unique numeric ID for the Member. |

### Definition

`GET /buddypress/v1/members/<user_id>/cover`

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/members/3/cover',
  type: 'GET'
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Attach a Cover Image to a Member

### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| user_id | integer | A unique numeric ID for the Member. |

Alert: The file input name to use to upload the file must be file and the form action must be bp_cover_image_upload.

### Definition

`POST /buddypress/v1/members/<user_id>/cover`

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

        // The `action` is required and must be `bp_cover_image_upload`.
        formData.append( 'action', 'bp_cover_image_upload' );

        // The `file` is required and must be an image.
        formData.append( 'file', event.currentTarget.files[0] );

        bp.apiRequest( {
            path: 'buddypress/v1/members/3/cover',
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

## Delete the Cover Image of a Member

### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| user_id | integer | A unique numeric ID for the Member. |

### Definition

`DELETE /buddypress/v1/members/<user_id>/cover`

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/members/3/cover',
  type: 'DELETE'
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```
