<script setup>
import { useData, useRouter } from 'vitepress'
import VPBadge from 'vitepress/dist/client/theme-default/components/VPBadge.vue'
import { url, anchor } from '../../../utils'

const { page } = useData()
const router = useRouter()

const tag = item => router.go(`${url('tag')}#${anchor(item)}`)
</script>

<template>
  <div class="doc-before">
    <div v-for="item in page.frontmatter.tags" :key="item" @click="tag(item)">
      <VPBadge :text="item" type="info" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-before {
  margin: 2em 0;
  padding: 1em 0;
  border-top: 1px dashed var(--vp-c-divider);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;
}
</style>