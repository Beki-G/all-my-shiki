/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default { 
    createModCharaFromBase:async function(userId, characterId, characterName) {
        const obj = {
            creatorId: userId,
            character: characterId,
            name: characterName,
        }
        const { data } = await axios.post('/api/modchara/base', obj)
        return data;
    },
    getAllUserModChara: async function(userId) {
        const { data }  = await axios.get('/api/modchara/'+userId)
        return data;
    }
}
