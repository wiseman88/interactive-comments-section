<template>
    <form action="" class="comment-content">
        <textarea class="textarea" name="comment" id="" v-model="modelValue">{{ modelValue }}</textarea>
        <div class="form-footer">
            <figure class="avatar">
                <img :src="data.currentUser.image.png" :alt="data.currentUser.username" />
            </figure>
            <Button @click.prevent="addComment(modelValue)">
                send
            </Button>
        </div>
    </form>
    <p>
        {{ data.commentsCount }}
    </p>
    <p>
        {{ comment }}
    </p>
</template>

<script setup>
import { reactive } from 'vue';
import { useCommentStore } from '../../stores/comment';
import Button from '../Button.vue';

defineProps({
    modelValue: {
        type: String,
        default: 'Add a comment...'
    },
})

const data = useCommentStore();

let comment = reactive({
    type: Object,
    id: Number,
    content: String,
    createdAt: Date,
    score: Number,
    user: {
        type: Object,
        username: String,
        image: {
            png: String,
            webp: String
        }
    }
})

const addComment = (item) => {
    comment.id = data.commentsCount + 1
    comment.content = item
    comment.createdAt = Date.now()
    comment.score = 0
    comment.user.username = data.currentUser.username
    comment.user.image.png = data.currentUser.image.png
    comment.user.image.webp = data.currentUser.image.webp
    comment.replies = []

    data.comments.push(comment);

    localStorage.setItem('data', JSON.stringify(data));

    comment = {
        id: null,
        content: null,
        createdAt: null,
        score: null,
        user: {
            username: null,
            image: {
                png: null,
                webp: null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.textarea {
    border-color: $color-light;
    border-radius: 5px;
    padding: 16px 23px;
    margin-bottom: 1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: $primary-moderate;
    width: 100%;
    height: 94px;
}

.form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>