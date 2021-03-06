const mongoose = require('mongoose');

const { Schema } = mongoose;

const modifiedCharacter = Schema({
    name: {
        type: String,
    },
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
    },
    soulsetMain: {
        type: Schema.Types.ObjectId,
        ref: 'SoulSet',
    },
    soulsetSub: {
        type: Schema.Types.ObjectId,
        ref: 'SoulSet',
    },
    soulsetSlotTwo: {
        type: String,
    },
    soulsetSlotFour: {
        type: String,
    },
    soulsetSlotSix: {
        type: String,
    },
    userNotes: {
        type: String,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
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
