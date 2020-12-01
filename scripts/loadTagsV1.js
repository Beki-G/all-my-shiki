/* eslint-disable no-console */
const mongoose = require('mongoose');
const _ = require('lodash');
const db = require('../models');
const tagsData = require('./tags');
require('dotenv').config();

console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shikidata', { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

async function getGroupsData(groupArr) {
    if (groupArr) {
        const newGroupArr = await Promise.all(groupArr.map((groupName) => {
            const newGroupName = _.startCase(groupName);
            return newGroupName;
        }));

        // console.log('newGroup Arr', newGroupArr);
        return newGroupArr;
    }

    return [];
}

async function getTagData() {
    // console.log('Ping 1');
    const tags = await Promise.all(tagsData.map(async (tag) => {
        const newTagName = _.startCase(tag.tag);
        // console.log('Ping 2');

        const newGroupArr = await getGroupsData(tag.groups);

        const newTagObj = {
            tag: newTagName,
            definition: tag.definition,
            groups: newGroupArr,
        };
        return newTagObj;
    }));
    // console.log(tags);
    return tags;
}

getTagData().then((data) => {
    db.Tag.deleteMany({})
        .then(() => db.Tag.collection.insertMany(data))
        .then((newData) => {
            console.log(`${newData.result.n} records inserted`);
            process.exit(1);
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
});
