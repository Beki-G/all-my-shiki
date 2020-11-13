const router = require('express').Router();

const userController = require('../../controllers/UserController');

router.route('/')
    .post(userController.createUser)
    .put(userController.updateUser);
router.route('/:id')
    .get(userController.isUser);
router.route('/profile/:id')
    .get(userController.getUser);
router.route('/username/:username')
    .get(userController.isUsernameInDb);
router.route('/favorites')
    .post(userController.addFavorite)
    .put(userController.removeFavorite);
router.route('/favorites/:id')
    .get(userController.getPopulatedFavorites);

module.exports = router;
