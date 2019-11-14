const express = require('express');
const gistsController = require('../controllers/GistsController');

const routerGists = express.Router();

router.get('/gists', gistsController.index);
router.post('/gists', gistsController.create);
router.get('/gists/:id', gistsController.show);
router.put('/gists/:id', gistsController.update);
router.delete('/gists/:id', gistsController.delete);

module.exports = routerGists;
