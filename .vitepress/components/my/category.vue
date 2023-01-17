<script setup>
import { withBase } from 'vitepress'
import docs from '../../data/docs.json'

const url = path => withBase(path.replace(/.(md|markdown)$/i, ''))

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
          <div class="types">
            <div class="title">分类</div>
            <div v-for="type in types" :key="type" class="type">
              <a class="name" :href="'#' + type.name">{{ type.name }}</a>
              <div class="count">{{  type.count }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="docs">
            <div v-for="type in types" :key="type" class="type">
              <div class="name">
                <a :href="'#'+ type.name">{{ type.name }}</a>
              </div>
              <div v-for="doc in type.docs" :key="doc.relativePath" class="doc">
                <a :href="url(doc.relativePath)">{{ doc.title }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("../../styles/doc.css");
.types {
  position: relative;
  border-left: 1px solid var(--vp-c-divider-light);
  padding-left: 16px;
  font-size: 0.9em;
  .title {
    letter-spacing: 0.1em;
    line-height: 2em;
    color: var(--vp-c-text-2);
    font-size: 1em;
    font-weight: bold;
  }
  .type {
    display: flex;
    justify-content: space-between;
    line-height: 1.75em;
    color: var(--vp-c-text-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color .5s;
  }
}
.docs {
  .type {
    margin-bottom: 2em;
    .name {
      padding-bottom: 0.25em;
      margin-bottom: 0.25em;
      border-bottom: 1px dashed var(--vp-c-divider-light);
      font-size: 1.25em;
      font-weight: bold;
      display: flex;
      a {
        color: var(--vp-c-brand);
        text-decoration-style: dotted;
        transition: color 0.25s;
      }
    }
  }
  .doc {
    margin: 0.75em 0;
    a {
      color: var(--vp-c-text-2);
      transition: color .5s;
    }
  }
}
</style>