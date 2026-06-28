# Namecheap EXP Skill

This skill provides a reference for working with the Namecheap API. It documents all available API commands organized by category.

## How to Use This Skill

1. **Install the skill** in opencode by adding it to your `opencode.json` or `AGENTS.md`:

   ```json
   "skills": ["file:///path/to/.agents/skills/namecheap-exp"]
   ```

   Or copy/ symlink the `namecheap-exp` folder under `.agents/skills/` in your project.

2. **Set up credentials** — the API commands need these environment variables:

   | Variable | Description |
   |----------|-------------|
   | `NAMECHEAP_API_USER` | API username |
   | `NAMECHEAP_API_KEY` | API key |
   | `NAMECHEAP_USERNAME` | Namecheap account username |
   | `NAMECHEAP_CLIENT_IP` | Whitelisted IP |

3. **Make API calls** — use `curl` with the XML response format:

   ```bash
   # Read operation (GET)
   curl -s "https://api.namecheap.com/xml.response?ApiUser=${NAMECHEAP_API_USER}&ApiKey=${NAMECHEAP_API_KEY}&UserName=${NAMECHEAP_USERNAME}&ClientIp=${NAMECHEAP_CLIENT_IP}&Command=namecheap.domains.getList&PageSize=10"
   ```

   ```bash
   # Write operation (POST)
   curl -s -X POST "https://api.namecheap.com/xml.response" -d "ApiUser=${NAMECHEAP_API_USER}&ApiKey=${NAMECHEAP_API_KEY}&UserName=${NAMECHEAP_USERNAME}&ClientIp=${NAMECHEAP_CLIENT_IP}&Command=namecheap.domains.create&DomainName=example.com&Years=1&RegistrantFirstName=John&RegistrantLastName=Doe&RegistrantAddress1=123 Main St&RegistrantCity=Los Angeles&RegistrantStateProvince=CA&RegistrantPostalCode=90001&RegistrantCountry=US&RegistrantPhone=%2B1.5551234567&RegistrantEmailAddress=john%40example.com&TechFirstName=John&TechLastName=Doe&TechAddress1=123 Main St&TechCity=Los Angeles&TechStateProvince=CA&TechPostalCode=90001&TechCountry=US&TechPhone=%2B1.5551234567&TechEmailAddress=john%40example.com&AdminFirstName=John&AdminLastName=Doe&AdminAddress1=123 Main St&AdminCity=Los Angeles&AdminStateProvince=CA&AdminPostalCode=90001&AdminCountry=US&AdminPhone=%2B1.5551234567&AdminEmailAddress=john%40example.com&AuxBillingFirstName=John&AuxBillingLastName=Doe&AuxBillingAddress1=123 Main St&AuxBillingCity=Los Angeles&AuxBillingStateProvince=CA&AuxBillingPostalCode=90001&AuxBillingCountry=US&AuxBillingPhone=%2B1.5551234567&AuxBillingEmailAddress=john%40example.com"
   ```

4. **Use the API docs** under `api/` for full parameter details for each command. Each file documents the request parameters, response format, and error codes.

5. **Use the reference files** under `references/` for compiled tables of available parameters and endpoints.

## Available Commands

### `domains`
- **getList** — Returns a list of domains for the particular user.
- **getContacts** — Gets contact information of the requested domain.
- **create** — Registers a new domain name.
- **getTldList** — Returns a list of tlds
- **setContacts** — Sets contact information for the domain.
- **check** — Checks the availability of domains.
- **reactivate** — Reactivates an expired domain.
- **renew** — Renews an expiring domain.
- **getRegistrarLock** — Gets the RegistrarLock status of the requested domain.
- **setRegistrarLock** — Sets the RegistrarLock status for a domain.
- **getInfo** — Returns information about the requested domain.

### `domains.dns`
- **setDefault** — Sets domain to use our default DNS servers. Required for free services like Host record management, URL forwarding, email forwarding, dynamic dns and other value added services.
- **setCustom** — Sets domain to use custom DNS servers. NOTE: Services like URL forwarding, Email forwarding, Dynamic DNS will not work for domains using custom nameservers.
- **getList** — Gets a list of DNS servers associated with the requested domain.
- **getHosts** — Retrieves DNS host record settings for the requested domain.
- **getEmailForwarding** — Gets email forwarding settings for the requested domain
- **setEmailForwarding** — Sets email forwarding for a domain name.
- **setHosts** — Sets DNS host records settings for the requested domain.

### `domains.ns`
- **create** — Creates a new nameserver.
- **delete** — Deletes a nameserver associated with the requested domain.
- **getInfo** — Retrieves information about a registered nameserver.
- **update** — Updates the IP address of a registered nameserver.

### `domains.transfer`
- **create** — Transfers a domain to Namecheap. You can only transfer .biz, .ca, .cc, .co, .co.uk, .com, .com.es, .com.pe, .es, .in, .info, .me, .me.uk, .mobi, .net, .net.pe, .nom.es, .org, .org.es, .org.pe, .org.uk, .pe, .tv, .us domains through API at this time.
- **getStatus** — Gets the status of a particular transfer.
- **updateStatus** — Updates the status of a particular transfer. Allows you to re-submit the transfer after releasing the registry lock.
- **getList** — Gets the list of domain transfers.

### `ssl`
- **create** — Creates a new SSL certificate.
- **getList** — Returns a list of SSL certificates for the particular user.
- **parseCSR** — Parsers the CSR
- **getApproverEmailList** — Gets approver email list for the requested certificate.
- **activate** — Activates a newly purchased SSL certificate.
- **resendApproverEmail** — Resends the approver email.
- **getInfo** — Retrieves information about the requested SSL certificate
- **renew** — Renews an SSL certificate.
- **reissue** — Reissues an SSL certificate.
- **resendfulfillmentemail** — Resends the fulfilment email containing the certificate.
- **purchasemoresans** — Purchases more add-on domains for already purchased certificate.
- **revokecertificate** — Revokes a re-issued SSL certificate.
- **editDCVMethod** — Sets new domain control validation (DCV) method for a certificate or serves as 'retry' mechanism

### `users`
- **getPricing** — Returns pricing information for a requested product type.
- **getBalances** — Gets information about fund in the user's account.This method returns the following information: Available Balance, Account Balance, Earned Amount, Withdrawable Amount and Funds Required for AutoRenew.
- **changePassword** — Changes password of the particular user's account.
- **update** — Updates user account information for the particular user.
- **createaddfundsrequest** — Creates a request to add funds through a credit card
- **getAddFundsStatus** — Gets the status of add funds request.
- **create** — Creates a new account at NameCheap under this ApiUser.
- **login** — Validates the username and password of user accounts you have created using the API command namecheap.users.create.
- **resetPassword** — When you call this API, a link to reset password will be emailed to the end user's profile email id.The end user needs to click on the link to reset password.

### `users.address`
- **create** — Creates a new address for the user
- **delete** — Deletes the particular address for the user.
- **getInfo** — Gets information for the requested addressID.
- **getList** — Gets a list of addressIDs and addressnames associated with the user account.
- **setDefault** — Sets default address for the user.
- **update** — Updates the particular address of the user

### `domainprivacy`
- **changeemailaddress** — Changes domain privacy email address
- **enable** — Enables domain privacy protection.
- **disable** — Disables domain privacy protection.
- **getList** — Gets the list of domain privacy protection.
- **renew** — Renews domain privacy protection.
