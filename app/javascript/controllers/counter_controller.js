import ApplicationController from './application_controller'

export default class extends ApplicationController {
  connect () {
    super.connect()
    document.addEventListener('stimulus-reflex:before', () =>
      console.log('before event')
    )
    document.addEventListener('stimulus-reflex:success', () =>
      console.log('success event')
    )
    document.addEventListener('stimulus-reflex:error', () =>
      console.log('error event')
    )
    document.addEventListener('stimulus-reflex:halted', () =>
      console.log('halted event')
    )
    document.addEventListener('stimulus-reflex:after', () =>
      console.log('after event')
    )
  }
}
