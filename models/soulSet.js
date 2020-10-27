import mongoose, { model } from 'mongoose';

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

});

const SoulSet = model('SoulSet', soulSchema);

export default SoulSet;
