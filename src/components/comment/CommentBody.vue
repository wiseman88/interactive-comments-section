<template>
    <div class="comment-body">
        <span class="reply-to" v-if="comment.replyingTo">@{{ comment.replyingTo }}</span>
        {{ comment.content }}
    </div>
</template>

<script setup>
const props = defineProps({
    comment: Object
})
</script>

<style lang="scss" scoped>
.comment-body {
    color: $primary-moderate;
    line-height: 1.5rem;
    margin-bottom: 1rem;

    .reply-to {
        color: $primary;
        font-weight: 500;
    }
}
</style>