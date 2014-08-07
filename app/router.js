import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CfgmedicineENV.locationType
});

Router.map(function() {
  this.route('application');
    this.route('about');
    this.route('case-studies');
    this.route('disclaimer');
    this.route('news');
});

export default Router;
