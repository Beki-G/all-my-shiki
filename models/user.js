const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = Schema({
    userName: {
        type: String,
    },
    password: {
        type: String,
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team',
    }],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'ModCharacter',
    }],
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    auth0Id: {
        type: String,
    },
    guild: {
        type: String,
        default: 'N/A',
    },
    privileges: {
        type: Array,
    },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
