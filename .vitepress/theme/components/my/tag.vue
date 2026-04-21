<script setup>
import { url, anchor } from '../../../utils'
import docs from '../../../data/docs.json'

const allTags = docs.map(doc => [...doc.tags]).flat()
const uniqueTags = [...new Set(allTags)]
const tags = uniqueTags.map(name => ({
  name,
  count: allTags.filter(a => a === name).length,
  docs: docs.filter(d => d.tags.includes(name))
})).sort((i, j) => j.count - i.count)
</script>

<template>
  <div class="MyTag">
    <div class="MyDoc">
      <div class="container">
        <div class="aside">
          <div class="aside-outline">
            <div class="label">
              <div class="label-name">标签</div>
              <div class="label-total">{{ tags.length }}</div>
            </div>
            <div v-for="tag in tags" :key="tag.name" class="item">
              <a class="name" :href="'#' + anchor(tag.name)">{{ tag.name }}</a>
              <div class="count">{{  tag.count }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div v-for="tag in tags" :key="tag.name" class="content-list">
            <div :id="anchor(tag.name)" class="label">{{ tag.name }}</div>
            <div v-for="doc in tag.docs" :key="doc.relativePath" class="item">
              <a :href="url(doc.relativePath)">{{ doc.title }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../../styles/my.css");
</style>