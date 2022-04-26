<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      :router="true"
      text-color="#fff"
      active-text-color="#ffd04b"
      
    >
      <el-sub-menu index="/vue-jsx">
        <template #title>Vue JSX</template>
        <el-menu-item index="tree">Vue JSX Tree</el-menu-item>
        <el-menu-item index="grid">Vue JSX Grid</el-menu-item>
        <el-menu-item index="todo/all">Vue JSX Todo</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/vue-setup">
        <template #title>Vue Setup Script</template>
        <el-menu-item index="tree">Vue Setup Tree</el-menu-item>
        <el-menu-item index="grid">Vue Setup Grid</el-menu-item>
        <el-menu-item index="todo/all">Vue Setup Todo</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <router-view class="view"></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ElMenu, ElMenuItem } from 'element-plus'

export default defineComponent({
  components: { RouterLink, RouterView, ElMenu, ElMenuItem },
  setup() {
    const router = useRouter()
    // const route = useRoute()
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(keyPath[0], keyPath[1])
      // console.log(router, route)
      router.replace({
        path: keyPath[1]
      })
    }
    return {
      handleSelect
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
