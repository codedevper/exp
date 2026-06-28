## namecheap.domains.ns.create

Creates a new nameserver.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexmple&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.ns.create&ClientIp=192.168.1.109&SLD=domain&TLD=com&Nameserver=ns1.domain.com&IP=192.165.15.103`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **SLD** (String, max 70, required): SLD of the DomainName
- **TLD** (String, max 10, required): TLD of the DomainName
- **Nameserver** (String, max 150, required): Nameserver to create
- **IP** (String, max 15, required): Nameserver IP address

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.ns.create</RequestedCommand>
  <CommandResponse Type="namecheap.domains.ns.create">
    <DomainNSCreateResult Domain="domain.com" Nameserver="ns1.domain.com" IP="12.23.23.23" IsSuccess="true" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>32.76</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Domain**: The domain name for which you are trying to create nameserver.
- **Nameserver**: Returns the nameserver that was created.
- **IP**: Returns the IP address set for the nameserver.
- **IsSuccess**: Indicates whether the nameserver was set successfully.

## Error Codes

Specifies the error codes that might be returned from this method

- **2019166**: Domain not found
- **2016166**: Domain is not associated with your account
- **3031510**: Error From Enom when Errorcount <> 0
- **3050900**: Unknown error from Enom
