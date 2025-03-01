// bootstrap
import '@popperjs/core'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// AOS
import AOS from 'aos'

// COMPONENTS
import * as globalComponents from './components/GlobalComponents.js'

import globalMixins from './components/globalMixins'

export default {
  install: async (app, options) => {
    const { config, packageJson } = options

    app.prototype.$config = config
    app.prototype.$package = packageJson

    app.config.productionTip = false
    // mixins
    app.mixin(globalMixins)

    // custom directive
    app.directive('child', {
      bind(el, binding) {
        el.appendChild(binding.value)
      },
    })

    // AOS
    app.prototype.$aos = AOS
    app.prototype.$aosRefresh = () => {
      for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
          AOS.refresh()
        }, 1000 * i)
      }
    }
    // GLOBAL COMPONENTS
    Object.entries(globalComponents).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}
