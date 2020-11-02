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
    }
}