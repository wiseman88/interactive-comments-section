<template>
    <div v-for="comment in data.comments" :key="comment.id">
        <Comment v-if="!comment.parentId" :comment="comment" />
        <!-- <div class="replies-container" v-if="comment.replies.length">
            <div v-for="reply in comment.replies" :key="reply.id">
                <Comment :comment="reply" />
            </div>
        </div> -->
    </div>
    <CommentCreate />
</template>

<script setup>
import { useCommentStore } from '../../stores/comment';
import Comment from './Comment.vue';
import CommentCreate from './CommentCreate.vue';

const data = useCommentStore();
</script>

<style lang="scss" scoped>
.replies-container {
    padding-left: 1rem;
    border-left: 1px solid #E8E9ED;
}
</style>