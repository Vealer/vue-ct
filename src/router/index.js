import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView'
import Detail from '../views/DetailView'


const router = createRouter({
    history: createWebHistory('/vue-ct/'),
    routes: [
      { path: '/', component: Home },
      { path: '/customer/:id', component: Detail, name: 'CustomerDetails' }
    ]
  })

export default router