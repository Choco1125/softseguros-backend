const { Router } = require('express');

const router = Router();
const userController = require('../controllers/client.controller');

router.get('/:document?', userController.find);
router.post('/', userController.save);
router.put('/:document', userController.update);
router.delete('/:document', userController.remove);

module.exports = router;
