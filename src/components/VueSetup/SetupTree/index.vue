<template>
  <ul>
    <setup-tree-item class="item" :model="treeData"></setup-tree-item>
  </ul>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import SetupTreeItem from './SetupTreeItem.vue'
const treeData = reactive({
  name: 'My Tree setup',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
})
</script>

<style>
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
