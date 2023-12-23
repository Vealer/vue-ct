<template>
  <div class="hello">
    <table>
      <tr>
        <th>Vorname</th>
        <th>Nachname</th>
        <th>Email</th>
        <th>Status <Filter :options="options" :customers="customers"
            @filter-customers="status => $emit('filter-customers', status)"></Filter>
        </th>

      </tr>
      <tr :key="customer.id" v-for="customer in customers">
          <Customer :customer="customer"></Customer>
      </tr>
    </table>
  </div>
</template>

<script>
import Customer from "./Customer.vue"
// import Button from "./Button.vue"
import Filter from "./Filter.vue"

export default {
  name: 'CustomersComponent',
  props: {
    customers: Array
  },
  components: {
    Customer,
    // Button,
    Filter,
  },
  data() {
    return {
      "options": this.customers.map(customer => customer.status),
    }
  },
  methods: {
    async getOptions() {
      this.options = await this.customers.map(customer => customer.status);
      await this.options.push('all');
      console.log(this.options)

    }
  },
  beforeMount() {
    this.getOptions();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

h3 {
  margin: 40px 0 0;
}

ul {
  /* list-style-type: none; */
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
