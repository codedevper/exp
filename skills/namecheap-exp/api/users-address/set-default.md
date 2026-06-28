## namecheap.users.address.setDefault

Sets default address for the user.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db681944&UserName=apiuser&Command=namecheap.users.address.setDefault&ClientIp=192.168.1.109&AddressId=49`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **AddressId** (Number, max 20, required): The unique addressID to set default

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.users.address.setDefault</RequestedCommand>
  <CommandResponse Type="namecheap.users.address.setDefault">
    <AddressSetDefaultResult Success="true" AddressId="49" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.047</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Success**: Indicates whether the default address was set successfully
- **AddressID**: A unique integer value that represents the address profile

## Error Codes

> Specifies the error codes that might be returned from this method

- **4023336**: Failed to set default user's address
