const { Router } = require('express');

const router = Router();
const userController = require('../controllers/client.controller');

router.post('/', userController.save);

module.exports = router;
