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
    // eslint-disable-next-line consistent-return
    async getModCharacterById(req, res) {
        try {
            if (!ObjectId.isValid(req.params.id)) return res.json({ error: 'Invalid Id' });
            const isCharacter = await db.ModCharacter.find({ _id: req.params.id }).countDocuments() > 0;

            if (!isCharacter) return res.json(isCharacter);

            const character = await db.ModCharacter.findOne({ _id: req.params.id }).populate(' soulsetMain soulsetSub').populate('creatorId', 'userName guild').populate({ path: 'character', populate: { path: 'tags', select: '-_id' } });
            res.json(character);
        } catch (err) {
            console.error('Error in getModCharacterById, ModifiedCharacterController:  ', err);
            res.json(err);
        }
    },
    async updateModCharacterById(req, res) {
        try {
            const character = await db.ModCharacter.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
            res.json(character);
        } catch (err) {
            console.error('Error in updateModCharacterById, ModifiedCharacterController:  ', err);
            res.json(err);
        }
    },
    async getAllPublicModChara(req, res) {
        try {
            const allPublicCharacters = await db.ModCharacter.find({ isPrivate: false })
                .populate(' soulsetMain soulsetSub').populate('creatorId', 'userName guild')
                .populate({ path: 'character', populate: { path: 'tags', select: '-_id' } })
                .sort({ dateCreated: -1 });
            res.json(allPublicCharacters);
        } catch (err) {
            console.error('Error in getAllPublicModChara, ModifiedCharacterController:  ', err);
            res.json(err);
        }
    },
};
