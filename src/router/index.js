import { createRouter, createWebHistory } from 'vue-router'
// import CheckoutLayout from '../views/CheckoutLayout.vue'
import PersonalDetails from '@/components/PersonalDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/personal-details',
          component: PersonalDetails
        },
        // {
        //   path: 'card-details',
        //   component: CardDetails
        // },
        // {
        //   path: 'review',
        //   component: Review
        // }
      ]
})

export default router
