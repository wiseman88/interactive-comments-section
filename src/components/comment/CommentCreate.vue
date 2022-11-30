<template>
    <form action="" class="comment-content">
        <textarea class="textarea" name="comment" id="" v-model="modelValue">{{ modelValue }}</textarea>
        <div class="form-footer">
            <figure class="avatar">
                <img :src="currentUser.image.png" :alt="currentUser.username" />
            </figure>
            <Button @click.prevent="createComment(modelValue, data, parentId)" class="bg-primary">
                {{ text }}
            </Button>
        </div>
    </form>
</template>

<script setup>
import Comment from '/src/classes/Comment.js'
import { useCommentStore } from '../../stores/comment';
import Button from '../Button.vue';
import { storeToRefs } from 'pinia';

defineProps({
    modelValue: {
        type: String,
        // default: 'Add a comment...'
    },
    parentId: {
        type: Number,
    },
    text: {
        type: String,
    }
})

const data = useCommentStore();
const { currentUser } = storeToRefs(data);

const createComment = (a, b, c) => {
    let comment = new Comment;

    comment.addComment(a, b, c)
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