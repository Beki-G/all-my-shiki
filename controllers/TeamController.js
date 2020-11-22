/* eslint-disable max-len */
/* eslint-disable no-console */
// eslint-disable-next-line prefer-destructuring
// const ObjectId = require('mongoose').Types.ObjectId;
const db = require('../models');

module.exports = {
    async createTeam(req, res) {
        try {
            const newTeam = await db.Team.create(req.body);
            // console.log(newTeam);
            res.json(newTeam);
        } catch (err) {
            console.log('Error in CreateTeam, TeamController: ', err);
            res.json(err);
        }
    },
    async getUserTeams(req, res) {
        try {
            const teams = await db.Team.find({ creatorId: req.params.id }).populate({
                path: 'teammates',
                populate: {
                    path: 'character soulsetMain soulsetSub',
                    populate: { path: 'tags', select: '-_id -definition' },
                    select: '-fourSet -twoSet -type -__v -skills -skillsEvo',
                },
                select: '-likes -isPrivate -__v  -userNotes',
            });
            res.json(teams);
        } catch (err) {
            console.log('Error in getUserTeams, TeamController: ', err);
            res.json(err);
        }
    },
};
