import Ember from 'ember';

export default Ember.Route.extend({
    searchTerm: "",

    model: function(params) {
        this.searchTerm = params.search_term;
    },

    controllerName: 'index',

    setupController: function(controller, model) {
        console.dir(controller);
        console.dir(model);
        $.ajax({
            url: 'http://api.genderedreactions.com/drug/name/' + this.searchTerm,
            data: {},
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (response) {
                controller.set('drug', response.drug);
            },
            error: function (error) {
                console.dir(error);
            }
        });
    },

    renderTemplate: function(controller, model){
        // Render the base template
        this._super(controller, model);
        // Render the bios template into the sidebar
        this.render('index', {outlet: 'main'});
    }
});
