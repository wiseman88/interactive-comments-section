import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: 'modal',
    state: () => {
        return {
            isOpen: false
        }
    },
    actions: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        }
    }
})