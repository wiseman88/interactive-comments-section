import { defineStore } from "pinia";
import data from '../data.json';

export const useCommentStore = defineStore({
    id: 'comment',
    state: () => {
        return {
            jsonData: data,
        }
    },
    getters: {
        comments: (state) => state.jsonData.comments,
        currentUser: (state) => state.jsonData.currentUser
    },
    actions: {

    }
})