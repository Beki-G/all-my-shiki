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
    },
    deleteModifiedCharacter: async function(modifiedCharacterId) {
        const { data } = await axios.delete('/api/modchara/'+modifiedCharacterId)
        return data;
    }, 
    getModCharacterById: async function(modifiedCharacterId) {
        const { data } = await axios.get('/api/modchara/character/'+modifiedCharacterId);
        return data;
    },
    updateModCharacterById: async function(modCharacterId, update) {
        console.log("update",update)
        const { data } = await axios.put('/api/modchara/'+modCharacterId, update)
        return data;
    }
}
