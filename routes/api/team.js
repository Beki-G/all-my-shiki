const router = require('express').Router();

const teamController = require('../../controllers/TeamController');

router.route('/')
    .post(teamController.createTeam);

module.exports = router;
