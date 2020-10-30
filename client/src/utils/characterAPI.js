/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    getCharactersWithTag: async function(tag) {
        const { data } = await axios.get("/api/character/charactertags/"+tag);
        return data;
    }
}