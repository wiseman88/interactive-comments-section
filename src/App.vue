<template>
  <div class="comments-wrapper">
    <CommentList />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import CommentList from './components/comment/CommentList.vue';
import data from './data.json'

onBeforeMount(() => {
  localStorage.setItem('data', JSON.stringify(data));
})
</script>

<style lang="scss">
@import '/src/assets/styles/reset.css';

.title {
  font-size: 4rem;
  font-weight: 400;
  font-family: 'Rubik', serif;
}

.comments-wrapper {
  padding: 31px 16px;
}
</style>
