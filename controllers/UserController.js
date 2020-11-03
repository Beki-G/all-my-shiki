/* eslint-disable max-len */
/* eslint-disable no-console */
const db = require('../models');
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
    async isUser(req, res) {
        try {
            const isUser = await db.User.find({ auth0Id: req.params.id }).countDocuments() > 0;
            res.json(isUser);
        } catch (err) {
            console.log('Error in isUser: UserController, ', err);
            res.json(err);
        }
    },
    async createUser(req, res) {
        try {
            const newUser = await db.User.create(req.body);
            res.json(newUser);
        } catch (err) {
            console.log('Error in createUser: UserController, ', err);
            res.json(err);
        }
    },

    async getUser(req, res) {
        try {
            const profile = await db.User.findOne({ auth0Id: req.params.id });
            res.json(profile);
        } catch (err) {
            console.log('Error in getUser: UserController, ', err);
            res.json(err);
        }
    },
    async addFavorite(req, res) {
        try {
            // eslint-disable-next-line max-len
            await db.User.findByIdAndUpdate({ _id: req.body.userId }, { $addToSet: { favorites: { $each: [req.body.characterId] } } });

            const newFavorites = await db.User.findOne({ _id: req.body.userId }, { favorites: 1, _id: 0 });
            res.json(newFavorites);
        } catch (err) {
            console.log('Error in addFavorite: UserController,', err);
            res.json(err);
        }
    },
    async removeFavorite(req, res) {
        try {
            await db.User.findByIdAndUpdate({ _id: req.body.userId },
                { $pull: { favorites: new ObjectId(req.body.characterId) } });
            const newFavorites = await db.User.findOne({ _id: req.body.id }, { favorites: 1, _id: 0 });
            res.json(newFavorites);
        } catch (err) {
            console.log('Error in removeFavorite: UserController,', err);
            res.json(err);
        }
    },
};
