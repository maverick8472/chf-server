const express = require('express');
const router = express.Router();

const {author} = require('../middleware/authorization');
const {authen} = require('../middleware/authentication');

const dietsController = require('../controllers/diets');

router.get('/:id',authen, author('user'), dietsController.getDiet);

router.get('/',authen, author('user'), dietsController.getAllDiets);

router.post('/', authen, author('user'), dietsController.addDiet);

module.exports = router;