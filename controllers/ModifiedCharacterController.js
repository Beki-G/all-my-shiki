/* eslint-disable max-len */
/* eslint-disable no-console */
// eslint-disable-next-line prefer-destructuring
const ObjectId = require('mongoose').Types.ObjectId;
const db = require('../models');

module.exports = {
    async addModCharacter(req, res) {
        try {
            const newModChara = await db.ModCharacter.create(req.body);
            res.json(newModChara);
        } catch (err) {
            console.error('Error in AddModCharacter: ModifiedCharacterController, ', err);
            res.json(err);
        }
    },
    async addModCharacterFromBase(req, res) {
        try {
            const newModChara = await db.ModCharacter.create(req.body);
            res.json(newModChara);
        } catch (err) {
            console.error('Error in AddModCharacterFromBase: ModifiedCharacterController, ', err);
            res.json(err);
        }
    },
    async getAllModCharaByUserId(req, res) {
        try {
            const allModChara = await db.ModCharacter.find({ creatorId: req.params.id }).populate(' soulsetMain soulsetSub').populate('creatorId', 'userName guild').populate({ path: 'character', populate: { path: 'tags', select: '-_id' } });
            res.json(allModChara);
        } catch (err) {
            console.error('Error in getAllModCharaByUserId: ModifiedCharacterController, ', err);
            res.json(err);
        }
    },
    async deleteModCharacter(req, res) {
        try {
            // first delete the id from all users favorites
            await db.User.updateMany({ favorites: req.params.id }, { $pull: { favorites: new ObjectId(req.params.id) } });
            // Then delete the actual document from the database
            const modDeleted = await db.ModCharacter.findByIdAndDelete({ _id: req.params.id });
            // may need to delete from teams as well!!!!
            res.json(modDeleted);
        } catch (err) {
            console.error('Error in deleteModCharacter: ModifiedCharacterController, ', err);
            res.json(err);
        }
    },
};
