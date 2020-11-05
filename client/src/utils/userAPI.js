/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    isUser: async function(auth0id) {
        const { data } = await axios.get("/api/user/"+auth0id);
        return data;
    },
    createUser: async function(userDetails) {
        const { data } = await axios.post("/api/user", userDetails);
        return data;
    },
    getUser: async function(auth0Id) {
        const { data } = await axios.get("/api/user/profile/"+auth0Id);
        return data;
    },
    addFavorite: async function(userId, characterId) {
        const newFavorite = {
            userId: userId,
            characterId: characterId
        }

        const { data } = await axios.post("/api/user/favorites", newFavorite)
        return data;
    }, 
    removeFavorite: async function(userId, characterId) {
        const removeFavorite = {
            userId: userId,
            characterId: characterId
        }
        const { data } = await axios.put("/api/user/favorites", removeFavorite)
        return data;
    },
    updateUser: async function(_id, updates) {
        const body = {
            id:_id,
            update:updates
        }
        const { data } = await axios.put("/api/user", body)
        return data;
    },
    isUsernameAvailable: async function(userName){
        const { data } =await axios.get("/api/user/username/"+userName)
        return data;
    },
}