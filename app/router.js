import
Ember
from
'ember';

var Router = Ember.Router.extend({
    location: CfgmedicineENV.locationType
});

Router.map(function () {
    this.route('application');
    //this.resource('index', {path : '/:'})
    this.route('about');
    this.route('case-studies');
    this.route('disclaimer');
    this.route('news');
    this.route('developers');
    this.route('checklist');
});

export default
Router;
