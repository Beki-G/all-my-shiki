import mongoose, { model } from 'mongoose';

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

const Character = model('Character', characterSchema);

export default Character;
