import Ember from 'ember';
import SlideControllerMixin from 'cfgmedicine/mixins/slide-controller';

module('SlideControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var SlideControllerObject = Ember.Object.extend(SlideControllerMixin);
  var subject = SlideControllerObject.create();
  ok(subject);
});
