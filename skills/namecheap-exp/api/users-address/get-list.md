## namecheap.users.address.getList

Gets a list of addressIDs and addressnames associated with the user account.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db681944&UserName=apiuser&Command=namecheap.users.address.getList&ClientIP=192.168.1.109`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.users.address.getList</RequestedCommand>
  <CommandResponse Type="namecheap.users.address.getList">
    <AddressGetListResult>
      <List AddressId="49" AddressName="newaddress_test" />
    </AddressGetListResult>
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.047</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **AddressID**: A unique integer value that represents the address profile
- **AddressName**: The name of the address profile

## Error Codes

> Specifies the error codes that might be returned from this method

- **4011331**: StatusCode for update is invalid
