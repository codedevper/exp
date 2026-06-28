## sendmail
sendmail -v <recipient> -- send mail with verbose output
sendmail -bv <recipient> -- verify recipient address
sendmail -bp -- show mail queue
mailq -- show mail queue
sudo systemctl start sendmail -- start sendmail service
sudo systemctl stop sendmail -- stop sendmail service
sudo systemctl restart sendmail -- restart sendmail service
sudo systemctl status sendmail -- check sendmail status
sudo sendmail -q -- process mail queue immediately
echo "Subject: test" | sendmail -v <user>@<domain> -- send a test email
newaliases -- rebuild alias database
