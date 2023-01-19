<script setup>
import { withBase } from 'vitepress'
import docs from '../../data/docs.json'

const url = path => withBase(path.replace(/.(md|markdown)$/i, ''))
const anchor = id => isNaN(parseFloat(id)) ? id?.replace(/\s+/g, '_') : ('_' + id).replace(/\s+/g, '_')

const allTypes = docs.map(doc => doc.frontmatter.category).flat()
const uniqueTypes = [...new Set(allTypes)]
const types = uniqueTypes.map(name => ({
  name,
  count: allTypes.filter(a => a === name).length,
  docs: docs.filter(d => d.frontmatter.category === name)
})).sort((i, j) => j.count - i.count)
</script>

<template>
  <div class="MyType">
    <div class="MyDoc">
      <div class="container">
        <div class="aside">
          <div class="aside-outline">
            <div class="label">
              <div class="label-name">分类</div>
              <div class="label-total">{{ types.length }}</div>
            </div>
            <div v-for="type in types" :key="type.name" class="item">
              <a class="name" :href="'#' + anchor(type.name)">{{ type.name }}</a>
              <div class="count">{{ type.count }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div v-for="type in types" :key="type.name" class="content-list">
            <div :id="anchor(type.name)" class="label">{{ type.name }}</div>
            <div v-for="doc in type.docs" :key="doc.relativePath" class="item">
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