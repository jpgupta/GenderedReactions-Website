import
Ember
from
'ember';

var Router = Ember.Router.extend({
    location: CfgmedicineENV.locationType
});

Router.map(function () {
    this.route('application');
    this.resource('drug', {path: '/:search_term'});
    this.route('about');
    this.route('case-studies');
    this.route('disclaimer');
    this.route('news');
    this.route('developers');
});

export default
Router;
