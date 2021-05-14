<template>
  <p>this page is {{ id }}</p>
</template>

<script>
export default {
  asyncData({ redirect, params }) {
    return {
      id: params.id
    }
  },
}
</script>
