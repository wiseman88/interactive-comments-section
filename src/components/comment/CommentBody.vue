<template>
    <article class="comment-body">
        <span class="reply-to" v-if="comment.replyingTo">@{{ comment.replyingTo }}</span>
        {{ comment.content }}
    </article>
</template>

<script setup>
const props = defineProps({
    comment: Object
})
</script>

<style lang="scss" scoped>

</style>