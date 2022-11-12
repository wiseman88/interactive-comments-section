<template>
    <div v-for="comment in data.comments" :key="comment.id">
        <Comment :comment="comment" />
    </div>
</template>

<script setup>
import { useCommentStore } from '../../stores/comment';
import Comment from './Comment.vue';

const data = useCommentStore();
</script>

<style lang="scss" scoped>

</style>