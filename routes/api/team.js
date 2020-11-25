const router = require('express').Router();

const teamController = require('../../controllers/TeamController');

router.route('/')
    .post(teamController.createTeam);
router.route('/user/:id')
    .get(teamController.getUserTeams);
router.route('/:id')
    .get(teamController.getTeamById)
    .put(teamController.updateTeambyTeamId);

module.exports = router;
