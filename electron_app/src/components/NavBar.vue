<template>
     <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">MinorAI</b-navbar-brand>
      <b-nav-item @click="$router.replace('/')">Signout</b-nav-item>
    </b-navbar>
</template>
<script>
export default {
    methods: {
        SignOut(){
            this.$router.replace('/');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.nav-item {
    float:right;
}

.navbar-expand-lg {
    justify-content: space-between; 
}

.bg-info {
    background-color :blue !important;
}

a {
    color: white;
}
</style>
