const encryptDecrypt = require('./teaEncryptionDecryption');
const fetch = require('node-fetch');

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      body: data
    });
    return response;
  }

  const encryptionKey = 'test';
  const commandToEncrypt = 'SWITCH_ON';
  const reqURL = "http://localhost:3000/encryptTest";

  const encryptedData = encryptDecrypt.encrypt(commandToEncrypt,encryptionKey);
  console.log("EncryptedData : ", encryptedData);

  postData(reqURL, encryptedData)
    .then(data => {
      console.log("Success.");
    })
    .catch(err =>{
        console.log("Error: " , err);
    });