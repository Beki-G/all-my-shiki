/* eslint-disable no-console */
// const Object = require('mongoose').Types.ObjectId;
// const _ = require('lodash');
const db = require('../models');

module.exports = {
    async addNewCharacter(req, res) {
        try {
            const newCharacter = await db.Character.create(req.body);
            res.json(newCharacter);
        } catch (error) {
            console.log('Error in addNewCharacter: CharacterController, ', error);
            res.json(error);
        }
    },
};
