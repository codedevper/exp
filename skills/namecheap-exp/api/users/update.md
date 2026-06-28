## namecheap.users.update

Updates user account information for the particular user.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiuser&Command=namecheap.users.update&ClientIp=192.168.1.109&JobTitle=software%20tester&FirstName=yourfirstname&LastName=yourlastname&Organization=NC&Address1=8939%High%20Street&City=CA&StateProvince=CA&Zip=90045&Country=US&EmailAddress=abc@apiexample.com&Phone=+1.6613102107&Fax=+1.6613102107`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **FirstName** (String, max 70, required): First name of the user
- **LastName** (String, max 70, required): Last name of the user
- **JobTitle** (String, max 60, optional): Job designation of the user
- **Organization** (String, max 60, optional): Organization of the user
- **Address1** (String, max 60, required): StreetAddress1 of the user
- **Address2** (String, max 60, optional): StreetAddress2 of the user
- **City** (String, max 60, required): City of the user
- **StateProvince** (String, max 60, required): State/Province of the user
- **Zip** (String, max 15, required): Zip/Postal code of the user
- **Country** (String, max 2, required): Two letter country code of the user
- **EmailAddress** (String, max 255, required): Email address of the user
- **Phone** (String, max 20, required): Phone number in the format +NNN.NNNNNNNNNN
- **PhoneExt** (String, max 10, optional): PhoneExt of the user
- **Fax** (String, max 20, optional): Fax number in the format +NNN.NNNNNNNNNN

## Example Response

```xml
<?xml version="1.0" encoding="utf-8"?>
<ApiResponse Status="OK" xmlns="http://api.namecheap.com/xml.response">
  <Errors/>
  <RequestedCommand>namecheap.users.update</RequestedCommand>
  <CommandResponse Type="namecheap.users.update">
   <UserUpdateResult Success="true" UserId="123" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5:30</GMTTimeDifference>
  <ExecutionTime>0</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Success**: Indicates if the password was updated successfully
- **UserID**: A unique integer value that represents the username

## Error Codes

> Specifies the error codes that might be returned from this method

- **4011331**: StatusCode for update is invalid
- **4024103**: Failed to update user
- **2015182**: The contact phone is invalid. The phone number format is +NNN.NNNNNNNNNN
