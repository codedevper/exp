## namecheap.users.address.create

Creates a new address for the user

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiuser&Command=namecheap.users.address.create&ClientIp=192.168.1.109&AddressName=address_test&EmailAddress=apisample@gmail.com&FirstName=Daisy&LastName=Smith&JobTitle=software%20developer&Organization=NC&Address1=High%20Street&City=California&Zip=90045&Country=US&Phone=+1.6613102107&Fax=+1.6613102107&StateProvince=CA&StateProvinceChoice=P`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **AddressName** (String, max 20, required): Address name to create
- **DefaultYN** (Number, max 128, optional): Possible values are 0 and 1. If the value of this parameter is set to 1, the address is set as default address for the user.
- **EmailAddress** (String, max 128, required): Email address of the user
- **FirstName** (String, max 60, required): First name of the user
- **LastName** (String, max 60, required): Last name of the user
- **JobTitle** (String, max 60, optional): Job designation of the user
- **Organization** (String, max 60, optional): Organization of the user
- **Address1** (String, max 60, required): StreetAddress1 of the user
- **Address2** (String, max 60, optional): StreetAddress2 of the user
- **City** (String, max 60, required): City of the user
- **StateProvince** (String, max 60, required): State/Province of the user
- **StateProvinceChoice** (String, max 60, required): State/Province choice of the user
- **Zip** (String, max 15, required): Zip/Postal code of the user
- **Country** (String, max 2, required): Two letter country code of the user
- **Phone** (String, max 20, required): Phone number in the format +NNN.NNNNNNNNNN
- **PhoneExt** (String, max 10, optional): PhoneExt of the user
- **Fax** (String, max 20, optional): Fax number in the format +NNN.NNNNNNNNNN

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.users.address.create</RequestedCommand>
  <CommandResponse Type="namecheap.users.address.create">
    <AddressCreateResult Success="true" AddressId="48" AddressName="newaddress_test" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.047</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Success**: Indicates whether the address was created successfully.
- **AddressID**: A unique integer value that represents the address profile
- **AddressName**: The name for the created address profile

## Error Codes

> Specifies the error codes that might be returned from this method

- **4011331**: StatusCode for create is invalid
- **4023336**: Failed to add user's address
- **2015182**: The contact phone is invalid. The phone number format is +NNN.NNNNNNNNNN
