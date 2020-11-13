/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default { 
    createModCharaFromBase:async function(userId, characterId) {
        const obj = {
            creatorId: userId,
            character: characterId,
        }
        const { data } = await axios.post('/api/modchara/base', obj)
        return data;
    },
}
