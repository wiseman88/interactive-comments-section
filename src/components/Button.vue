<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.button {
    color: $color-white;
    text-transform: uppercase;
    font-weight: 700;
    padding: 16px 0px;
    min-width: 104px;
    border-radius: 8px;
    font-size: 1rem;
}
</style>