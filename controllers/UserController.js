/* eslint-disable no-console */
const db = require('../models');

module.exports = {
    async isUser(req, res) {
        try {
            const isUser = await db.User.find({ auth0Id: req.params.id }).count() > 0;
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
};
