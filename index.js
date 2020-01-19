const express = require('express');

const app = express();

const port = 3001;


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));