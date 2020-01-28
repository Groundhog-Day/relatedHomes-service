const express = require('express');
const app = express();
const port = 4321;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
