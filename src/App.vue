<script lang="tsx">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Tree from "./components/Tree/Tree.vue";
import ToDoMvc from './components/ToDoMvc/index.vue'
export default defineComponent({
  components: { HelloWorld, Tree },
  render() {
    return (
      <div>
        <HelloWorld />
        <Tree></Tree>
        <ToDoMvc></ToDoMvc>
      </div>
    );
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
