<template>
    <form action="" class="comment-content">
        <textarea class="textarea" name="comment" id="" v-model="modelValue">{{ modelValue }}</textarea>
        <div class="form-footer">
            <figure class="avatar">
                <img :src="data.currentUser.image.png" :alt="data.currentUser.username" />
            </figure>
            <button class="submit-button">
                send
            </button>
        </div>
    </form>
</template>

<script setup>
import { useCommentStore } from '../../stores/comment';

defineProps({
    modelValue: {
        type: String,
        default: 'Add a comment...'
    },
})

const data = useCommentStore();
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

.submit-button {
    background-color: $primary;
    color: $color-white;
    text-transform: uppercase;
    font-weight: 700;
    padding: 16px;
    min-width: 104px;
    border-radius: 8px;
}
</style>