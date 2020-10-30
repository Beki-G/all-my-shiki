/* eslint-disable object-shorthand */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const db = require('../models');
const shikiData = require('./shiki');

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/shikidata',
);

const removeFalsy = (obj) => {
    const newArr = [];

    Object.keys(obj).forEach((tagged) => {
        if (obj[tagged]) {
            newArr.push(tagged);
        }
    });

    // console.log('NewArr is ', newArr);
    return newArr;
};
async function getId(tag) {
    const { _id } = await db.Tag.findOne({ tag: tag }, { _id: 1 });
    // console.log(`Id for ${tag} is: `, _id);
    return _id;
}

async function getTagsIdArr(tagsArr) {
    const tagsIdArr = await Promise.all(tagsArr.map(async (tag) => {
        const id = await getId(tag);
        // console.log('id in getTagsIdArr is, ', id);
        return id;
    }));

    // console.log('tagsIDArr is, ', tagsIdArr);
    return tagsIdArr;
}

async function getShikiData() {
    const newShikiData = await Promise.all(shikiData.map(async (shiki) => {
        const newTags = removeFalsy(shiki.tags);
        const tagIds = await getTagsIdArr(newTags);
        // console.log(tagIds);
        const newShikiObj = {
            name: shiki.name,
            tags: tagIds,
        };

        // console.log('new Shiki obj', newShikiObj);
        return newShikiObj;
    }));

    return newShikiData;
}

getShikiData().then((data) => {
    console.log('data is, ', data);
    db.Character.remove({})
        .then(() => db.Character.collection.insertMany(data))
        .then((newData) => {
            console.log(`${newData.result.n} records inserted`);
            process.exit(0);
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
});

// console.log('newShikiData is:', newShikiData);
