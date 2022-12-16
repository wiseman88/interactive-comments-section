<template>
    <div class="comment-content">
        <CommentHeader :comment="comment" />
        <CommentBody :comment="comment" />
        <CommentFooter @emitOpenModal="isOpen = true" :comment="comment" />
    </div>
    <CommentReply v-if="getReplies" :replies="getReplies" />
    <Modal v-if="checkCurrentUser(data.currentUser.username, comment.user.username)" @emitCloseModal="isOpen = false"
        v-show="isOpen" :commentId="comment.id" />
    <div v-if="activeComment.id === comment.id">
        <CommentCreate v-if="activeComment.status === 'replying'" :parentId="comment.id"
            :replyingTo="comment.user.username" :text="'reply'" />
        <CommentCreate v-if="activeComment.status === 'editing'" :modelValue="comment.content" :id="comment.id"
            :text="'update'" />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useCommentStore } from '../../stores/comment';
import Modal from '../Modal.vue';
import CommentCreate from './CommentCreate.vue';
import { storeToRefs } from 'pinia';
import { checkCurrentUser } from '/src/user.js'
import CommentHeader from './CommentHeader.vue';
import CommentBody from './CommentBody.vue';
import CommentFooter from './CommentFooter.vue';
import CommentReply from './CommentReply.vue';

const props = defineProps({
    comment: Object,
    replies: Object
})

const data = useCommentStore();
const { activeComment } = storeToRefs(data)

const getReplies = computed(() => {
    return data.comments
        .filter(comment => comment.parentId === props.comment.id)
        .sort((a, b) => a.createdAt - b.createdAt)
})

let isOpen = ref(false);

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