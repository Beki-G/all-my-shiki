/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default { 
    createModCharaFromBase:async function(userId, characterId, characterName, defaultSoulSet) {
        const obj = {
            creatorId: userId,
            character: characterId,
            name: characterName,
            soulsetMain: defaultSoulSet,
            soulsetSub: defaultSoulSet,
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
        const { data } = await axios.put('/api/modchara/'+modCharacterId, update)
        return data;
    },
    getAllPublicModCharacter: async function() {
        const { data } = await axios.get('/api/modchara');
        return data;
    },
    createModCharacter: async function(newChara){
        const { data } = await axios.post('/api/modchara', newChara)
        return data;
    }
}
