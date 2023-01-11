<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import icons from '../data/icons'

const members = [{
  avatar: 'https://avatars.githubusercontent.com/u/1021935?s=400&u=eae8692c031d27310b49af5b158bd50d895c24a7&v=4',
  name: '方跃明',
  title: 'Yueming Fang',
  links: [
    { link: 'https://github.com/axolo', icon: 'github' },
    { link: 'https://gitee.com/axolo', icon: { svg: icons.gitee } }
  ]
}]
</script>

<template>
  <VPTeamMembers size="small" :members="members" />
</template>