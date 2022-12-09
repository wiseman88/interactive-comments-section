<template>
    <div class="modal-overlay" v-show="show">
        <div class="modal">
            <div class="modal-content">
                <h4>Delete comment</h4>
                <p>
                    Are you sure you want to delete this comment? This will remove the comment and can't be undone.
                </p>
                <p>
                    {{ commentId }}
                </p>
            </div>
            <div class="modal-footer">
                <Button @click="closeModal" class="bg-default">
                    no, cancel
                </Button>
                <Button class="bg-secondary" @click="comment.deleteComment(commentId, data)">
                    yes, delete
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCommentStore } from '../stores/comment';
import Comment from '../classes/Comment';
import Button from './Button.vue';
import { useModalStore } from '../stores/modal';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
        required: true
    },
    commentId: {
        type: Number
    }
})

const data = useCommentStore()
const modal = useModalStore()

const { closeModal } = modal

let comment = new Comment;
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .35);
}

.modal {
    z-index: 50;
    background-color: $color-white;
    color: $primary;
    margin: 0 1rem;
    padding: 24px 28px;
    border-radius: 6px;

    h4 {
        font-size: 1.2rem;
        font-weight: 500;
        color: $primary-dark;
        margin-bottom: 1.2rem;
    }

    p {
        color: $primary-moderate;
        line-height: 1.4rem;
        margin-bottom: 1rem;
    }

    button {
        min-width: 138px;
    }
}

.modal-footer {
    display: flex;
    justify-content: space-between;
}
</style>