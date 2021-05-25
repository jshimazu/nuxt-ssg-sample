<template>
  <div>
    <div>TODO list</div>
    <template v-if="todos">
      <div class="links" v-for="todo in todos" :key="todo.id">
        {{ todo.id }}.
        <nuxt-link :to="`/todos/${todo.id}`">{{ todo.title }}</nuxt-link>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return {
      todos: res.data,
    }
  },
}
</script>
