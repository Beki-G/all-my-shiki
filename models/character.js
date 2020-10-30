const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
    },
    skillsEvo: {
        type: Array,
    },
    baseStats: {
        type: Object,
    },
    evoBaseStats: {
        type: Object,
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
    },
    ],

});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
