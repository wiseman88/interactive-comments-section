<template>
    <div class="comment-header">
        <span>
            {{ comment.id }}
        </span>
        <figure class="avatar">
            <img :src="comment.user.image.png" :alt="comment.user.username">
        </figure>
        <span class="name">
            {{ comment.user.username }}
        </span>
        <span class="current-user" v-if="checkCurrentUser(data.currentUser.username, comment.user.username)">
            you
        </span>
        <span v-if="(comment.id > 4)" class="date">
            {{ moment(comment.createdAt).fromNow() }}
        </span>
        <span v-if="(comment.id < 5)" class="date">
            {{ comment.createdAt }}
        </span>
    </div>
</template>

<script setup>
import moment from 'moment'
import { useCommentStore } from '../../stores/comment'
import { checkCurrentUser } from '/src/user.js'

const props = defineProps({
    comment: Object
})

const data = useCommentStore()

</script>

<style lang="scss" scoped>

</style>