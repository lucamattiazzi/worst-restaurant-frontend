import Vue from 'vue'
import App from './App.vue'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'tachyons'
import './style.css'
import './loader.css'

Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app')
