// main.js 入口文件
import { createApp } from 'vue'
import './style.css'
//根组件 vue开发的基本单元
import App from './App.vue'

// js DOM 低效率 #app vue开创新世界 mvvm的世界
//原生js不支持mvvm
//web app
createApp(App).mount('#app')
