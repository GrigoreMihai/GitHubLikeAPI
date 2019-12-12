const express = require('express');
const gistsController = require('../controllers/GistsController');

const routerGists = express.Router();

routerGists.get('/gists', gistsController.index);
routerGists.post('/gists', gistsController.create);
routerGists.get('/gists/:id', gistsController.show);
routerGists.put('/gists/:id', gistsController.update);
routerGists.delete('/gists/:id', gistsController.delete);

module.exports = routerGists;
