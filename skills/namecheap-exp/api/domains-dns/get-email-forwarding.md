## namecheap.domains.dns.getEmailForwarding

Gets email forwarding settings for the requested domain.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.dns.getEmailForwarding&ClientIp=192.168.1.109&DomainName=domain.com`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **DomainName** (String, max 70, required): Domain name to get settings

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.dns.getEmailForwarding</RequestedCommand>
  <CommandResponse Type="namecheap.domains.dns.getEmailForwarding">
    <DomainDNSGetEmailForwardingResult Domain="domain.com">
      <Forward mailbox="name1">name1@domain.com</Forward>
      <Forward mailbox="name2">name2@domain.com</Forward>
    </DomainDNSGetEmailForwardingResult>
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>--5:00</GMTTimeDifference>
  <ExecutionTime>0.01</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Domain**: The domain name for which you are trying to get email forwarding details.
- **Mailbox**: The email forwarding mailbox that was created.

## Error Codes

Specifies the error codes that might be returned from this method

- **2019166**: Domain not found
- **2030166**: Edit permission for domain is not supported
- **2030288**: Cannot complete this command as this domain is not using proper DNS servers
- **3031510**: Error From Enom when Errorcount <> 0
- **3050900**: Unknown error from Enom
- **4022328**: Unable to get EmailForwarding records from database
- **3011288**: Invalid nameserver
- **5050900**: Unhandled Exceptions
