<template>
  <div class="about">
    <login />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
   Login
  }
}
</script>
