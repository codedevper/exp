## namecheap.domains.getRegistrarLock
Gets the Registrar Lock status for the requested domain

## Example Request
`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.getRegistrarLock&ClientIp=192.168.1.109&DomainName=domain1.com`

## Request Parameters
> Global parameters are not shown here, but they should be present in all requests.

- **DomainName** (String, max 70, required): Domain name to get status for

## Example Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.getRegistrarLock</RequestedCommand>
  <CommandResponse Type="namecheap.domains.getRegistrarLock">
    <DomainGetRegistrarLockResult Domain="domain1.com" RegistrarLockStatus="false" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5:30</GMTTimeDifference>
  <ExecutionTime>2.812</ExecutionTime>
</ApiResponse>
```

## Response Parameters
- **Domain**: The domain name for which you wish to get registrar lock status
- **RegistrarLockStatus**: Possible values: True, False. True indicates that the registrar lock is set.

## Error Codes
- **2019166**: Domain not found
- **2016166**: Domain is not associated with your account
- **3031510**: Error response from provider when errorcount !=0
- **3050900**: Unknown error response from Enom
- **5050900**: Unknown exceptions
