<script setup>
import pages from '../data/pages.json'
const url = path => '/' + path.replace(/.(md|markdown)$/i, '')
</script>

<template>
  <div v-for="(page, index) in pages" :key="index">
    <a :href="url(page.relativePath)">{{ page.title }}</a>
    <address>{{ page.description }}</address>
  </div>
</template>