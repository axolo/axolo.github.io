<script setup>
import { useData } from 'vitepress'
import pages from '../data/pages.json'

const { site } = useData()
const url = path => site.value.base + path.replace(/.(md|markdown)$/i, '')
</script>

<template>
  <div v-for="(page, index) in pages" :key="index" class="page">
    <a :href="url(page.relativePath)">{{ page.title }}</a>
    <div class="info">{{ page.frontmatter.time }}</div>
    <div class="desc">{{ page.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin: 1.5em 0;
  &:first-child {
    margin-top: 0;
  }
  a {
    font-size: 1.1em;
    font-weight: 500;
    color: var(--vp-c-brand);
    text-decoration-style: dotted;
    transition: color 0.25s;
  }
  .info {
    margin: 0.25em 0;
    font-size: 0.8em;
    color: var(--vp-c-text);
    transition: color 0.5s;
  }
}
</style>