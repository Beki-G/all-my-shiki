/* eslint-disable no-console */
// const Object = require('mongoose').Types.ObjectId;
const _ = require('lodash');
const db = require('../models');

module.exports = {
    async getAllTagNames(req, res) {
        // console.log("I'm in all tag names");
        try {
            const allTags = await db.Tag.find({}, { _id: 1, tag: 1 });
            // console.log('allTags in get allTagNames, ', allTags);
            res.json(allTags);
        } catch (error) {
            console.log('Error in AllTagNames: TagController:', error);
            res.json(error);
        }
    },
    async addNewTag(req, res) {
        try {
            const newTag = await db.Tag.create(req.body);
            // console.log('newTag is: ', newTag);
            res.json(newTag);
        } catch (error) {
            console.log('Error in NewTag: TagController', error);
            res.json(error);
        }
    },
};
