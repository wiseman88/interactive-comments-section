<template>
    <button class="action-button">
        <span class="icon">
            <slot />
        </span>
        <span class="text">
            {{ text }}
        </span>
    </button>
</template>

<script setup>
defineProps({
    text: {
        type: String
    },
})
</script>

<style lang="scss" scoped>
.action-button {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        margin-top: 2px;
        margin-right: 7px;
    }

    .text {
        text-transform: capitalize;
        font-size: 1rem;
        font-weight: 700;
    }
}
</style>