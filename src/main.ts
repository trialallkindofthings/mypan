import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'

createApp(App).use(router).use(ElementPlus).use(Antd).mount('#app')
