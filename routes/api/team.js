const router = require('express').Router();

const teamController = require('../../controllers/TeamController');

router.route('/')
    .post(teamController.createTeam);
router.route('/:id')
    .get(teamController.getUserTeams);

module.exports = router;
