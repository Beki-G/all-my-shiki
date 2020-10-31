/* eslint-disable no-console */
const mongoose = require('mongoose');
const _ = require('lodash');
const db = require('../models');
const tagsData = require('./tags');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shikidata', { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

async function getTagData() {
    const tags = await Promise.all(tagsData.map((tag) => {
        const newTagName = _.startCase(tag.tag);

        const newTagObj = {
            tag: newTagName,
            definition: tag.definition,
        };
        return newTagObj;
    }));
    console.log(tags);
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
