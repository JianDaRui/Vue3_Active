<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
import { RouterView } from 'vue-router'
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
