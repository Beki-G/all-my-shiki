const router = require('express').Router();

const userController = require('../../controllers/UserController');

router.route('/')
    .post(userController.createUser);
router.route('/:id')
    .get(userController.isUser);

module.exports = router;
