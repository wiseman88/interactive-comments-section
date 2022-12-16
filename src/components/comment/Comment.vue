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

.replies-container {
    padding-left: 1rem;
    border-left: 1px solid #E8E9ED;
}
</style>