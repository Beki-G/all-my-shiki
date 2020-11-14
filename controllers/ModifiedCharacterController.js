/* eslint-disable no-console */
// eslint-disable-next-line prefer-destructuring
// const ObjectId = require('mongoose').Types.ObjectId;
const db = require('../models');

module.exports = {
    async addModCharacter(req, res) {
        try {
            const newModChara = await db.ModCharacter.create(req.body);
            res.json(newModChara);
        } catch (err) {
            console.log('Error in AddModCharacter: ModifiedCharacterController, ', err);
            res.json(err);
        }
    },
    async addModCharacterFromBase(req, res) {
        try {
            const newModChara = await db.ModCharacter.create(req.body);
            res.json(newModChara);
        } catch (err) {
            console.log('Error in AddModCharacterFromBase: ModifiedCharacterController, ', err);
            res.json(err);
        }
    },
    async getAllModCharaByUserId(req, res) {
        try {
            const allModChara = await db.ModCharacter.find({ creatorId: req.params.id }).populate(' soulsetMain soulsetSub').populate('creatorId', 'userName guild').populate({ path: 'character', populate: { path: 'tags', select: '-_id' } });
            res.json(allModChara);
        } catch (err) {
            console.log('Error in getAllModCharaByUserId: ModifiedCharacterController, ', err);
            res.json(err);
        }
    },
};
