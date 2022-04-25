<script lang='tsx'>
import { defineComponent, reactive, ref } from 'vue'
import GridDemo from './GridDemo.vue'

export default defineComponent({
  name: "JSXGrid",
  components: {
    GridDemo
  },
  setup() {
    const searchQuery = ref('')
    const gridColumns = reactive(['name', 'power'])
    const gridData = reactive([
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ])

    return () => (
      <div class="grid-demo">
        <form class="search">
          Search <input v-model={searchQuery.value} />
        </form>
        <GridDemo
          data={gridData}
          columns={gridColumns}
          filterKey={searchQuery.value}>
        </GridDemo>
      </div>
    )
  }
})
</script>

<style>
.grid-demo {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
.search {
  margin: 10px 0;
}
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>