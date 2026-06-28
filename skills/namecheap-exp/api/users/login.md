## namecheap.users.login

Validates the username and password of user accounts you have created using the API command namecheap.users.create. You cannot use this command to validate user accounts created directly at namecheap.com

> NOTE: Use the global parameter UserName to specify the username of the user account.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=user123&Command=namecheap.users.login&ClientIp=192.168.1.109&Password=NCpass09`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **Password** (String, max 20, required): Password of the user account

## Example Response

```xml
<?xml version="1.0" encoding="utf-8"?>
<ApiResponse Status="OK">
<Errors/>
<Warnings/>
<RequestedCommand>namecheap.users.login</RequestedCommand>
<CommandResponse Type="namecheap.users.login">
<UserLoginResult UserName="user123" LoginSuccess="true"/>
</CommandResponse>
<Server>SERVER159</Server>
<GMTTimeDifference>--6:00</GMTTimeDifference>
<ExecutionTime>0.03</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Username**: Indicates the username of the user account
- **LoginSuccess**: Indicates whether the login was successful

## Error Codes

> Specifies the error codes that might be returned from this method

- **2011335**: Parameter Password is missing
- **2019166**: UserName is not available
- **2010335**: Invalid password
- **2017166**: User is disabled or locked
- **2013410**: Too many declined payments
- **2017289**: Parameter IP Blocked
- **2011166**: UserName is invalid
- **5050900**: Unknown exceptions
