import Toaster from './Toaster.vue'
import createToaster from './api.js'
import Positions from './defaults/positions.js'
import './index.css'


const Plugin = (app, options = {}) => {  
  const methods = createToaster(options)
  app.config.globalProperties.$toast = methods
  app.provide('toast', methods)
}

Toaster.install = Plugin

export default Toaster
export { Toaster, Positions, createToaster }
