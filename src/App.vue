<script lang='tsx'>
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  components: { HelloWorld },
  render() {
    return (
      <div>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld/>
      </div>
    )
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
