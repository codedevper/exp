## namecheap.domains.transfer.updateStatus

Updates the status of a particular transfer. Allows you to re-submit the transfer after releasing the registry lock.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.transfer.updateStatus&ClientIp=192.168.1.109&TransferID=15&Resubmit=true`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **TransferID** (Number, max 10, required): The unique Transfer ID which you get after placing a transfer request
- **Resubmit** (String, max 5, required): The value 'true' resubmits the transfer

## Example Response

```xml
<?xml version="1.0" encoding="utf-8" ?> 
<ApiResponse Status="OK" xmlns="http://api.namecheap.com/xml.response">
  <Errors /> 
  <RequestedCommand>namecheap.domains.transfer.updateStatus</RequestedCommand> 
   <CommandResponse Type="namecheap.domains.transfer.updateStatus">
    <DomainTransferUpdateStatusResult TransferID="15" Resubmit="true" /> 
   </CommandResponse>
<Server>EV1SERVE-3CQ3CC</Server> 
<GMTTimeDifference>+5</GMTTimeDifference> 
<ExecutionTime>0.016</ExecutionTime> 
</ApiResponse>
```

## Response Parameters

- **TransferID**: A unique integer value that represents the transfer
- **Resubmit**: Indicates whether the transfer order was resubmitted

## Error Codes

Specifies the error codes that might be returned from this method

- **4019329**: Transfer Status not available
- **2010293**: No Action Specified
- **5050900**: Unhandled exceptions
