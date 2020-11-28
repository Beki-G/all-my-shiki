/* eslint-disable no-console */
const db = require('../models');

module.exports = {
    async getAllSets(req, res) {
        try {
            const allSets = await db.SoulSet.find({});
            res.json(allSets);
        } catch (err) {
            console.log('Error in getAllSets: SoulSetController: ', err);
            res.json(err);
        }
    },
    async getDefaultSetId(req, res) {
        try {
            const brokenSetId = await db.SoulSet.findOne({ name: 'Broken' });
            res.json(brokenSetId);
        } catch (err) {
            console.log('Error in getBrokenSetId: SoulSetController: ', err);
            res.json(err);
        }
    },
};
