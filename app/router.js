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
    this.route('checklist');
});

Router.reopen({
    notifyGoogleAnalytics: function() {
      return ga('send', 'pageview', {
          'page': this.get('url'),
           'title': this.get('url')
      });
        //return _gaq.push(['_trackEvent', "page-view", "drug-search", "drug-name", this.get('url')]);
    }.on('didTransition')
});

export default
Router;
