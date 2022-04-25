<script lang="tsx">
import { defineComponent } from "vue";
import { RouterView } from 'vue-router'
export default defineComponent({
  name: "VueSetUp",
  components: { RouterView },
  render() {
    return (
      <div>
        setup
        <router-view class="view"></router-view>
      </div>
    );
  },
});
</script>

