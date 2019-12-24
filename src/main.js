import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Importar Componentes
import menu_comp from './components/menu.vue'
import header_comp from './components/header.vue'
import aboutme_comp from './components/aboutme.vue'
import lastprojects_comp from './components/lastprojects.vue'
import services_comp from './components/services.vue'
import contact_comp from './components/contact.vue'
import footer_comp from './components/footer.vue'

// Importar otros componentes
import cardSimple_comp from './components/card-simple.vue'
import cardSkill_comp from './components/card-skill.vue'
import cardSoftSkill_comp from './components/card-soft-skill.vue'


// Importar Paginas
import home_page from './pages/homePage.vue'
import projects_page from './pages/projectsPage.vue'
import aboutme_page from './pages/aboutmePage.vue'
import login_page from './pages/loginPage.vue'


//Usamos vue router
Vue.use(VueRouter);

// Declaramos array de las rutas
const routes = [
	// rutas
	// { path: 'NombreRuta', component: NombreComponente },
	{ path: '/', component: home_page },
	{ path: '/home', component: home_page },
	{ path: '/proyectos', component: projects_page },
	{ path: '/sobremi', component: aboutme_page },
	{ path: '/login', component: login_page },
];

// Declaramos el router
const router = new VueRouter({
	routes,
	mode: 'history'
});

// Componentes
Vue.component('menu-vue', menu_comp);
Vue.component('header-vue', header_comp);
Vue.component('aboutme-vue', aboutme_comp);
Vue.component('lastprojects-vue', lastprojects_comp);
Vue.component('services-vue', services_comp);
Vue.component('contact-vue', contact_comp);
Vue.component('footer-vue', footer_comp);

// Otros Componentes
Vue.component('card-simple-vue', cardSimple_comp);
Vue.component('card-skill-vue', cardSkill_comp);
Vue.component('card-soft-skill-vue', cardSoftSkill_comp);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
