const router = require('express').Router();

const tagController = require('../../controllers/TagController');

router.route('/')
    .get(tagController.getAllTagNames)
    .post(tagController.addNewTag);

router.route('/:id')
    .get(tagController.getTagById);

module.exports = router;
