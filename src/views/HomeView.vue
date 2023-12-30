<template>
    <Home :customers="filtered ? filteredCustomers : customers" @filter-customers="filterCustomers"></Home>
    <Button :text="'Neue Person anlegen'" :color="'#FC6E51'" @btn-click="addCustomer"></Button>
</template>

<script>
import Home from '../components/Customers.vue';
import Button from '../components/Button.vue';

export default {
    name: "HomeView",
    components: {
        Home,
        Button
    },
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
            // const res = await fetch('api/customers')
            // const res = await fetch('https://jobs.church.tools/api/persons')
            const res = await fetch('https://jobs.church.tools/api/persons', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer rIOWnmodkUKuOOyZ5YdoXiPi5H4MXghTKAnwlSwnU70FyseEBAPS1AzuxK1uf2Ntr6HyZhHeyJOAe5QEMYb5nAED0hgil1WL6EOWtSMnxv5YeIUOch3z46XT5ADc5lKsbZRqzPQOXuBHj6iTsbKSCmygrwynHlOetOsIhfDWpe2rRX1x77dZ9TaGOIiFZbiY9MUGbPOLFnn3IdkQazSzJVcLLD1ZZKdylvWXjbyw7aiQtWkQ3U0Ks7HIF3vEjOQZ'
                }
            });


            const data = await res.json()
            console.log(data)
            return data
        },
        async addCustomer() {
            const newCustomer = {
                id: Math.floor(Math.random() * 100000),
            }
            const res = await fetch('api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCustomer)
            })
            const data = await res.json()
            this.customers = [...this.customers, data]
            this.$router.push(`/customer/${newCustomer.id}`);
        },
    },
    // async created() {
    //     this.customers = await this.fetchCustomers();
    // }
}
</script>
