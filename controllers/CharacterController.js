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
    async findCharactersWithTag(req, res) {
        try {
            const charactersArr = await db.Character.find({ tags: req.params.id });
            console.log(charactersArr);
            res.json(charactersArr);
        } catch (error) {
            console.log('Error in FindCharactersWithTag: CharacterController, ', error);
            res.json(error);
        }
    },
    async getCharacterProfile(req, res) {
        try {
            const characterProfile = await db.Character.findOne({ _id: req.params.id }).populate('tags');
            res.json(characterProfile);
        } catch (error) {
            console.log('Error in getCharacterProfile: Character Profile', error);
            res.json(error);
        }
    },
};
