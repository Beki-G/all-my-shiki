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
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isMod: {
        type: Boolean,
        default: false,
    },
    isDeveloper: {
        type: Boolean,
        default: false,
    },
    auth0Id: {
        type: String,
    },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
