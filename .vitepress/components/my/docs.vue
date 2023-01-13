<script setup>
import { useData, useRouter } from 'vitepress'
import dayjs from 'dayjs'
import pages from '../../data/docs.json'

const { site } = useData()
const url = path => site.value.base + path.replace(/.(md|markdown)$/i, '')

const router = useRouter()
const tag = item => router.go('/tag#' + item)
</script>

<template>
  <div v-for="(doc, index) in pages" :key="index" class="doc">
    <a :href="url(doc.relativePath)">{{ doc.title }}</a>
    <div class="info">
      <div class="date">{{ dayjs(doc.frontmatter.time).format('YYYY-MM-DD') }}</div>
      <div class="tags">
        <div v-for="item in doc.frontmatter.tags" :key="item" class="tag" @click="tag(item)">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="desc">{{ doc.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.doc {
  margin: 1.5em 0;
  &:first-child {
    margin-top: 0;
  }
  a {
    font-size: 1.2em;
    font-weight: 500;
    color: var(--vp-c-brand);
    text-decoration-style: dotted;
    transition: color 0.25s;
  }
  .info {
    margin: 0.5em 0;
    display: flex;
    align-items: center;
    .date {
      font-size: 0.9em;
      color: var(--vp-c-text-2);
      transition: color 0.5s;
    }
    .tags {
      display: flex;
      align-items: center;
      .tag {
        cursor: pointer;
        margin-left: 1em;
        padding: 0 0.75em;
        font-size: 0.75em;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 0.25em;
        border-color: var(--vp-button-alt-border);
        color: var(--vp-button-alt-text);
        background-color: var(--vp-button-alt-bg);
        &:hover {
          border-color: var(--vp-button-alt-hover-border);
          color: var(--vp-button-alt-hover-text);
          background-color: var(--vp-button-alt-hover-bg);
        }
        &:active {
          border-color: var(--vp-button-alt-active-border);
          color: var(--vp-button-alt-active-text);
          background-color: var(--vp-button-alt-active-bg);
        }
      }
    }
  }
  .desc {
    font-size: 0.95em;
  }
}
</style>