> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

## namecheap.domains.getInfo
Returns information about the requested domain

## Example Request
`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.getinfo&ClientIp=192.168.1.109&DomainName=domain1.com`

## Request Parameters
> Global parameters are not shown here, but they should be present in all requests.

- **DomainName** (String, max 70, required): Domain name for which domain information needs to be requested
- **HostName** (String, max 255, optional): Hosted domain name for which domain information needs to be requested

## Example Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.getinfo</RequestedCommand>
  <CommandResponse Type="namecheap.domains.getinfo">
    <DomainGetInfoResult Status="Ok" ID="736542" DomainName="domain1.com" OwnerName="apisuer" IsOwner="true" IsPremium="true">
      <DomainDetails>
        <CreatedDate>09/05/2016</CreatedDate>
        <ExpiredDate>09/05/2016</ExpiredDate>
      </DomainDetails>
      <LockDetails />
      <Whoisguard Enabled="True">
        <ID>3655801</ID>
        <ExpiredDate>01/26/2013</ExpiredDate>
      </Whoisguard>
      <DnsDetails ProviderType="ENOM" />
      <Modificationrights All="true" />
    </DomainGetInfoResult>
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5:30</GMTTimeDifference>
  <ExecutionTime>9.328</ExecutionTime>
</ApiResponse>
```

## Response Parameters
- **Status**: Indicates the status of the domain. Possible statuses: OK, Locked, Expired
- **ID**: Unique integer value that represents the domain
- **DomainName**: Domain name for which the information was requested
- **OwnerName**: User account under which the domain is registered
- **IsOwner**: Indicates whether the API user is the owner of the domain
- **IsPremium**: Indicates whether the domain name is premium

## Error Codes
- **5019169**: Unknown exceptions
- **2030166**: Domain is invalid
- **4011103**: DomainName not Available
  UserName not Available
  Access denied
  *For this error code, one of the three messages will be displayed.
