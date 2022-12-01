<template>
    <div v-for="comment in commentsOrderedByScore" :key="comment.id">
        <Comment v-if="!comment.parentId" :comment="comment" />
    </div>
    <CommentCreate :modelValue="'Add comment...'" :text="'send'" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCommentStore } from '../../stores/comment';
import Comment from './Comment.vue';
import CommentCreate from './CommentCreate.vue';

const data = useCommentStore();
const { commentsOrderedByScore } = storeToRefs(data);
</script>

<style lang="scss" scoped>

</style>