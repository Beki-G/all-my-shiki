/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';


export default {
    getGithubCommits: async function(){
        const { data } = await axios.get('https://api.github.com/repos/beki-g/all-my-shiki/commits')
        return data;
    }
}