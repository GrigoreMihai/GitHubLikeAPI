const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
const router = require('./routes/router.js');
const routerRepos =require('./routes/routerRepos.js');
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(router);
app.use(routerRepos);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
