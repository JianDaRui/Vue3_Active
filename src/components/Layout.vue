<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-sub-menu index="/vue-jsx">
        <template #title>{{jsxMenuTitle}}</template>
        <router-link to="/vue-jsx/tree" tag="span">
          <el-menu-item index="/vue-jsx/tree">Vue JSX Tree</el-menu-item>
        </router-link>
        <router-link  to="/vue-jsx/grid" tag="span">
          <el-menu-item index="/vue-jsx/grid">Vue JSX Grid</el-menu-item>
        </router-link>
        <router-link to="/vue-jsx/todo/all" tag="span">
          <el-menu-item index="/vue-jsx/todo/all">Vue JSX Todo</el-menu-item>
        </router-link>
      </el-sub-menu>
      <el-sub-menu index="/vue-setup">
        <template #title>{{setUpMenuTitle}}</template>
        <router-link to="/vue-setup/tree" tag="span">
          <el-menu-item index="/vue-setup/tree">Vue Setup Tree</el-menu-item>
        </router-link>
        <router-link  to="/vue-setup/grid" tag="span">
          <el-menu-item index="/vue-setup/grid">Vue Setup Grid</el-menu-item>
        </router-link>
        <router-link to="/vue-setup/todo/all" tag="span">
          <el-menu-item index="/vue-setup/todo/all">Vue Setup Todo</el-menu-item>
        </router-link>
      </el-sub-menu>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { ElMenu, ElMenuItem } from 'element-plus'

export default defineComponent({
  components: { RouterLink, RouterView, ElMenu, ElMenuItem },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const jsxMenuTitle = computed(() => {
      return route.meta.title.includes('JSX') ? route.meta.title : 'Vue JSX'
    })
    const setUpMenuTitle = computed(() => {
      return route.meta.title.includes('Setup') ? route.meta.title : 'Vue Setup'
    })
    return {
      jsxMenuTitle,
      setUpMenuTitle
    }
  }
});

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
