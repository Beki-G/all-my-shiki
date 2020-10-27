import mongoose, { model } from 'mongoose';

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
    favorties: [{
        type: Schema.Types.ObjectId,
        ref: 'ModCharacter',
    }],
    dateCreated: {
        type: Date,
        default: Date.now,
    },

});

const User = model('User', userSchema);

export default User;
