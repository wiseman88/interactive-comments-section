<template>
    <footer class="comment-footer">
        <div class="vote">
            <button @click="upvote()" :disabled="downVoted">
                <PlusIcon />
            </button>
            <span class="vote-total">
                {{ comment.score }}
            </span>
            <button @click="downvote()" :disabled="upVoted">
                <MinusIcon />
            </button>
        </div>
        <div v-if="checkCurrentUser(data.currentUser.username, comment.user.username)" class="comment-action">
            <ActionButton :text="'delete'" class="color-secondary mr-1" @click="isOpen = true">
                <DeleteIcon />
            </ActionButton>
            <ActionButton :text="'edit'" class="color-primary" @click="setActiveComment(comment.id, 'editing')">
                <EditIcon />
            </ActionButton>
        </div>
        <ActionButton v-else :text="'reply'" class="color-primary" @click="setActiveComment(comment.id, 'replying')">
            <ReplyIcon />
        </ActionButton>
    </footer>
</template>

<script setup>
import PlusIcon from '../icons/PlusIcon.vue';
import MinusIcon from '../icons/MinusIcon.vue';
import ReplyIcon from '../icons/ReplyIcon.vue';
import EditIcon from '../icons/EditIcon.vue';
import DeleteIcon from '../icons/DeleteIcon.vue';
import ActionButton from '../ActionButton.vue';
import { checkCurrentUser } from '/src/user.js';
import { useCommentStore } from '../../stores/comment';
import { ref } from 'vue';

const props = defineProps({
    comment: Object
})

const data = useCommentStore()

const { setActiveComment } = data

let upVoted = ref(false)
let downVoted = ref(false)

const upvote = () => {
    !upVoted.value ? props.comment.score++ : props.comment.score--
    upVoted.value = !upVoted.value

    data.saveDataToLocalStorage(data)
}

const downvote = () => {
    !downVoted.value ? props.comment.score-- : props.comment.score++
    downVoted.value = !downVoted.value

    data.saveDataToLocalStorage(data)
}
</script>

<style lang="scss" scoped>

</style>