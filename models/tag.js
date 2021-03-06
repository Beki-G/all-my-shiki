const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagSchema = Schema({
    tag: {
        type: String,
    },
    definition: {
        type: String,
    },
    groups: {
        type: Array,
    },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
