<template>
        <CustomerDetails></CustomerDetails>
    <div class="router">
        <router-link to="/">Zurück</router-link>
    </div>
</template>

<script>
import CustomerDetails from '../components/CustomerDetails.vue'

export default {
    name: "HomeView",
    components: {
        CustomerDetails
    },
}
</script>

<style>
.router{

  margin-top: 60px;
}
</style>