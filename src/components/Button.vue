<template>
    <button class="submit-button">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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