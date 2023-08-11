import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import less from 'less'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// import 'ant-design-vue/dist/antd.less'
// eslint-disable-next-line no-unused-vars
import jquery from "jquery";

import '@/style/index.less'

const app = createApp(App)
app.use(router)
app.use(less)
app.use(Antd);

app.mount('#app')

