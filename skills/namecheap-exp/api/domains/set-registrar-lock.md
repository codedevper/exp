## namecheap.domains.setRegistrarLock
Sets the Registrar Lock status for a domain

## Example Request
`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.setRegistrarLock&ClientIp=192.168.1.109&DomainName=domain1.com&LockAction=unlock`

## Request Parameters
> Global parameters are not shown here, but they should be present in all requests.

- **DomainName** (String, max 70, required): Domain name to set status for
- **LockAction** (String, max 70, optional): Possible values: LOCK, UNLOCK (default: LOCK)

## Example Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.setRegistrarLock</RequestedCommand>
  <CommandResponse Type="namecheap.domains.setRegistrarLock">
    <DomainSetRegistrarLockResult Domain="domain1.com" IsSuccess="true" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5:30</GMTTimeDifference>
  <ExecutionTime>1.422</ExecutionTime>
</ApiResponse>
```

## Response Parameters
- **Domain**: The domain name you wish to set registrar lock for
- **IsSuccess**: Indicates whether registrar lock was set successfully

## Error Codes
- **2015278**: Invalid data specified for LockAction
- **2019166**: Domain not found
- **2016166**: Domain is not associated with your account
- **3031510**: Error from Enom when Errorcount <> 0
- **2030166**: Edit permission for domain is not supported
- **3050900**: Unknown error response from Enom
- **5050900**: Unknown exceptions
