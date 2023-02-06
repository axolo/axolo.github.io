<script setup>
import { useData, useRouter } from 'vitepress'
import { url, anchor } from '../../../utils'

const { page } = useData()
const router = useRouter()

const tag = item => router.go(`${url('tag')}#${anchor(item)}`)
</script>

<template>
  <div class="doc-before">
    <div v-for="item in page.frontmatter.tags" :key="item" @click="tag(item)">
      <Badge :text="item" type="info" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-before {
  margin-bottom: 0.25em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;
}
</style>