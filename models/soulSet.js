const mongoose = require('mongoose');

const { Schema } = mongoose;

const soulSchema = Schema({
    name: {
        type: String,
    },
    fourSet: {
        type: String,
    },
    twoSet: {
        type: String,
    },
    type: {
        type: String,
    },

});

const SoulSet = mongoose.model('SoulSet', soulSchema);

module.exports = SoulSet;
