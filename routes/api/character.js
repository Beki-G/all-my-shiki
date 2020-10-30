const router = require('express').Router();

const characterController = require('../../controllers/CharacterController');

router.route('/')
    .post(characterController.addNewCharacter);

router.route('/:id')
    .get(characterController.getCharacterProfile);

router.route('/charactertags/:id')
    .get(characterController.findCharactersWithTag);

module.exports = router;
