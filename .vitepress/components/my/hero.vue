<script setup>
import { useData, withBase } from 'vitepress'
const { site } = useData()
console.log(site)
</script>

<template>
  <div class="MyHero">
    <div class="container">
      <div class="label">
        <img class="logo" :src="withBase(site.themeConfig.logo)" />
        <!-- <h1 class="name">{{ site.title }}</h1> -->
      </div>
      <div class="description">
        <div v-for="(desc, index) in site.description.split('。')" :key="index">
          <h3 class="desc">{{ desc }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.MyHero {
  background-image: url("./hero.svg");
  .container {
    padding: 64px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    .label {
      display: flex;
      align-items: center;
      gap: 8px;
      .logo {
        width: 3em;
        height: auto;
      }
      .name {
        font-size: 2em;
        color: var(--vp-home-hero-name-color);
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      .desc {
        font-size: 1.1em;
        color: #ccc;
      }
    }
  }
}
</style>