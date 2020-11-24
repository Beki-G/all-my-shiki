const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    userNotes: {
        type: String,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
        default: '5 shikigami + Onmyoji',
    },
    onmyoji: {
        type: String,
    },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
