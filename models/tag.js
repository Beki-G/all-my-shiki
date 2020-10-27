import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const tagSchema = Schema({
    name: {
        type: String,
    },
    definition: {
        type: String,
    },
    parent: {
        type: String,
    },
});

const Tag = model('Tag', tagSchema);

export default Tag;
