import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@/stylesheets/_variable.sass'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#bbbaaa',
        secondary: '#BFADA5',
        accent: '#D8EBF1',
        info: '#1d62ff',
        grey: '#fafafa',
      },
    },
  },
})
