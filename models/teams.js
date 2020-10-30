const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    soulsetMain: [{
        type: Schema.Types.ObjectId,
        ref: 'Soulset',
    }],
    soulsetSub: [{
        type: Schema.Types.ObjectId,
        refL: 'Soulset',
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
    teammates: [{
        type: Schema.Types.ObjectId,
        ref: 'ModCharacter',
    }],
    teamFormat: {
        type: String,
    },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
