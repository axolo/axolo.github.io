<script setup>
import MyHero from './hero.vue'
import MyAuthor from './author.vue'
import MyDocs from './docs.vue'
</script>

<template>
  <div class="MyHome">
    <MyHero />
    <div class="MyDoc">
      <div class="container">
        <div class="aside">
          <MyAuthor />
        </div>
        <div class="content">
          <MyDocs />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../../styles/my.css");
</style>