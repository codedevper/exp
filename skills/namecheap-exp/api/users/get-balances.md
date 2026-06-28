## namecheap.users.getBalances

Gets information about fund in the user's account. This method returns the following information: Available Balance, Account Balance, Earned Amount, Withdrawable Amount and Funds Required for AutoRenew.

> NOTE: If a domain setup with automatic renewal is expiring within the next 90 days, the FundsRequiredForAutoRenew attribute shows the amount needed in your Namecheap account to complete auto renewal.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.users.getBalances&ClientIp=192.168.1.109`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.users.getBalances</RequestedCommand>
  <CommandResponse Type="namecheap.users.getBalances">
    <UserGetBalancesResult Currency="USD" AvailableBalance="4932.96" AccountBalance="4932.96" EarnedAmount="381.70" WithdrawableAmount="1243.36" FundsRequiredForAutoRenew="0.00" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.024</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Currency**: Currency in which the price is listed
- **AvailableBalance**: Total amount in the customer's account
- **AccountBalance**: Total amount in the customer's account. Currently it is the same as Available Balance.
- **EarnedAmount**: Amount earned from Marketplace sales
- **WithdrawableAmount**: Amount available for withdraw
- **FundsRequiredForAutoRenew**: Amount required for auto-renewal

## Error Codes

> Specifies the error codes that might be returned from this method

- **4022312**: Balance information is not available
