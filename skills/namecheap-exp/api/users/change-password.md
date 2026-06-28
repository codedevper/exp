## namecheap.users.changePassword

This API call works in two ways depending on the parameters that are sent. The first way is sending the global parameter username along with the oldpassword and newpassword. The next way is using Resetcode obtained with namecheap.users.resetpassword API

### First Way

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.users.changepassword&ClientIp=192.168.1.109&OldPassword=NCpass09&NewPassword=NCpass~9`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **OldPassword** (String, max 20, required): Old password of the user
- **NewPassword** (String, max 20, required): New password of the user

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.users.changePassword</RequestedCommand>
  <CommandResponse Type="namecheap.users.changePassword">
    <UserChangePasswordResult Success="true" UserId="123" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.024</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Success**: Indicates if the password was changed successfully
- **UserID**: A unique integer value that represents the username

## Error Codes

> Specifies the error codes that might be returned from this method

- **2010302**: OldPassword is missing
- **4022335**: Unable to change password
- **5050900**: Unhandled exceptions

### Second Way

## Example Request

`http://api.namecheap.com/xml.response?APIUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&clientip=61.11.95.68&command=namecheap.users.changepassword&resetcode=zd8e256727d1e4c8563e014a16c1054cc&newpassword=password2`

## Request Parameters

> Global parameter - UserName should be omitted for this API call. All other Global parameters must be included.

- **ResetCode** (String, max 50, required): The password reset code you get after calling namecheap.users.resetpassword API
- **NewPassword** (String, max 20, required): New password of the user

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.users.changePassword</RequestedCommand>
  <CommandResponse Type="namecheap.users.changePassword">
    <UserChangePasswordResult Success="true" UserId="392" />
  </CommandResponse>
  <Server>SERVER159</Server>
  <GMTTimeDifference>--5:00</GMTTimeDifference>
  <ExecutionTime>0.14</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Success**: Indicates if the password was changed successfully
- **UserID**: A unique integer value that represents the username

## Error Codes

> Specifies the error codes that might be returned from this method

- **2015103**: Cannot change UserName and ResetCode at a time
- **2010302**: OldPassword is missing
- **2010103**: UserName is missing
- **2010303**: ResetCode is missing
- **4011331**: Invalid status
- **4022335**: Unable to change password
- **5050900**: Unhandled exceptions
