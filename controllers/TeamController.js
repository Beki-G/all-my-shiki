/* eslint-disable max-len */
/* eslint-disable no-console */
// eslint-disable-next-line prefer-destructuring
const ObjectId = require('mongoose').Types.ObjectId;
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

    async getUserTeamsBasicInfo(req, res) {
        try {
            const teams = await db.Team.find({ creatorId: req.params.id })
                .populate({ path: 'teammates', populate: { path: ' soulsetMain soulsetSub', select: 'name -_id' } })
                .sort({ dateCreated: -1 });
            res.json(teams);
        } catch (err) {
            console.log('Error in getUserTeams, TeamController: ', err);
            res.json(err);
        }
    },
    // eslint-disable-next-line consistent-return
    async getTeamById(req, res) {
        try {
            if (!ObjectId.isValid(req.params.id)) return res.json({ error: 'Invalid Id' });
            const isTeam = await db.Team.find({ _id: req.params.id }).countDocuments() > 0;

            if (!isTeam) return res.json(isTeam);

            const team = await db.Team.findOne({ _id: req.params.id }).populate({
                path: 'teammates creatorId',
                populate: {
                    path: 'character soulsetMain soulsetSub',
                    populate: { path: 'tags', select: '-_id -definition' },
                    select: '-fourSet -twoSet -type -__v -skills -skillsEvo',
                },
                select: '-__v -auth0Id -favorites -privileges -teams -dateCreated',
            });
            res.json(team);
        } catch (err) {
            console.log('Error in getTeamById, TeamController: ', err);
            res.json(err);
        }
    },
    async updateTeambyTeamId(req, res) {
        try {
            const updatedTeam = await db.Team.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
            res.json(updatedTeam);
        } catch (err) {
            console.log('Error in updateTeambyTeamId, TeamController: ', err);
            res.json(err);
        }
    },
    async getAllPublicTeams(req, res) {
        try {
            const allPublicTeams = await db.Team.find({ isPrivate: false })
                .populate('creatorId', 'userName guild')
                .populate({ path: 'teammates', populate: { path: 'character soulsetMain soulsetSub', select: 'name -_id' } })
                .sort({ dateCreated: -1 });

            res.json(allPublicTeams);
        } catch (err) {
            console.log('Error in getAllPublicTeams, TeamController: ', err);
            res.json(err);
        }
    },
    async addLike(req, res) {
        try {
            // console.log('req in add like: ', req.body);
            const liked = await db.Team.findOneAndUpdate(
                { _id: req.body.teamId },
                { $addToSet: { likes: new ObjectId(req.body.userId) } },
                { new: true },
            );
            res.json(liked);
        } catch (err) {
            console.log('Error in TeamController.addLike: ', err);
            res.json(err);
        }
    },
    async removeLike(req, res) {
        // console.warn('fired');
        try {
            const removed = await db.Team.findByIdAndUpdate(
                { _id: req.body.teamId },
                { $pull: { likes: new ObjectId(req.body.userId) } },
                { returnOriginal: false },
            );
            // console.log(removed);
            res.json(removed);
        } catch (err) {
            console.log('Error in TeamController.removeLike: ', err);
            res.json(err);
        }
    },
    async getLikeCount(req, res) {
        try {
            const likeCount = await db.Team.aggregate([
                { $match: { _id: new ObjectId(req.params.id) } },
                { $project: { numOfLikes: { $size: '$likes' } } },
            ]);
            res.json(likeCount[0].numOfLikes);
        } catch (err) {
            console.log('Error in TeamController.getLikeCount: ', err);
            res.json(err);
        }
    },
};
