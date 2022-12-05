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

</style>