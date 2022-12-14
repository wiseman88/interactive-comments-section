<template>
    <form action="" class="comment-content">
        <textarea class="textarea" name="comment" id="" v-model="modelValue"
            placeholder="Add a comment...">{{ modelValue }}</textarea>
        <div class="form-footer">
            <figure class="avatar">
                <img :src="currentUser.image.png" :alt="currentUser.username" />
            </figure>
            <Button v-if="id" @click.prevent="editComment(data, id, modelValue)" class="bg-primary">
                {{ text }}
            </Button>
            <Button v-else @click.prevent="addComment(data, parentId, modelValue)" class="bg-primary">
                {{ text }}
            </Button>
        </div>
    </form>
</template>

<script setup>
import { useCommentStore } from '../../stores/comment';
import Button from '../Button.vue';
import { storeToRefs } from 'pinia';

const props = defineProps({
    modelValue: {
        type: String,
        // default: 'Add a comment...'
    },
    parentId: {
        type: Number,
    },
    id: {
        type: Number,
    },
    text: {
        type: String,
    }
})

const data = useCommentStore();
const { currentUser } = storeToRefs(data);
const { addComment, editComment } = data;
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

    &:hover {
        cursor: pointer;
        border-color: $primary-dark;
    }
}

.form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>