import { createApp } from 'vue'
import '../node_modules/bootstrap'
import './assets/_app.scss'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {  faChevronDown, faMagnifyingGlass, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret,faStackOverflow,faUser,faGithub,faMagnifyingGlass,faChevronDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
