<script setup>
import docs from '../../data/docs.json'
const allTags = docs.map(doc => [...doc.frontmatter.tags]).flat()
const uniqueTags = [...new Set(allTags)]
const tags = uniqueTags.map(name => ({
  name,
  count: allTags.filter(a => a === name).length,
  docs: docs.filter(d => d.frontmatter.tags.includes(name))
})).sort((i, j) => j.count - i.count)
</script>

<template>
  <div class="MyTag">
    <div class="MyDoc">
      <div class="container">
        <div class="aside">
          <div class="tags">
            <div v-for="tag in tags" :key="tag" class="tag">
              <div class="name">{{ tag.name }}</div>
              <div class="count">{{  tag.count }}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="docs">
            <div v-for="tag in tags" :key="tag" class="tag">
              <div class="name">
                <a :href="'#'+ tag.name">{{ tag.name }}</a>
              </div>
              <div v-for="doc in tag.docs" :key="doc.relativePath" class="doc">
                {{ doc.title }}
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
.tags {
  .tag {
    display: flex;
    justify-content: space-between;
  }
}
.docs {
  .tag {
    margin-bottom: 2em;
    .name {
      padding-bottom: 0.25em;
      margin-bottom: 0.25em;
      border-bottom: 1px dashed var(--vp-c-divider-light);
      font-size: 1.2em;
      display: flex;
      a {
        color: var(--vp-c-brand);
        text-decoration-style: dotted;
        transition: color 0.25s;
      }
    }
  }
}
</style>