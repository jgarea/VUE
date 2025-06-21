import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon,addIcons } from 'oh-vue-icons'
import { BiFiletypeJs } from 'oh-vue-icons/icons'

addIcons(BiFiletypeJs)

const app = createApp(App)

app.component('v-icon', OhVueIcon)

app.mount('#app')
