<template>
  <router-view :customers="filtered ? filteredCustomers : customers" @filter-customers="filterCustomers" ></router-view>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      customers: [],
      "filteredCustomers": [],
      filtered: false,
      options: [],
    }
  },
  methods: {
    filterCustomers(status) {
      this.filteredCustomers = this.customers.filter(customer => customer.status === status);
      this.filtered = true;
      if (status === 'all') this.filtered = false;
    },
    async fetchCustomers() {
      const res = await fetch('api/customers')
      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/custom${id}`)
      const data = await res.json()

      return data
    },

  },
  async created() {
    this.customers = await this.fetchCustomers();
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
