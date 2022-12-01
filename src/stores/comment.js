import { defineStore } from "pinia";

export const useCommentStore = defineStore({
    id: 'comment',
    state: () => {
        return {
            jsonData: JSON.parse(localStorage.getItem('data')),
            activeComment: {
                id: null,
                status: ''
            }
        }
    },
    getters: {
        comments: (state) => state.jsonData.comments,
        commentsOrderedByScore: (state) => state.jsonData.comments.sort((a, b) => b.score - a.score),
        commentsCount: (state) => state.jsonData.comments.length,
        currentUser: (state) => state.jsonData.currentUser
    },
    actions: {
        saveDataToLocalStorage(dataToSave) {
            let storageData = localStorage.getItem('data')
            storageData = storageData ? JSON.parse(localStorage.getItem('data')) : {}
            storageData['comments'] = dataToSave.comments
            localStorage.setItem('data', JSON.stringify(storageData))
        },
        updateStoreData(dataToStore) {
            this.jsonData.comments = dataToStore
        },
        setActiveComment(id, status) {
            this.activeComment.id = id
            this.activeComment.status = status
        }
    }
})