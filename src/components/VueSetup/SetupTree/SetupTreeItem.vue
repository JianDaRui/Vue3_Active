<template>
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-if="isFolder" v-show="open">
      <setup-tree-item
        class="item"
        v-for="model in model.children"
        :key="model.name"
        :model="model">
      </setup-tree-item>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
// 使用 defineProps
const props = defineProps({
  model: Object
})
const open = ref(false)
const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})
const toggle = () => {
  open.value = !open.value
}

const changeType = () => {
  if (!isFolder.value) {
    props.model.children = []
    addChild()
    open.value = true
  }
}

const addChild = () => {
  props.model.children.push({ name: 'new stuff' })
}
</script>
