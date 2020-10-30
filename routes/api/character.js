const router = require('express').Router();

const characterController = require('../../controllers/CharacterController');

router.route('/')
    .post(characterController.addNewCharacter);

module.exports = router;
