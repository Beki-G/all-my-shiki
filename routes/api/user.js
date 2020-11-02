const router = require('express').Router();

const userController = require('../../controllers/UserController');

router.route('/')
    .post(userController.createUser);
router.route('/:id')
    .get(userController.isUser);
router.route('/profile/:id')
    .get(userController.getUser);

module.exports = router;
