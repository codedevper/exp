> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

## namecheap.domains.transfer.create

You can only transfer .biz, .ca, .cc, .co, .com, .com.es, .com.pe, .es, .in, .info, .me, .mobi, .net, .net.pe, .nom.es, .org, .org.es, .org.pe, .pe, .tv, .us domains through API at this time.

> NOTE: EPPcode with special characters must be converted into base64 format and sent in the format EPPcode=base64:converted code. Please refer to Example Request# 2 for clarification.

## Example Requests

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.transfer.create&ClientIp=192.168.1.109&DomainName=domain.com&Years=1&EPPCode=213456234554454453`

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.transfer.create&ClientIp=192.168.1.109&DomainName=domain.com&Years=1&EPPCode=base64:cjY3OTBsJjg5ayQ2OD4=`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **DomainName** (String, max 70, required): Domain name to transfer
- **Years** (String, max 1, required): Though it is possible to configure a transfer price up to 10 years, the duration should be set to 1 year only.
- **EPPCode** (String, max 20, required): The EPPCode is required for transferring .biz, .ca, .cc, .co, .com, .com.pe, .in, .info, .me, .mobi, .net, net.pe, .org, .org.pe, .pe, .tv, .us domains only.
- **PromotionCode** (String, max 20, optional): Promotional (coupon) code for transfer
- **AddFreeWhoisguard** (String, max 3, optional): Adds free domain privacy for the domain (default: Yes)
- **WGenable** (String, max 3, optional): Enables free domain privacy for the domain (default: No)

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.transfer.create</RequestedCommand>
  <CommandResponse Type="namecheap.domains.transfer.create">
    <DomainTransferCreateResult Domainname="domain.com" Transfer="true" TransferID="15" StatusID="-1" OrderID="575" TransactionID="759" ChargedAmount="8.88" StatusCode="2" />
  </CommandResponse>
  <Server>EV1SERVE-3CQ3CC</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.25</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **DomainName**: The domain name that you are trying to transfer to Namecheap
- **Transfer**: Indicates whether the transfer order was placed successfully.
- **TransferID**: A unique integer value that represents the transfer
- **StatusID**: An integer value that indicates the current transfer status.
- **ChargedAmount**: The total amount charged for the transfer.
- **OrderID**: A unique integer value that represents the order
- **TransactionID**: A unique integer value that represents the transaction.
- **StatusCode**: Indicates the current transfer status.

## Error Codes

Specifies the error codes that might be returned from this method

- **2033409**: Possibly a logical error in authentication phase. Order chargeable for Username is not found
- **2011170**: Validation error from promotion code
- **2011280**: TLD is not valid
- **2030280**: TLD is not supported for API
- **2528166**: Order creation failed
- **5050900**: Unhandled exceptions
