---
home: true
---

<script setup>
import { useData } from 'vitepress'
import pages from '../.vitepress/data/pages.json'
const url = path => '/' + path.replace(/.(md|markdown)$/i, '')
</script>

<div v-for="(page, index) in pages" :key="index">
  <a :href="url(page.relativePath)">{{ page.title }}</a>
</div>
