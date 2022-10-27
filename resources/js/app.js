//require('./bootstrap');

// import Vue from 'vue'
// import App from "./vue/app";

// const app = new Vue({
//     el: '#app',
//     components: { App }
// });
require('./bootstrap');

import {createApp} from 'vue';
import App from './vue/App.vue';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlusSquare,faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlusSquare,faTrash)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

//createApp(App).mount('#app');
