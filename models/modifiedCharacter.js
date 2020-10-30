const mongoose = require('mongoose');

const { Schema } = mongoose;

const modifiedCharacter = Schema({
    character: [{
        type: Schema.Types.ObjectId,
        ref: 'Character',
    }],
    soulsetMain: [{
        type: Schema.Types.ObjectId,
        ref: 'Soulset',
    }],
    soulsetSub: [{
        type: Schema.Types.ObjectId,
        ref: 'Soulset',
    }],
    primarySoulStats: {
        type: String,
    },
    userNotes: {
        type: String,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
    },
    likes: {
        type: Array,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    dateModified: {
        type: Date,
    },
    isPrivate: {
        type: Boolean,
        default: true,
    },
});

const ModCharacter = mongoose.model('ModCharacter', modifiedCharacter);

module.exports = ModCharacter;
