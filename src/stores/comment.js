import { defineStore } from "pinia";

export const useCommentStore = defineStore({
    id: 'comment',
    state: () => {
        return {
            jsonData: JSON.parse(localStorage.getItem('data')),
        }
    },
    getters: {
        comments: (state) => state.jsonData.comments,
        commentsCount: (state) => state.jsonData.comments.length,
        currentUser: (state) => state.jsonData.currentUser
    },
    actions: {
        saveDataToLocalStorage(dataToSave) {
            localStorage.setItem('data', JSON.stringify(dataToSave))
        }
    }
})