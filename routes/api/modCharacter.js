const router = require('express').Router();
const modCharacterController = require('../../controllers/ModifiedCharacterController');

router.route('/')
    .post(modCharacterController.addModCharacter);

module.exports = router;
