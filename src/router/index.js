import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: '/',
        name: "homeView",
        component: () => import('@/views/homeView')   
    },
    {
        path: '/SolutionPlan',
        name: "SolutionPlan",
        component: () => import('@/views/SolutionPlan')   
    },
    {
        path: '/MedicalHealth',
        name: "MedicalHealth",
        component: () => import('@/views/MedicalHealth')   
    },
    {
        path: '/CommunityMedical',
        name: "CommunityMedical",
        component: () => import('@/views/CommunityMedical')   
    },
    
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router