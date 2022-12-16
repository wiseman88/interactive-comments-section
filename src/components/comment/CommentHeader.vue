<template>
    <div class="comment-header">
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
.comment-header {
    display: flex;
    align-items: center;
    text-transform: lowercase;
    margin-bottom: 1rem;

    .name {
        font-weight: 500;
    }

    .date {
        margin-left: 1rem;
        text-transform: lowercase;
        color: $primary-moderate;
    }

    .current-user {
        background-color: $primary;
        color: $color-white;
        padding: 3px 7px;
        margin-left: 8px;
        font-weight: 500;
        font-size: 0.8rem;
        border-radius: 2px;
    }

    .avatar {
        margin-right: 1rem;

        &,
        img {
            width: 32px;
            height: 32px;
        }
    }
}
</style>