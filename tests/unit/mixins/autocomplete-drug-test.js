import Ember from 'ember';
import AutocompleteDrugMixin from 'cfgmedicine/mixins/autocomplete-drug';

module('AutocompleteDrugMixin');

// Replace this with your real tests.
test('it works', function() {
  var AutocompleteDrugObject = Ember.Object.extend(AutocompleteDrugMixin);
  var subject = AutocompleteDrugObject.create();
  ok(subject);
});
