<template>
    <div v-for="comment in comments" :key="comment.id">
        <Comment v-if="!comment.parentId" :comment="comment" />
    </div>
    <CommentCreate :modelValue="'Add comment...'" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCommentStore } from '../../stores/comment';
import Comment from './Comment.vue';
import CommentCreate from './CommentCreate.vue';

const data = useCommentStore();
const { comments } = storeToRefs(data);
</script>

<style lang="scss" scoped>

</style>