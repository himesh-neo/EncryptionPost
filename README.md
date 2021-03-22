## Sample Script to post encrypted data to url
After clone the project please follow below steps in sequence.

## setup
npm install

 - To downloads a package and it's dependencies
## Run node server
npm start

 - This command will start a sample service to accept post request
## Test
node postScript.js

 - This command will send an encrypted post request.
 - If anyone wants to send post request to another url then open 'postScript.js' file and update the  value to "(your host url)/encryptTest" for 'reqURL' variable. (Defalut this will run on 'http://localhost:3000/encryptTest')
 - Same, update other variable values(i.e. encryptionKey, commandToEncrypt) as require in file 'postScript.js'.
