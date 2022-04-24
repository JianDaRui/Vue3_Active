<script lang="tsx">
import { defineComponent, ref, computed, toRefs, toRaw } from "vue";

export default defineComponent({
  name: "TreeItem",
  props: {
    model: Object,
  },
  setup(props) {
    const open = ref(false);
    const { model } = toRefs(props);
    const isFolder = computed(() => {
      return model.value.children && model.value.children.length;
    });

    const toggle = () => {
      open.value = !open.value;
    };

    const changeType = () => {
      if (!isFolder.value) {
        model.value.children = [];
        addChild();
        open.value = true;
      }
    };

    const addChild = () => {
      model.value.children.push({ name: "new stuff" });
    };
    return () => {
      return (
        <li>
          {/* 绑定事件 */}
          <div class={{ bold: isFolder.value }} onClick={toggle} onDblclick={changeType}>
            {model.value.name}
            {isFolder.value && <span>[{open.value ? "-" : "+"}]</span>}
          </div>
          {
            // 条件判断
            isFolder.value && (
              // 使用指令 vShow
              <ul v-show={open.value}>
                {/* 遍历列表 */}
                {model.value.children.map((item) => {
                  return (
                    // 传递props
                    <tree-item class="item" model={item}></tree-item>
                  );
                })}
                <li class="add" onClick={addChild}>
                  +
                </li>
              </ul>
            )
          }
        </li>
      );
    };
  },
});
</script>

<style>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
  text-align: left;
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
