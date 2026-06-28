> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

## namecheap.domains.getTldList
Returns a list of TLDs

> NOTE: We strongly recommend that you cache this API response to avoid repeated calls.

## Example Request
`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.gettldlist&ClientIp=192.168.1.109`

## Request Parameters
> Global parameters are not shown here, but they should be present in all requests.

## Example Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.getTldList</RequestedCommand>
  <CommandResponse Type="namecheap.domains.getTldList">
    <Tlds>
      <Tld Name="biz" NonRealTime="false" MinRegisterYears="1" MaxRegisterYears="10" MinRenewYears="1" MaxRenewYears="10" MinTransferYears="1" MaxTransferYears="10" IsApiRegisterable="true" IsApiRenewable="true" IsApiTransferable="false" IsEppRequired="false" IsDisableModContact="false" IsDisableWGAllot="false" IsIncludeInExtendedSearchOnly="false" SequenceNumber="5" Type="GTLD" IsSupportsIDN="false" Category="P">US Business</Tld>
      <Tld Name="bz" NonRealTime="false" MinRegisterYears="1" MaxRegisterYears="10" MinRenewYears="1" MaxRenewYears="10" MinTransferYears="1" MaxTransferYears="10" IsApiRegisterable="false" IsApiRenewable="false" IsApiTransferable="false" IsEppRequired="false" IsDisableModContact="false" IsDisableWGAllot="false" IsIncludeInExtendedSearchOnly="true" SequenceNumber="11" Type="CCTLD" IsSupportsIDN="false" Category="A">BZ Country Domain</Tld>
      <Tld Name="ca" NonRealTime="true" MinRegisterYears="1" MaxRegisterYears="10" MinRenewYears="1" MaxRenewYears="10" MinTransferYears="1" MaxTransferYears="10" IsApiRegisterable="false" IsApiRenewable="false" IsApiTransferable="false" IsEppRequired="false" IsDisableModContact="false" IsDisableWGAllot="false" IsIncludeInExtendedSearchOnly="true" SequenceNumber="7" Type="CCTLD" IsSupportsIDN="false" Category="A">Canada Country TLD</Tld>
      <Tld Name="cc" NonRealTime="false" MinRegisterYears="1" MaxRegisterYears="10" MinRenewYears="1" MaxRenewYears="10" MinTransferYears="1" MaxTransferYears="10" IsApiRegisterable="false" IsApiRenewable="false" IsApiTransferable="false" IsEppRequired="false" IsDisableModContact="false" IsDisableWGAllot="false" IsIncludeInExtendedSearchOnly="true" SequenceNumber="9" Type="CCTLD" IsSupportsIDN="false" Category="A">CC TLD</Tld>
      <Tld Name="co.uk" NonRealTime="false" MinRegisterYears="2" MaxRegisterYears="10" MinRenewYears="2" MaxRenewYears="10" MinTransferYears="2" MaxTransferYears="10" IsApiRegisterable="true" IsApiRenewable="false" IsApiTransferable="false" IsEppRequired="false" IsDisableModContact="false" IsDisableWGAllot="false" IsIncludeInExtendedSearchOnly="false" SequenceNumber="18" Type="CCTLD" IsSupportsIDN="false" Category="A">UK based domain</Tld>
    </Tlds>
  </CommandResponse>
  <Server>IMWS-A06</Server>
  <GMTTimeDifference>+5:30</GMTTimeDifference>
  <ExecutionTime>0.047</ExecutionTime>
</ApiResponse>
```

## Response Parameters
- **Name**: Indicates the top-level domain
- **NonRealTimeDomain**: Possible statuses: True, False. Indicates whether the domain registration is instant (real-time) or not.
- **MinRegisterYears**: Minimum number of years the TLD can be registered for
- **MaxRegisterYears**: Maximum number of years the TLD can be registered for
- **MinRenewYears**: Minimum number of years the TLD can be renewed for
- **MaxRenewYears**: Maximum number of years the TLD can be renewed for
- **MinTransferYears**: Minimum number of years the TLD can be transferred for
- **MaxTransferYears**: Maximum number of years the TLD can be transferred for
- **IsApiRegisterable**: Indicates whether a domain with this TLD can be registered through API
- **IsApiRenewable**: Indicates whether a domain with this TLD can be renewed through API
- **IsApiTransferable**: Indicates whether a domain with this TLD can be transferred to Namecheap through API
- **IsEppRequired**: Indicates whether EPP code is required for this TLD
- **IsDisableModContact**: Indicates whether contact details can be modified for this TLD
- **IsDisableWGAllot**: Indicates whether domain privacy can be allotted for this TLD. If this field result is Yes, then we will not be able to allot WG for the TLD.
- **IsIncludeInExtendedSearchOnly**: Indicates whether this TLD is shown in general search results or in extended search results only
- **SequenceNumber**: Indicates the sorting order in which TLDs are displayed on Namecheap website's domain search results page
- **Type**: Indicates whether this is a generic TLD or country-code TLD
- **IsSupportsIDN**: Indicates whether IDN is supported for this TLD
- **Category**: Indicates the category of the domain

## Error Codes
- **2011166**: UserName is invalid
- **3050900**: Unknown response from provider
