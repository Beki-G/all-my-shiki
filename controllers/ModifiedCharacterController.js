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
};
