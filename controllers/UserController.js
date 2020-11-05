/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable no-console */
// eslint-disable-next-line prefer-destructuring
const ObjectId = require("mongoose").Types.ObjectId;
const db = require('../models');

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
            const newFavorites = await db.User.findOne({ _id: req.body.userId }, { favorites: 1, _id: 0 });
            res.json(newFavorites);
        } catch (err) {
            console.log('Error in removeFavorite: UserController,', err);
            res.json(err);
        }
    },
    async isUsernameInDb(req, res) {
        try {
            console.log("Pinged");
            const isUser = await db.User.exists({ userName: req.params.username });
            console.log(`${req.params.username} =`, isUser);
            res.json(isUser);
        } catch (err) {
            console.log('Error in isUsernameInDb: UserController:', err);
            res.json(err);
        }
    },
    async updateUser(req, res) {
        try {
            await db.User.findOneAndUpdate({ _id: req.body.id }, { $set: req.body.update });
            const user = await db.User.findOne({ _id: req.body.id });
            res.json(user);
        } catch (err) {
            console.log('Error in updateUser: UserControler: ', err);
            res.json(err);
        }
    },
};
