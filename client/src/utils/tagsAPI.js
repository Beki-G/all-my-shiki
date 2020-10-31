/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    //get all tag names 
    getAllTagNames: async function(){
        const { data } = await axios.get("/api/tag");
        return data;
    },
    getTagById: async function(id){
        const { data } = await axios.get('/api/tag/'+id);
        return data;
    }
}