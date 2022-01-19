import { createApp } from 'vue'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'


import App from './App.vue'
import router from './router'

library.add(fas, faFacebook, faInstagram)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.mount('#app')
