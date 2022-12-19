<template>
    <div class="replies-container">
        <div v-for="reply in replies" :key="reply.id">
            <Comment :comment="reply" />
        </div>
    </div>
</template>

<script setup>
import Comment from './Comment.vue';


const props = defineProps({
    replies: Object
})
</script>

<style lang="scss" scoped>
.replies-container {
    padding-left: 1rem;
    border-left: 1px solid #E8E9ED;

    @media(min-width: 768px) {
        margin-left: 44px;
        padding-left: 44px;
    }
}
</style>