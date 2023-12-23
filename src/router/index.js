import { createRouter, createWebHistory } from 'vue-router'
import CustomersComponent from '../components/Customers.vue'
import CustomerDetails from '../components/CustomerDetails.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: CustomersComponent },
      { path: '/customer/:id', component: CustomerDetails, name: 'CustomerDetails' }
    ]
  })

export default router