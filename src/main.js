import { createApp } from 'vue'
import App from './App.vue'

// 导入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 导入 Vue-Router 实例
import router from './router/index'

// 导入 mixin
import mixin from './mixin/index'

const app = createApp(App)

// 接入 ElementPlus 组件库
app.use(ElementPlus)
// 接入路由
app.use(router)

// 全局混入
app.mixin(mixin)

app.mount('#app')
