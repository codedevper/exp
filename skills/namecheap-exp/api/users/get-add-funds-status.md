## namecheap.users.getAddFundsStatus

Gets the status of add funds request.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiuser&command=namecheap.users.getaddfundsstatus&clientip=192.168.1.10&tokenid=42a0c4f484c74d09a2edaasa5cb0fe28`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **TokenId** (String, max 100, required): The Unique ID that you received after calling namecheap.users.createaddfundsrequest method

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <Warnings />
  <RequestedCommand>namecheap.users.getAddFundsStatus</RequestedCommand>
  <CommandResponse Type="namecheap.users.getAddFundsStatus">
    <GetAddFundsStatusResult TransactionID="1233" Amount="40" Status="COMPLETED" />
  </CommandResponse>
  <Server>IMWS-A09</Server>
  <GMTTimeDifference>+5:30</GMTTimeDifference>
  <ExecutionTime>2.714</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **TransactionID**: A unique integer value that represents the transaction
- **Amount**: The amount added
- **Status**: The status of added fund. Possible values: CREATED, SUBMITTED, COMPLETED, FAILED, EXPIRED

## Error Codes

> Specifies the error codes that might be returned from this method

- **2012342**: TokenID mismatch
- **5050900**: Unknown Exceptions
