const router = require('express').Router();
const soulSetController = require('../../controllers/SoulSetController');

router.route('/')
    .get(soulSetController.getAllSets);
router.route('/default')
    .get(soulSetController.getDefaultSetId);

module.exports = router;
