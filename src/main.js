import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import VueCustomElement from 'vue-custom-element'
import Calculadora from './Calculadora.vue'

Vue.use(VueCustomElement)
Vue.customElement('calculo-intereses', Calculadora)