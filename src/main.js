import Vue from 'vue'
import CxltToastr from 'cxlt-vue2-toastr'
import VueMobileDetection from "vue-mobile-detection";
import App from './App.vue'
import router from './router'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import "./style.css"

Vue.config.productionTip = false
Vue.use(CxltToastr, {
  position: 'top right',
  showDuration: 2000,
  timeOut: 5000,
  closeButton: true,
  progressBar: true,
});
Vue.use(VueMobileDetection);

const isMobile = Vue.prototype.$isMobile();
console.log(isMobile);
const initialURL = isMobile ? '/mobile' : '';
router.replace(initialURL);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
