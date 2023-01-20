<script setup>
import dayjs from 'dayjs'
import { url, anchor } from '../../utils'
import docs from '../../data/docs.json'

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
          <div class="aside-outline">
            <div class="label">
              <div class="label-name">归档</div>
              <div class="label-total">{{ allYears.length }}</div>
            </div>
            <div v-for="year in years" :key="year.name" class="item">
              <a class="name" :href="'#' + anchor(year.name)">{{ year.name }}</a>
              <div class="count">{{ year.count }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div v-for="year in years" :key="year.name" class="content-list">
            <div :id="anchor(year.name)" class="label">{{ year.name }}</div>
            <div v-for="doc in year.docs" :key="doc.relativePath" class="item">
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