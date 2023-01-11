<script setup>
import { useData } from 'vitepress'
import pages from '../data/pages.json'

const { site } = useData()
const url = path => site.value.base + path.replace(/.(md|markdown)$/i, '')
</script>

<template>
  <div v-for="(page, index) in pages" :key="index">
    <a :href="url(page.relativePath)">{{ page.title }}</a>
    <address>{{ page.description }}</address>
  </div>
</template>