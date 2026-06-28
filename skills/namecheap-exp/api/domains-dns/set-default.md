## namecheap.domains.dns.setDefault

Sets domain to use our default DNS servers. Required for free services like Host record management, URL forwarding, email forwarding, dynamic dns and other value added services.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.dns.setDefault&ClientIp=192.168.1.109&SLD=domain&TLD=com`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **SLD** (String, max 70, required): SLD of the DomainName
- **TLD** (String, max 10, required): TLD of the DomainName

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.dns.setDefault</RequestedCommand>
  <CommandResponse Type="namecheap.domains.dns.setDefault">
    <DomainDNSSetDefaultResult Domain="domain.com" Updated="true" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>32.76</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Domain**: The domain name that you are trying to set default nameservers for.
- **Updated**: Indicates whether the default nameservers were set successfully.

## Error Codes

Specifies the error codes that might be returned from this method

- **2019166**: Domain not found
- **2016166**: Domain is not associated with your account
- **2030166**: Edit permission for domain is not supported
- **3013288**: Too many records
- **3031510**: Error From Enom when Errorcount <> 0
- **3050900**: Unknown error from Enom
- **4022288**: Unable to get nameserver list
