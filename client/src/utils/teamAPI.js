/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    getUserTeams: async function( userId){
        const { data } = await axios.get('/api/team/user/'+userId);
        return data;
    },
    createTeam: async function () {
        const { data } = await axios.post('/api/team')
        return data;
    },
    getTeamByID: async function(teamId){
        const { data } = await axios.get('/api/team/'+teamId)
        return data;
    }
}