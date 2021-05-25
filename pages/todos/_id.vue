<template>
  <div>
    <p>id: {{ todo.id }}</p>
    <p>title: {{ todo.title }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params, payload }) {
    let data
    if (payload) {
      data = {
        todo: payload,
      }
    } else {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${params.id}`
      )
      data = {
        todo: res.data,
      }
    }

    return data
  },
}
</script>
