/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPenToSquare, faTrash, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import  VueTheMask  from 'vue-the-mask'
//import  VueMask   from 'v-mask';
import Vue from 'vue';

library.add(faUserSecret)
library.add(faPenToSquare)
library.add(faTrash)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('frame-component', require('./components/FrameComponent.vue').default);
//Vue.component('post-component', require('./components/PostComponent.vue').default);
Vue.component('cadastro-component', require('./components/CadastroAlunoComponent.vue').default);
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueTheMask)
//Vue.use(VueMask)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
