<template>
    <div class="comment-content">
        <CommentHeader :comment="comment" />
        <CommentBody :comment="comment" />
        <div class="comment-footer">
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
            <ActionButton v-else :text="'reply'" class="color-primary"
                @click="setActiveComment(comment.id, 'replying')">
                <ReplyIcon />
            </ActionButton>
        </div>
    </div>
    <div class="replies-container" v-if="getReplies">
        <div v-for="reply in getReplies" :key="reply.id">
            <Comment :comment="reply" />
        </div>
    </div>
    <Modal v-if="checkCurrentUser(data.currentUser.username, comment.user.username)" :show="isOpen"
        @close="isOpen = false" :commentId="comment.id" />
    <div v-if="activeComment.id === comment.id">
        <CommentCreate v-if="activeComment.status === 'replying'" :modelValue="'@' + comment.user.username + ' '"
            :parentId="comment.id" :text="'send'" />
        <CommentCreate v-if="activeComment.status === 'editing'" :model-value="comment.content" :id="comment.id"
            :text="'update'" />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import PlusIcon from '../icons/PlusIcon.vue';
import MinusIcon from '../icons/MinusIcon.vue';
import ReplyIcon from '../icons/ReplyIcon.vue';
import EditIcon from '../icons/EditIcon.vue';
import DeleteIcon from '../icons/DeleteIcon.vue';
import { useCommentStore } from '../../stores/comment';
import ActionButton from '../ActionButton.vue';
import Modal from '../Modal.vue';
import CommentCreate from './CommentCreate.vue';
import { storeToRefs } from 'pinia';
import { checkCurrentUser } from '/src/user.js'
import CommentHeader from './CommentHeader.vue';
import CommentBody from './CommentBody.vue';

const props = defineProps({
    comment: Object,
    replies: Object
})

const data = useCommentStore();

const { activeComment } = storeToRefs(data)
const { setActiveComment } = data

let isOpen = ref(false);
let upVoted = ref(false);
let downVoted = ref(false);

const upvote = () => {
    !upVoted.value ? props.comment.score++ : props.comment.score--
    upVoted.value = !upVoted.value

    data.saveDataToLocalStorage(data);
}

const downvote = () => {
    !downVoted.value ? props.comment.score-- : props.comment.score++
    downVoted.value = !downVoted.value

    data.saveDataToLocalStorage(data);
}

const getReplies = computed(() => {
    return data.comments
        .filter(comment => comment.parentId === props.comment.id)
        .sort((a, b) => a.createdAt - b.createdAt)
})
</script>

<style lang="scss">
.comment-content {
    background-color: $color-white;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
}

.comment-header {
    display: flex;
    align-items: center;
    text-transform: lowercase;
    margin-bottom: 1rem;

    .name {
        font-weight: 500;
    }

    .date {
        margin-left: 1rem;
        text-transform: lowercase;
        color: $primary-moderate;
    }

    .current-user {
        background-color: $primary;
        color: $color-white;
        padding: 3px 7px;
        margin-left: 8px;
        font-weight: 500;
        font-size: 0.8rem;
        border-radius: 2px;
    }
}

.avatar {
    margin-right: 1rem;

    &,
    img {
        width: 32px;
        height: 32px;
    }
}

.comment-body {
    color: $primary-moderate;
    line-height: 1.5rem;
    margin-bottom: 1rem;

    .reply-to {
        color: $primary;
        font-weight: 500;
    }
}

.comment-footer {
    display: flex;
    justify-content: space-between;

    .vote {
        display: inline-flex;
        align-items: center;
        background-color: $color-very-light;
        padding: 12px 11px 12px 17px;
        border-radius: 0.5rem;

        .vote-total {
            margin: 0 18px 0 15px;
            color: $primary;
            font-weight: 500;
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
        }
    }
}

.comment-action {
    display: flex;
    align-items: center;
}

.replies-container {
    padding-left: 1rem;
    border-left: 1px solid #E8E9ED;
}
</style>