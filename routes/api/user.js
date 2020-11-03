const router = require('express').Router();

const userController = require('../../controllers/UserController');

router.route('/')
    .post(userController.createUser);
router.route('/:id')
    .get(userController.isUser);
router.route('/profile/:id')
    .get(userController.getUser);
router.route('/favorites')
    .post(userController.addFavorite)
    .put(userController.removeFavorite);

module.exports = router;
