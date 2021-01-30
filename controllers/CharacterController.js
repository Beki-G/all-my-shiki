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
            const charactersArr = await db.Character
                .find({ tags: req.params.id })
                .sort({ name: 1 });
            // console.log(charactersArr);
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
    async getAllCharacterNames(req, res) {
        try {
            const allCharacters = await db.Character.find({}).select('-skills -__v -skillsEvo -baseStats -evoBaseStats -tags').sort({ name: 1 });
            res.json(allCharacters);
        } catch (err) {
            console.error('Error in getCharacterProfile Character Profile: ', err);
            res.json(err);
        }
    },
    async getAllCharactersTagsPopulated(req, res) {
        try {
            const allCharacters = await db.Character.find()
                .select('-skills -skillsEvo')
                .populate({ path: 'tags', select: ' -definition -_id -groups' })
                .sort('name');
            const mappedCharacters = allCharacters.map((character) => {
                const newTagsArr = character.tags.map((tags) => tags.tag);
                // eslint-disable-next-line no-underscore-dangle
                return { name: character.name, _id: character._id, tags: newTagsArr };
            });

            res.json(mappedCharacters);
        } catch (err) {
            console.error('Error in getAllCharactersTagsPopulated, CharacterController: ', err);
            res.json(err);
        }
    },
};
