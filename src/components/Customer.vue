<template>
   <router-link :to="{ name: 'CustomerDetails', params: { id: customer.id } }">
    <td>{{ customer.firstName }}</td>
  </router-link>
  <td>{{ customer.lastName }}</td>
  <td>{{ customer.email }}</td>
  <td>{{ customer.status }}</td>
</template>

<script>
export default {
  name: 'CustomerComponent',
  props: {
    customer: Object
  },
  
}
</script>