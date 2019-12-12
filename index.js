const express = require('express');
const bodyParser = require('body-parser'); // npm install --save body-parser

const app = express();
const port = 8000;
const router = require('./routes/router.js');
const routerRepos =require('./routes/routerRepos.js');
const routerGists =require('./routes/routerGists.js');
const jsonParser = bodyParser.json();

app.use(jsonParser);
    
app.use(router);
app.use(routerRepos);
app.use(routerGists);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));