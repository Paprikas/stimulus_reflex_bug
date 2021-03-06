import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for PostReflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  /* Reflex specific lifecycle methods.
   * Use methods similar to this example to handle lifecycle concerns for a specific Reflex method.
   * Using the lifecycle is optional, so feel free to delete these stubs if you don't need them.
   *
   * Example:
   *
   *   <a href="#" data-reflex="PostReflex#example">Example</a>
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "PostReflex#example"
   *
   *   error - error message from the server
   */

  beforeReflex(element, reflex) {
    console.log('beforeReflex callback from post controller')
  }

  beforeUpdate(element, reflex) {
    console.log('beforeUpdate callback from post_controller');
  }

  updateSuccess(element, reflex) {
    console.log('updateSuccess callback from post_controller');
  }

  // updateError(element, reflex, error) {
  //   console.error('updateError', error);
  //   element.innerText = 'Update Failed!'
  // }
}
