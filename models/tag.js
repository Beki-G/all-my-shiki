const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagSchema = Schema({
    tag: {
        type: String,
    },
    definition: {
        type: String,
    },
    parent: {
        type: String,
    },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
