/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default { 
    getAllSoulSets: async function() {
        const { data } = await axios.get('/api/soulset')
        return data;
    }
}