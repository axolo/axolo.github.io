<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [{
  avatar: 'https://avatars.githubusercontent.com/u/1021935?s=400&u=eae8692c031d27310b49af5b158bd50d895c24a7&v=4',
  name: 'axolo',
  title: 'Full Stack Developer',
  links: [
    { link: 'https://github.com/axolo', icon: 'github' },
  ]
}]
</script>

<template>
  <VPTeamMembers size="small" :members="members" />
</template>
