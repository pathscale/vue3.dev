import Toaster from './Toaster.vue'
import createToaster from './api.js'
import Positions from './defaults/positions.js'
import './index.css'


const Plugin = (app, options = {}) => {  
  const methods = createToaster(options)
  app.$toast = methods
  app.config.globalProperties.$toast = methods
}

Toaster.install = Plugin

export default Toaster
export { Toaster, Positions, createToaster }
