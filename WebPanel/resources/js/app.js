"use strict";

// eslint-disable-next-line no-undef
require('./bootstrap');

//Load Vue
import Vue from 'vue';
import router from './router';
import apolloProvider from './apollo';
import store from './store';
import VueCookie from 'vue-cookie';

import Multiselect from "vue-multiselect";
import ActionButton from "./components/ActionButton";
import ErrorAlert from "./components/ErrorAlert";

Vue.component('action-button', ActionButton);
Vue.component('multiselect', Multiselect);
Vue.component('error-alert', ErrorAlert);

Vue.use(VueCookie);

const app = new Vue({
    router,
    apolloProvider,
    store,
    render: h => h('router-view')
}).$mount('#app');

store.$app = app;