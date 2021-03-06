import Vue from 'vue';
import App from './App.vue';

import Canvas from './helpers/Canvas.mixin';
import './registerServiceWorker';

Vue.config.productionTip = false;
const data = {
  showEdit: false,
};

new Vue({
  render: (h) => h(App),
  mixins: [
    Canvas('canvas'),
  ],
  data() {
    return data;
  },
}).$mount('#app');
