<script lang='tsx'>
import { defineComponent } from 'vue'
interface obj {
  name: string,
  age: number
}
export default defineComponent({
  setup(){
    const count: number = 0
    const student: obj = {
      name: "amos",
      age: 18
    }
    return () => (
      <h1>
        Hello Vue 3 + JSX {count},
        {student.name}, {student.age}
      </h1>
    )
  }
})
</script>
