<template>
  <div class="container">
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-1">Vorname</div>
        <div class="col col-2">Nachname</div>
        <div class="col col-3">Email</div>
        <div class="col col-4">Status <Filter :options="options" :customers="customers"
            @filter-customers="status => $emit('filter-customers', status)"></Filter>
        </div>
      </li>
      <li :key="customer.id" v-for="customer in customers" class="table-row" @click="showCustomerDetails(customer.id)">
        <Customer :customer="customer"></Customer>
      </li>
    </ul>
  </div>
</template>

<script>
import Customer from "./Customer.vue"
import Filter from "./Filter.vue"

export default {
  name: 'CustomersComponent',
  props: {
    customers: Array
  },
  components: {
    Customer,
    Filter,
  },
  data() {
    return {
      "options": this.customers.map(customer => customer.status),
    }
  },
  methods: {
    showCustomerDetails(customerId) {
      this.$router.push(`/customer/${customerId}`);
    },
    async getOptions() {
      this.options = await this.customers.map(customer => customer.status);
      await this.options.push('all');
    }
  },
  beforeMount() {
    this.getOptions();
  }
}
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}

h2 small {
  font-size: 0.5em;
}

.responsive-table{
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.responsive-table .table-header {
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.table-row:hover {
  transform: scale(1.02);
  transition: transform 0.1s ease;
}

.responsive-table .col-1 {
  flex-basis: 10%;
}

.responsive-table .col-2 {
  flex-basis: 25%;
}

.responsive-table .col-3 {
  flex-basis: 25%;
}

.responsive-table .col-4 {
  flex-basis: 25%;
}

@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }

  .responsive-table li {
    display: block;
    /* Add additional styles for smaller screens here */
  }

  .responsive-table .col {
    flex-basis: 100%;
    /* Add additional styles for smaller screens here */
  }

  .responsive-table .col::before {
    color: #6C7A89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
    /* Add additional styles for smaller screens here */
  }
}
</style>
