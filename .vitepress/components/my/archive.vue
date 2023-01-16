<script setup>
import dayjs from 'dayjs'
import { withBase } from 'vitepress'
import docs from '../../data/docs.json'

const url = path => withBase(path.replace(/.(md|markdown)$/i, ''))

const allYears = docs.map(doc => dayjs(doc.frontmatter.time).format('YYYY')).flat().sort((a, b) => b - a)
const uniqueYears = [...new Set(allYears)]
const years = uniqueYears.map(name => ({
  name,
  count: allYears.filter(a => a === name).length,
  docs: docs.filter(d => dayjs(d.frontmatter.time).format('YYYY') === name)
}))
</script>

<template>
  <div class="MyYear">
    <div class="MyDoc">
      <div class="container">
        <div class="aside">
          <div class="years">
            <div class="title">归档</div>
            <div v-for="year in years" :key="year" class="year">
              <a class="name" :href="'#' + year.name">{{ year.name }}</a>
              <div class="count">{{  year.count }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="docs">
            <div v-for="year in years" :key="year" class="year">
              <div class="name">
                <a :href="'#'+ year.name">{{ year.name }}</a>
              </div>
              <div v-for="doc in year.docs" :key="doc.relativePath" class="doc">
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
.years {
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
  .year {
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
  .year {
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