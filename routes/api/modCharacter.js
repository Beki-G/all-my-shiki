const router = require('express').Router();
const modCharacterController = require('../../controllers/ModifiedCharacterController');

router.route('/')
    .post(modCharacterController.addModCharacter);
router.route('/base')
    .post(modCharacterController.addModCharacterFromBase);

module.exports = router;
