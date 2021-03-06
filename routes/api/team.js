const router = require('express').Router();

const teamController = require('../../controllers/TeamController');

router.route('/')
    .post(teamController.createTeam)
    .get(teamController.getAllPublicTeams);
router.route('/user/:id')
    .get(teamController.getUserTeams);
router.route('/userbasic/:id')
    .get(teamController.getUserTeamsBasicInfo);
router.route('/:id')
    .get(teamController.getTeamById)
    .put(teamController.updateTeambyTeamId);
router.route('/like')
    .post(teamController.addLike)
    .patch(teamController.removeLike);
router.route('/like/:id')
    .get(teamController.getLikeCount);

module.exports = router;
