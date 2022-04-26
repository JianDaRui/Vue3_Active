<template type="text/x-template" id="grid-template">
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th v-for="key in columns"
          :key="key"
          @click="sortBy(key)"
          :class="{ active: state.sortKey == key }">
          {{ capitalize(key) }}
          <span class="arrow" :class="state.sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, indexEntry) in filteredData" :key="indexEntry">
        <td v-for="(key, index) in columns" :key="index">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No matches found.</p>
</template>
<!-- DemoGrid component script -->
<script lang="ts" setup>
import { reactive, computed } from 'vue'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
const props = defineProps({
  data: Array,
  columns: Array,
  filterKey: String
})
const state = reactive({
  sortKey: '',
  sortOrders: props.columns.reduce((o, key) => (o[key] = 1, o), {})
})

const filteredData = computed(() => {
  let { data, filterKey } = props
  if (filterKey) {
    filterKey = filterKey.toLowerCase()
    data = data.filter(row => {
      return Object.keys(row).some(key => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }
  const { sortKey } = state
  if (sortKey) {
    const order = state.sortOrders[sortKey]
    data = data.slice().sort((a, b) => {
      a = a[sortKey]
      b = b[sortKey]
      return (a === b ? 0 : a > b ? 1 : -1) * order
    })
  }
  return data
})

const sortBy = (key) => {
  state.sortKey = key
  state.sortOrders[key] *= -1
}

</script>


