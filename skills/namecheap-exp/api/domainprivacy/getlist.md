> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

## namecheap.whoisguard.getList

Gets the list of domain privacy protection.

## Example Request

`http://api.namecheap.com/xml.response?apiuser=demo&apikey=d41474b94e7d4536baabb074a09c96bd&username=demo&Command=Namecheap.Whoisguard.getlist&ClientIp=192.168.1.109`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **ListType** (String, max 10, optional): Possible values are ALL, ALLOTED, FREE, DISCARD (default: ALL)
- **Page** (Number, max 10, optional): Page to return (default: 1)
- **PageSize** (Number, max 20, optional): Number of domain privacy subscriptions to be listed on a page. Minimum value: 2; Maximum value: 100

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <Warnings />
  <RequestedCommand>namecheap.whoisguard.getList</RequestedCommand>
  <CommandResponse Type="namecheap.whoisguard.getList">
    <WhoisguardGetListResult>
      <Whoisguard ID="38495" DomainName="" Created="05/13/2014" Expires="" Status="unused" />
      <Whoisguard ID="34301" DomainName="" Created="12/18/2013" Expires="12/18/2014" Status="unused" />
      <Whoisguard ID="34400" DomainName="" Created="12/26/2013" Expires="12/26/2014" Status="unused" />
      <Whoisguard ID="34442" DomainName="" Created="01/03/2014" Expires="01/03/2015" Status="unused" />
      <Whoisguard ID="34479" DomainName="" Created="01/07/2014" Expires="01/07/2015" Status="unused" />
      <Whoisguard ID="34483" DomainName="" Created="01/07/2014" Expires="01/07/2015" Status="unused" />
      <Whoisguard ID="34490" DomainName="" Created="01/07/2014" Expires="01/07/2015" Status="unused" />
      <Whoisguard ID="34493" DomainName="" Created="01/07/2014" Expires="01/07/2015" Status="unused" />
      <Whoisguard ID="34497" DomainName="" Created="01/07/2014" Expires="01/07/2015" Status="unused" />
      <Whoisguard ID="34498" DomainName="" Created="01/07/2014" Expires="01/07/2015" Status="unused" />
      <Whoisguard ID="34504" DomainName="" Created="01/07/2014" Expires="01/07/2015" Status="unused" />
      <Whoisguard ID="34509" DomainName="" Created="01/08/2014" Expires="01/08/2015" Status="unused" />
      <Whoisguard ID="34537" DomainName="" Created="01/10/2014" Expires="01/10/2015" Status="unused" />
      <Whoisguard ID="34538" DomainName="" Created="01/10/2014" Expires="01/10/2015" Status="unused" />
      <Whoisguard ID="34539" DomainName="" Created="01/10/2014" Expires="01/10/2015" Status="unused" />
      <Whoisguard ID="34547" DomainName="" Created="01/10/2014" Expires="01/10/2015" Status="unused" />
      <Whoisguard ID="34561" DomainName="" Created="01/11/2014" Expires="01/11/2015" Status="unused" />
      <Whoisguard ID="34562" DomainName="" Created="01/11/2014" Expires="01/11/2015" Status="unused" />
      <Whoisguard ID="34563" DomainName="" Created="01/11/2014" Expires="01/11/2015" Status="unused" />
      <Whoisguard ID="34600" DomainName="" Created="01/13/2014" Expires="01/13/2015" Status="unused" />
    </WhoisguardGetListResult>
    <Paging>
      <TotalItems>642</TotalItems>
      <CurrentPage>1</CurrentPage>
      <PageSize>20</PageSize>
    </Paging>
  </CommandResponse>
  <Server>API01</Server>
  <GMTTimeDifference>--5:00</GMTTimeDifference>
  <ExecutionTime>0.029</ExecutionTime>
</ApiResponse>
```

## Error Codes

Specifies the error codes that might be returned from this method

- **2011272**: ListType is not Valid
