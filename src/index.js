const express = require('express');
const app = express();
const port = 8080;

const { CONFIG_MAP_VAR, SECRETS_VAR} = process.env

app.get("/", (_, res) => {
    res.send({
        "message": "Hello World!"
    })
});

app.listen(port, () => {
    console.log(`ConfigMap value: ${CONFIG_MAP_VAR}`);
    console.log(`Secrets value: ${SECRETS_VAR}`);
    console.log(`Server listening on port ${port}`);
});
