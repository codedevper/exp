## namecheap.domains.dns.getHosts

Retrieves DNS host record settings for the requested domain.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.dns.getHosts&ClientIp=192.168.1.109&SLD=domain&TLD=com`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **SLD** (String, max 70, required): SLD of the domain to getHosts
- **TLD** (String, max 10, required): TLD of the domain to getHosts

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.dns.getHosts</RequestedCommand>
  <CommandResponse Type="namecheap.domains.dns.getHosts">
    <DomainDNSGetHostsResult Domain="domain.com" IsUsingOurDNS="true">
      <Host HostId="12" Name="@" Type="A" Address="1.2.3.4" MXPref="10" TTL="1800" />
      <Host HostId="14" Name="www" Type="A" Address="122.23.3.7" MXPref="10" TTL="1800" />
    </DomainDNSGetHostsResult>
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>32.76</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Domain**: The domain name for which you are trying to get the host records
- **IsUsingOurDNS**: Indicates whether Namecheap's default name servers are used
- **HostID**: UniqueID of the host records
- **Name**: The domain or subdomain for which host record is set
- **Type**: The type of host record that is set
- **Address**: The value that is set for the host record (IP address for A record, URL for URL redirects, etc.)
- **MXPref**: MXPreference number
- **TTL**: TTL value for the host record

## Error Codes

Specifies the error codes that might be returned from this method

- **2019166**: Domain not found
- **2030166**: Edit permission for domain is not supported
- **2030288**: Cannot complete this command as this domain is not using proper DNS servers
- **4023330**: Unable to get DNS hosts from list
- **3031510**: Error From Enom when Errorcount <> 0
- **3050900**: Unknown error from Enom
- **3011288**: Invalid name server specified
- **5050900**: Unhandled Exceptions
