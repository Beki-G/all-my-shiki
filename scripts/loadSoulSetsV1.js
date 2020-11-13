/* eslint-disable no-console */
const mongoose = require('mongoose');
const db = require('../models');
const soulsData = require('./soulSets');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shikidata', { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

db.SoulSet.deleteMany({})
    .then(() => db.SoulSet.insertMany(soulsData))
    .then((newData) => {
        console.log(`${newData} records inserted`);
        process.exit(1);
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
