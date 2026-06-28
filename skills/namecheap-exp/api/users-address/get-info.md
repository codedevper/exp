## namecheap.users.address.getInfo

Gets information for the requested addressID.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db681944&UserName=apiuser&Command=namecheap.users.address.getinfo&ClientIp=192.168.1.109&AddressId=48`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **AddressId** (Number, max 20, required): The unique AddressID

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.users.address.getInfo</RequestedCommand>
  <CommandResponse Type="namecheap.users.address.getInfo">
    <GetAddressInfoResult>
      <AddressId>49</AddressId>
      <UserName>apisample</UserName>
      <AddressName>newaddress_test</AddressName>
      <Default_YN>false</Default_YN>
      <FirstName>api</FirstName>
      <LastName>sample</LastName>
      <JobTitle>jtitle</JobTitle>
      <Organization>org_Test</Organization>
      <Address1>add1test</Address1>
      <Address2>add2test</Address2>
      <City>city_test</City>
      <StateProvince>state_test</StateProvince>
      <StateProvinceChoice>province_test</StateProvinceChoice>
      <Zip>641004</Zip>
      <Country>IN</Country>
      <Phone>91.1111111111</Phone>
      <Fax>91.11111111</Fax>
      <PhoneExt>23423</PhoneExt>
      <EmailAddress>contact@apisample.com</EmailAddress>
    </GetAddressInfoResult>
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.047</ExecutionTime>
</ApiResponse>
```

## Error Codes

> Specifies the error codes that might be returned from this method

- **4011331**: StatusCode for getInfo is invalid
- **4022336**: Failed to retrieve user's address
