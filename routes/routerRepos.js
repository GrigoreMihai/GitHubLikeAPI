const express = require('express');
const reposController = require('../controllers/ReposController');

const routerRepos = express.Router();

routerRepos.get('/repos', reposController.index);
routerRepos.post('/repos', reposController.create);
routerRepos.get('/repos/:id', reposController.show);
routerRepos.put('/repos/:id', reposController.update);
routerRepos.delete('/repos/:id', reposController.delete);

module.exports = routerRepos;