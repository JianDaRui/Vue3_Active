<script lang="tsx">
import { defineComponent } from "vue";
import { RouterView } from 'vue-router'
export default defineComponent({
  name: "VueJSX",
  components: { RouterView },
  render() {
    return (
      <div>
        <router-view></router-view>
      </div>
    );
  },
});
</script>

