<template>
  <div class="col col-1" data-label="Vorname">{{ customer.firstName }}</div>
  <div class="col col-2" data-label="Nachname">{{ customer.lastName }}</div>
  <div class="col col-3" data-label="Email">{{ customer.email }}</div>
  <div class="col col-4" data-label="Status">{{ customer.status }}</div>
</template>

<script>
export default {
  name: 'CustomerComponent',
  props: {
    customer: Object
  },

}
</script>

<style scoped>
.col-1 {
  flex-basis: 25%;
}

.col-2 {
  flex-basis: 25%;
}

.col-3 {
  flex-basis: 25%;
}

.col-4 {
  flex-basis: 25%;
}

.col {
  flex-basis: 100%;
  /* Add additional styles for smaller screens here */
}

@media all and (max-width: 767px) {
  .col::before {
    color: #6C7A89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
    /* Add additional styles for smaller screens here */
  }
}
</style>

