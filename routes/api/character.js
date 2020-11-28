const router = require('express').Router();

const characterController = require('../../controllers/CharacterController');

router.route('/')
    .post(characterController.addNewCharacter)
    .get(characterController.getAllCharacterNames);
router.route('/tags')
    .get(characterController.getAllCharactersTagsPopulated);
router.route('/:id')
    .get(characterController.getCharacterProfile);

router.route('/charactertags/:id')
    .get(characterController.findCharactersWithTag);

module.exports = router;
