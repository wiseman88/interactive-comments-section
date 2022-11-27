<template>
    <div v-for="comment in data.comments" :key="comment.id">
        <Comment v-if="!comment.parentId" :comment="comment" />
    </div>
    <CommentCreate :modelValue="'Add comment...'" />
</template>

<script setup>
import { useCommentStore } from '../../stores/comment';
import Comment from './Comment.vue';
import CommentCreate from './CommentCreate.vue';

const data = useCommentStore();
</script>

<style lang="scss" scoped>

</style>