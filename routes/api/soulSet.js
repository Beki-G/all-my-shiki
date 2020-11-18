const router = require('express').Router();
const soulSetController = require('../../controllers/SoulSetController');

router.route('/')
    .get(soulSetController.getAllSets);

module.exports = router;
