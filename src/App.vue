<template>
  <div class="comments-wrapper">
    <CommentList />
  </div>
</template>

<script setup>
import CommentList from './components/comment/CommentList.vue';
</script>

<style lang="scss">
.title {
  font-size: 4rem;
  font-weight: 400;
  font-family: 'Rubik', serif;
}

.comments-wrapper {
  padding: 31px 15px;
}
</style>
