> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

## namecheap.whoisguard.disable

Disables domain privacy protection for the WhoisguardID.

## Example Request

`http://api.namecheap.com/xml.response?apiuser=demo&apikey=d41474b94e7d4536baabb074a09c96bd&username=demo&Command=Namecheap.Whoisguard.disable&ClientIp=192.168.1.109&whoisguardid=5924316`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **WhoisguardID** (Number, max 10, required): The unique domain privacy ID which has to be disabled.

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <Warnings />
  <RequestedCommand>namecheap.whoisguard.disable</RequestedCommand>
  <CommandResponse Type="namecheap.whoisguard.disable">
    <WhoisguardDisableResult DomainName="domain1.com" IsSuccess="true" />
  </CommandResponse>
  <Server>API02</Server>
  <GMTTimeDifference>--5:00</GMTTimeDifference>
  <ExecutionTime>0.92</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Domainname**: The domain name associated with the subscription.
- **IsSuccess**: Indicates whether the domain privacy was disabled successfully.

## Error Codes

Specifies the error codes that might be returned from this method

- **2011331**: Domain privacy does not exists (or) domain privacy is not associated with any domain (or) domain privacy is already disabled (or) domain privacy is not associated with this user
