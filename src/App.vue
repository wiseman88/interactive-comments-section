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
  localStorage.getItem('data') ? null : localStorage.setItem('data', JSON.stringify(data));
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
  max-width: 732px;
  padding: 31px 16px;
  margin: 0 auto;

  @media(min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 0;
  }
}
</style>
