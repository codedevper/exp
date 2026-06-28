# Blog Avatar

## Topics

- Schema
- Retrieve the Avatar of a Blog
  - Arguments
  - Definition
  - Example of use

The Blog Avatar is by default the Member Avatar of the Blog Administrator. If the site_icon WordPress feature is supported, then the Blog Avatar will use it.

## Schema

The schema defines all the fields that exist for a blog avatar object.

| Field | Type | Description |
| ----- | ---- | ----------- |
| full | string, uri | Full size of the image file. Read only. Context: view, edit |
| thumb | string, uri | Thumb size of the image file. Read only. Context: view, edit |

## Retrieve the Avatar of a Blog

### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | integer | A unique numeric ID for the Blog. Required |
| context | string | Scope under which the request is made; determines fields present in response. Default: view. One of: view, edit |
| html | boolean | Whether to return an `<img>` HTML element, vs a raw URL to a group avatar. Default: false |
| alt | string | The custom alt attribute for the `<img>` element. Default: '' |
| no_user_gravatar | boolean | Whether to disable the default Gravatar Admin user fallback. true to disable, false otherwise. Default: false |

### Definition

`GET /buddypress/v1/blogs/<id>/avatar`

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/blogs/1/avatar',
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
