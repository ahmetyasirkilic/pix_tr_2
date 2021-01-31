import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Chakra, { CThemeProvider, CReset, CColorModeProvider, CBox } from '@chakra-ui/vue'
// Import FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faEllipsisV, faEllipsisH,faBookmark,faBolt,faRandom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret, faUser, faEllipsisV, faEllipsisH,faBookmark,faBolt,faRandom)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Chakra, {
  icons: {
    // Here we state that we use `fa`
    // icons library for Chakra's
    // internal icon parser
    iconPack: 'fa',
    iconSet: {
      faRandom,
    }
  }
})

new Vue({
  render(h) {
    // Mount our application inside the
    // ThemeProvider and ColorModeProvider components :)

    // You can also do this inside the App.vue file if you wish :)
    // See example at https://github.com/chakra-ui/chakra-ui-vue#usage
    return h(CThemeProvider, [
      h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])])
    ]);
  }
}).$mount("#app");

/*
new Vue({
  router,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')

*/