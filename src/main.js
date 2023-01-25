import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Chart from 'primevue/chart';
import Card from 'primevue/card';

import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.component('Chart', Chart);
app.component('Card', Card);
app.mount('#app')
