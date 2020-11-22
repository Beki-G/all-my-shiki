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
        }
    },
};
