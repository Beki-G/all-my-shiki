const router = require('express').Router();
const modCharacterController = require('../../controllers/ModifiedCharacterController');

router.route('/')
    .post(modCharacterController.addModCharacter);
router.route('/:id')
    .get(modCharacterController.getAllModCharaByUserId)
    .delete(modCharacterController.deleteModCharacter);
router.route('/character/:id')
    .get(modCharacterController.getModCharacterById);
router.route('/base')
    .post(modCharacterController.addModCharacterFromBase);

module.exports = router;
