import { createApp } from 'vue'
import '../node_modules/bootstrap'
import './assets/_app.scss'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {  faArrowRight, faArrowsToDot, faChevronDown, faChevronRight, faDollar, faHeart, faLayerGroup, faMagnifyingGlass, faMaximize, faUserSecret, faWifi } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faCopyright, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret,faStackOverflow,faUser,faGithub,faMagnifyingGlass,faChevronDown,faLayerGroup,faChevronRight,faCircleCheck
    ,faArrowRight,faDollar,faEnvelope,faCopyright, faHeart,faFacebookF,faInstagram,faTwitter,faLinkedinIn,faLayerGroup,faWifi,faMaximize,
    faArrowsToDot)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
