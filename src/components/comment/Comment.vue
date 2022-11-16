<template>
    <div class="comment-content">
        <div class="comment-header">
            <figure class="avatar">
                <img :src="comment.user.image.png" :alt="comment.user.username">
            </figure>
            <span class="name">
                {{ comment.user.username }}
            </span>
            <span class="current-user" v-if="data.currentUser.username === comment.user.username">
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
                    <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                            fill="#C5C6EF" />
                    </svg>
                </button>
                <span class="vote-total">
                    {{ comment.score }}
                </span>
                <button>
                    <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                            fill="#C5C6EF" />
                    </svg>
                </button>
            </div>
            <button class="reply-button">
                <span class="icon">
                    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                            fill="#5357B6" />
                    </svg>
                </span>
                <span class="text">
                    Reply
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useCommentStore } from '../../stores/comment';

defineProps({
    comment: Object
})

const data = useCommentStore();
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
</style>