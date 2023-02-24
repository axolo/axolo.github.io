<script setup>
import dayjs from 'dayjs'
import { useRouter } from 'vitepress'
import VPBadge from 'vitepress/dist/client/theme-default/components/VPBadge.vue'
import { url, anchor } from '../../../utils'
import docs from '../../../data/docs.json'

const router = useRouter()

const tag = item => router.go(`${url('tag')}#${anchor(item)}`)
const doc = item => router.go(url(item.relativePath))
</script>

<template>
  <div class="MyDocs">
    <div v-for="(page, index) in docs" :key="index" class="doc">
      <div class="title">
        <a :href="url(page.relativePath)">{{ page.title }}</a>
        <span v-if="page.top" class="top">
          <VPBadge class="icon" text="置顶" type="warning" />
        </span>
      </div>
      <div class="info">
        <div class="date">
          🕒{{ dayjs(page.time).format('YYYY-MM-DD') }}
        </div>
        <div v-for="item in page.tags" :key="item" class="tag" @click="tag(item)">
          {{ item }}
        </div>
      </div>
      <div class="desc" @click="doc(page)">{{ page.description }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.MyDocs {
  display: flex;
  flex-direction: column;
  gap: 2em;
  .doc {
    .title {
      padding-bottom: 0.25em;
      border-bottom: 1px dashed var(--vp-c-divider);
      font-size: 1.2em;
      display: flex;
      a {
        color: var(--vp-c-brand);
        text-decoration-style: dotted;
        transition: color 0.25s;
      }
      .top {
        padding: 0.2em;
        .icon {
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .info {
      margin: 0.5em 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5em;
      .date {
        display: flex;
        flex-wrap: nowrap;
        white-space: nowrap;
        align-items: center;
        color: var(--vp-c-text-2);
        transition: color 0.5s;
        font-size: 0.9em;
      }
      .tag {
        cursor: pointer;
        padding: 0 0.75em;
        font-size: 0.75em;
        display: flex;
        white-space: nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 0.5em;
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
    .desc {
      font-size: 0.95em;
      cursor: pointer;
    }
  }
}
</style>