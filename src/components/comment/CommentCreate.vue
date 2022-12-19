<template>
    <div class="comment-content">
        <form action="#" class="form-create">
            <textarea class="textarea" name="comment" v-model="model" placeholder="Add a comment..."></textarea>
            <figure class="avatar">
                <img :src="currentUser.image.png" :alt="currentUser.username" />
            </figure>
            <Button v-if="id" @click.prevent="editComment(data, id, model)" class="bg-primary">
                {{ text }}
            </Button>
            <Button v-else @click.prevent="addComment(data, parentId, replyingTo, model)" class="bg-primary">
                {{ text }}
            </Button>
        </form>
    </div>
</template>

<script setup>
import { useCommentStore } from '../../stores/comment';
import Button from '../Button.vue';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
    },
    parentId: {
        type: Number,
    },
    replyingTo: {
        type: String,
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

let model = ref(props.modelValue)

watch(data, () => {
    model.value = ''
})
</script>

<style lang="scss" scoped>
.form-create {
    display: flex;
    gap: 1rem;
    padding: 8px 0;

    .avatar {
        order: 1;

        img {
            width: 40px;

            @media (max-width: 768px) {
                width: 32px;
            }
        }

        @media (max-width: 768px) {
            display: inline-block;
            margin-top: 0.5rem;
        }
    }

    button {
        order: 3;
        align-self: flex-start;

        @media (max-width: 768px) {
            display: inline-block;
            float: right;
        }
    }

    .textarea {
        order: 2;
        border-color: $color-light;
        border-radius: 5px;
        padding: 14px 23px;
        margin-bottom: 1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: $primary-moderate;
        width: 100%;
        height: 94px;
        line-height: 1.3rem;

        &:hover {
            cursor: pointer;
            border-color: $primary-dark;
        }

        @media (min-width: 768px) {
            margin-bottom: 0;
        }
    }

    @media (max-width: 768px) {
        display: block;
        padding: 0;
    }
}
</style>