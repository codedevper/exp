> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

## namecheap.whoisguard.changeemailaddress

Changes domain privacy email address.

## Example Request

`http://api.namecheap.com/xml.response?apiuser=demo&apikey=d41474b94e7d4536baabb074a09c96bd&username=demo&Command=Namecheap.Whoisguard.changeemailaddress&ClientIp=192.168.1.109&whoisguardid=5924316`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **WhoisguardID** (Number, max 10, required): The unique domain privacy ID that you wish to change

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <Warnings />
  <RequestedCommand>namecheap.whoisguard.changeEmailAddress</RequestedCommand>
  <CommandResponse Type="namecheap.whoisguard.changeEmailAddress">
    <WhoisguardChangeEmailAddressResult ID="5924316" IsSuccess="true" WGEmail="668be12b85d043cf98189a1379eceb12.protect@whoisguard.com" WGOldEmail="d3898bfc391e4f92bae0aa2032c4c00e.protect@whoisguard.com" />
  </CommandResponse>
  <Server>API02</Server>
  <GMTTimeDifference>--5:00</GMTTimeDifference>
  <ExecutionTime>0.92</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **ID**: The unique integer value that represents domain privacy subscription.
- **IsSuccess**: Indicates whether the domain privacy email address was changed successfully.
- **WGEmail**: The new domain privacy email address.
- **WGOldEmail**: The old domain privacy email address.

## Error Codes

Specifies the error codes that might be returned from this method

- **2011331**: Domain privacy does not exists (or) domain privacy is not associated with any domain (or) domain privacy is not associated with this user
