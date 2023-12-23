<template>
  <h1>{{ this.$route.params.id }}</h1>
  <div class="customer-details">
    <div class="customer-image">
      <!-- <img :src="customer.image" alt="Customer Image"> -->
    </div>
    <div class="customer-info">
      <div>
        <label for="firstName">Vorname:</label>
        <input id="firstName" v-model="customer.firstName" @input="saveCustomer('firstName', $event.target.value)"/>
      </div>
      <div>
        <label for="lastName">Nachname:</label>
        <input id="lastName" v-model="customer.lastName" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="customer.email" />
      </div>
      <div>
        <label for="phone">Telefon:</label>
        <input id="phone" v-model="customer.phone" />
      </div>
      <div>
        <label for="address">Adresse:</label>
        <input id="address" v-model="customer.address" />
      </div>
      <div>
        <label for="gender">Geschlecht:</label>
        <input id="gender" v-model="customer.gender" />
      </div>
      <div>
        <label for="status">Status:</label>
        <input id="status" v-model="customer.status" />
      </div>
      <div>
        <label for="station">Station:</label>
        <input id="station" v-model="customer.station" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerDetails',
  data() {
    return {

      customer: []
    }
  },
  methods: {
    async fetchCustomer() {
      const res = await fetch(`http://localhost:5000/customers/${this.$route.params.id}`)
      const data = await res.json()

      return data
    },
    async saveCustomer(field, value) {
      const updCustomer = { ...this.customer, [field]: value }
      const res = await fetch(`http://localhost:5000/customers/${this.$route.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updCustomer)
            })
            const data = await res.json()
            this.customer = data;
  },

  },
  async created() {
    this.customer = await this.fetchCustomer();
  }
}

</script>

<style scoped>
.customer-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.customer-image {
  margin-bottom: 20px;
}

.customer-image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.customer-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 400px;
}

.customer-info label {
  font-weight: bold;
}

.customer-info input {
  width: 100%;
}
</style>
