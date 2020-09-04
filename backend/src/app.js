const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require("aws-sdk");
const app = express();
const fetch = require('node-fetch');
app.use(bodyParser.json());
app.use(cors());
app.disable('etag');
const port = 8000;
const baseUrl = "https://api.edamam.com/search";
let APP_ID, APP_KEY;

const SESConfig = {
    accessKeyId: process.env.AWS_ACCESS_ID,
    accessSecretKey: process.env.AWS_SECRET_KEY,
    region: "us-east-2"
}
AWS.config.update(SESConfig);

app.listen(process.env.PORT || port, async() => {
    console.log("Running on port", port);
    const keys = await getKeys();
    APP_ID = keys.split(`":"`)[0].substring(2);
    APP_KEY = keys.split(`":"`)[1].split(`"}`)[0];
});



app.get("/search", (request, response) => {
    fetch(`${baseUrl}?q=${request.query.q}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(res => {
        if (res) {
            res.json().then(data => {
                response.json(data);
            })
        }
    })
});

app.get("/recipe", (request, response) => {
    fetch(`${baseUrl}?r=${request.query.r}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(res => {
        if (res) {
            res.json().then(data => {
                response.json(data);
            })
        }
    })
});

async function getKeys() {
    const region = "us-east-2";
    const secretName = "Recipes";
    let secret;
    let decodedBinarySecret;

    // Create a Secrets Manager client
    var client = new AWS.SecretsManager({
        region: region
    });

    
    return new Promise((res, rej) => {
        client.getSecretValue({SecretId: secretName}, function(err, data) {
            if (err) {
                if (err.code === 'DecryptionFailureException')
                    // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
                    // Deal with the exception here, and/or rethrow at your discretion.
                    throw err;
                else if (err.code === 'InternalServiceErrorException')
                    // An error occurred on the server side.
                    // Deal with the exception here, and/or rethrow at your discretion.
                    throw err;
                else if (err.code === 'InvalidParameterException')
                    // You provided an invalid value for a parameter.
                    // Deal with the exception here, and/or rethrow at your discretion.
                    throw err;
                else if (err.code === 'InvalidRequestException')
                    // You provided a parameter value that is not valid for the current state of the resource.
                    // Deal with the exception here, and/or rethrow at your discretion.
                    throw err;
                else if (err.code === 'ResourceNotFoundException')
                    // We can't find the resource that you asked for.
                    // Deal with the exception here, and/or rethrow at your discretion.
                    throw err;
            }
            else {
                // Decrypts secret using the associated KMS CMK.
                // Depending on whether the secret is a string or binary, one of these fields will be populated.
                if ('SecretString' in data) {
                    secret = data.SecretString;
                } else {
                    let buff = new Buffer(data.SecretBinary, 'base64');
                    decodedBinarySecret = buff.toString('ascii');
                }
            }
            if (secret !== undefined) res(secret);
            else res(decodedBinarySecret);
        });
    });
}