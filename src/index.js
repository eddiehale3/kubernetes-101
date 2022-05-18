const express = require('express');
const app = express();
const port = 8080;

app.get("/", (_, res) => {
    res.send({
        "message": "Hello World!"
    })
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
