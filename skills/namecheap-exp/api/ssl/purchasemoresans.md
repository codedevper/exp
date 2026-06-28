## namecheap.ssl.purchasemoresans

Purchases more add-on domains for an already purchased certificate

## Example Request

`https://api.namecheap.com/xml.response?NumberofSANStoADD=4&command=namecheap.ssl.purchasemoresans&CertificateID=1111&ApiKey=7hssab16davvv45511135fccea87&ApiUser=apiexample&UserName=apiexample&ClientIp=192.168.1.1`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **CertificateID** (Number, max 10, required): ID of the certificate for which you wish to purchase more add-on domains
- **NumberOfSANSToAdd** (Number, max 2, required): Number of add-on domains to be ordered

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <Warnings />
  <RequestedCommand>namecheap.ssl.purchaseMoreSANS</RequestedCommand>
  <CommandResponse Type="namecheap.ssl.purchaseMoreSANS">
    <SSLPurchaseMoreSANSResult IsSuccess="true" OrderId="111" TransactionId="11111" ChargedAmount="23.3000">
      <SSLCertificate CertificateID="1111" SSLType="positivessl multi domain" Years="1" Status="NEWPURCHASE" SANSCount="4" />
    </SSLPurchaseMoreSANSResult>
  </CommandResponse>
  <Server>API02</Server>
  <GMTTimeDifference>--5:00</GMTTimeDifference>
  <ExecutionTime>0.874</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **IsSuccess**: Indicates whether more SANs were purchased
- **Order ID**: A unique integer value that represents the order
- **TransactionID**: A unique integer value that represents the transaction
- **ChargedAmount**: The amount charged for the order
- **CertificateID**: A unique integer value that represents the SSL
- **SSLType**: Type of SSL certificate
- **Years**: Number of years for which the certificate is purchased
- **Status**: The current status of SSL certificate
- **SANSCount**: Indicates the number of add-on domains

## Error Codes

Specifies the error codes that might be returned from this method

- **2033409**: Possibly a logical error in authentication phase. Order chargeable for Username is not found.
- **2015167**: Number of years should be maximum 10
- **2011301**: SSLType is invalid
- **2011170**: Promotion code is invalid
- **4011299**: The Purchasevalidationid already exists.The certificate cannot be created.
- **2528166**: Order creation failed
- **5050900**: Unhandled exceptions
