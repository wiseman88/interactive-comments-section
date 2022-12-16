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
        },
        addComment(data, pId, pUsername, content) {
            data.comments.unshift({
                id: data.commentsCount + 1,
                parentId: pId ? pId : null,
                replyingTo: pUsername ? pUsername : null,
                content: content,
                createdAt: Date.now(),
                score: 0,
                user: {
                    username: data.currentUser.username,
                    image: {
                        png: data.currentUser.image.png,
                        webp: data.currentUser.image.webp
                    }
                },
            })

            data.saveDataToLocalStorage(data)

            data.activeComment = {}
        },
        editComment(data, id, content) {
            let filteredComment = data.comments.find(comment => comment.id === id)

            filteredComment['content'] = content

            data.saveDataToLocalStorage(data)

            data.activeComment = {}
        },
        deleteComment(data, id) {
            let filteredComments = data.comments.filter(comment => comment.id !== id)

            data.updateStoreData(filteredComments)
            data.saveDataToLocalStorage(data)
        }
    }
})