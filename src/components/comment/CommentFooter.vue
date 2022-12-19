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
        <div v-if="checkCurrentUser(data.currentUser.username, comment.user.username)" class="action comment-action">
            <ActionButton :text="'delete'" class="color-secondary mr-1" @click="openModal">
                <DeleteIcon />
            </ActionButton>
            <ActionButton :text="'edit'" class="color-primary" @click="setActiveComment(comment.id, 'editing')">
                <EditIcon />
            </ActionButton>
        </div>
        <ActionButton v-else :text="'reply'" class="action color-primary"
            @click="setActiveComment(comment.id, 'replying')">
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

const emit = defineEmits(['emitOpenModal'])

const openModal = () => {
    emit('emitOpenModal');
}
</script>

<style lang="scss" scoped>
.comment-footer {
    display: flex;
    justify-content: space-between;

    .vote {
        width: 101px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        background-color: $color-very-light;
        padding: 12px 11px 12px 17px;
        border-radius: 0.5rem;

        .vote-total {
            margin: 0 18px 0 15px;
            color: $primary;
            font-weight: 500;

            @media (min-width: 768px) {
                display: block;
                margin: 20px 0;
                text-align: center;
            }
        }

        button {
            display: flex;
            justify-content: center;

            &:hover {
                svg {
                    path {
                        fill: $primary;
                    }
                }
            }

            @media (min-width: 768px) {
                margin: 0 auto;
            }
        }

        @media (min-width: 768px) {
            position: absolute;
            flex-direction: column;
            justify-content: center;
            top: 16px;
            left: 25px;
            box-sizing: border-box;
            width: 40px;
            padding: 10px 12px 15px;
        }
    }
}

.comment-action {
    display: flex;
    align-items: center;
}

.action {
    @media (min-width: 768px) {
        position: absolute;
        top: 25px;
        right: 25px;
    }
}
</style>