import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import ScrollTop from 'primevue/scrolltop';
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import AnimateOnScroll from 'primevue/animateonscroll';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.component('Toolbar', Toolbar);
app.component('Button', Button);
app.component('Divider', Divider);
app.component('ScrollTop', ScrollTop);
app.component('InputText', InputText);

app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app')
