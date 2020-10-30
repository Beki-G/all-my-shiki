const router = require('express').Router();

const tagController = require('../../controllers/TagController');

router.route('/')
    .get(tagController.getAllTagNames)
    .post(tagController.addNewTag);

module.exports = router;
