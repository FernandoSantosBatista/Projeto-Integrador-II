import Dashboard from '@/views/Dashboard.vue'
import About from '@/views/About.vue'
import RegisterController from '@/views/RegisterController.vue'
import DonationController from '@/views/DonationController.vue'
import Register from '@/views/RegisterForm.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        title: 'Dashboard',
        meta: { requiredAuth: true }
    },
    {
        path: '/sobre',
        name: 'About',
        component: About,
        title: 'sobre',
        meta: { requiredAuth: true }
    },
    {
        path: '/gerenciamento-de-cadastros',
        name: 'RegisterController',
        component: RegisterController,
        title: 'Register',
        meta: { requiredAuth: true }
    },
    {
        path: '/gerenciamento-de-cadastros/novo',
        name: 'NewRegister',
        component: Register,
        title: 'Adicionar Cadastro',
        meta: { requiredAuth: true }
    },
    {
        path: '/gerenciamento-de-cadastro/editar',
        name: 'EditRegister',
        component: Register,
        title: 'Editar Cadastro',
        meta: { requiredAuth: true }
    },

    {
        path: '/doar',
        name: 'DonationController',
        component: DonationController,
        title: 'Doar',
        meta: { requiredAuth: true }
    },
];


export default routes;