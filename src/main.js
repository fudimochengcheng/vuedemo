// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import Axios from 'axios'
//const axios = Axios

Vue.use(ElementUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
//created(){	
//	axios.get('http://localhost:8080/static/data.json')
//	    .then(res => {
//	    	console.log(res)
//	        this.tableData = res.data.tableData;
//	        this.pros = res.data.pros;
//	        this.goodType1 = res.data.goodType1;
//	        this.goodType2 = res.data.goodType2;
//	        this.goodType3 = res.data.goodType3;
//	    })
//	    .catch(err => {
//	        console.log('网络出错，无法访问')
//	    })
//
//}
})
