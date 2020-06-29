import { Controller } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'

/* This is your application's ApplicationController.
 * All StimulusReflex controllers should inherit from this class.
 *
 * Example:
 *
 *   import ApplicationController from './application_controller'
 *
 *   export default class extends ApplicationController { ... }
 *
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends Controller {
  connect () {
    StimulusReflex.register(this)
  }

  beforeReflex (element, reflex) {
    console.log('beforeReflex callback')
  }

  reflexSuccess (element, reflex, error) {
    console.log('reflexSuccess callback')
  }

  reflexError (element, reflex, error) {
    console.log('reflexError callback')
  }

  reflexHalted (element, reflex) {
    console.log('reflexHalted callback')
  }

  afterReflex (element, reflex) {
    console.log('afterReflex callback')
  }
}
