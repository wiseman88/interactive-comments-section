<template>
    <div class="comment-content">
        <div class="comment-header">
            <figure class="avatar">
                <img :src="comment.user.image.png" :alt="comment.user.username">
            </figure>
            <span class="name">
                {{ comment.user.username }}
            </span>
            <span class="current-user" v-if="checkCurrentUser">
                you
            </span>
            <span class="date">
                {{ comment.createdAt }}
            </span>
        </div>
        <p class="comment-body">
            <span class="reply-to" v-if="comment.replyingTo">@{{ comment.replyingTo }}</span>
            {{ comment.content }}
        </p>
        <div class="comment-footer">
            <div class="vote">
                <button>
                    <PlusIcon />
                </button>
                <span class="vote-total">
                    {{ comment.score }}
                </span>
                <button>
                    <MinusIcon />
                </button>
            </div>
            <div v-if="checkCurrentUser" class="comment-action">
                <button>
                    <DeleteIcon />
                </button>
                <button style="margin-right: 5px;">
                    <EditIcon />
                </button>
            </div>
            <button v-else class="reply-button">
                <span class="icon">
                    <ReplyIcon />
                </span>
                <span class="text">
                    Reply
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import PlusIcon from '../icons/PlusIcon.vue';
import MinusIcon from '../icons/MinusIcon.vue';
import ReplyIcon from '../icons/ReplyIcon.vue';
import EditIcon from '../icons/EditIcon.vue';
import DeleteIcon from '../icons/DeleteIcon.vue';
import { useCommentStore } from '../../stores/comment';

const props = defineProps({
    comment: Object
})

const data = useCommentStore();

const checkCurrentUser = computed(() => {
    return data.currentUser.username === props.comment.user.username;
})
</script>

<style lang="scss">
.comment-content {
    background-color: $color-white;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
}

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
}

.avatar {
    margin-right: 1rem;

    &,
    img {
        width: 32px;
        height: 32px;
    }
}

.comment-body {
    color: $primary-moderate;
    line-height: 1.5rem;
    margin-bottom: 1rem;

    .reply-to {
        color: $primary;
        font-weight: 500;
    }
}

.comment-footer {
    display: flex;
    justify-content: space-between;

    .vote {
        display: inline-flex;
        align-items: center;
        background-color: $color-very-light;
        padding: 12px 11px 12px 17px;
        border-radius: 0.5rem;

        .vote-total {
            margin: 0 18px 0 15px;
            color: $primary;
            font-weight: 500;
        }

        button {
            display: flex;
            justify-content: center;

            &:hover {
                svg {
                    path {
                        fill: $primary;
                    }
                }
            }
        }
    }

    .reply-button {
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
            margin-top: 5px;
            margin-right: 7px;
        }

        .text {
            color: $primary;
            font-weight: 700;
        }
    }
}

.comment-action {
    display: flex;
    align-items: center;
}
</style>