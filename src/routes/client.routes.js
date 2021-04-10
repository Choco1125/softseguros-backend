const { Router } = require('express');

const router = Router();
const userController = require('../controllers/client.controller');

router.get('/:id?', userController.find);
router.post('/', userController.save);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

module.exports = router;
