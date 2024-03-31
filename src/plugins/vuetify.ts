/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...components,
    ...labsComponents
  },
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#00B8E4',
          primary_dark: '#002249',
          secondary: '#b0bec5',
          error: '#F44336',
          dark_black: '#323232',
          grey: '#EEEEEE'
        }
      }
    }
  }
})
