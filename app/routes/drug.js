import
Ember
from
'ember';

export default
Ember.Route.extend({
    searchTerm: "",

    model: function (params) {
        this.searchTerm = params.search_term;
        var controller = this.controllerFor('drug');
        if(controller) {
            controller.set('searchTerm', this.searchTerm);
            controller.send('getAdverseEffectsForDrug');
        }
    }

    /*
     * Only called when transitioning from a different route
     * Hence, this logic has to be duplicated within the DrugController
     * for when transitioning to a different drug.
     */

//    setupController: function (controller, model) {
//        controller.set('drugNotFound', false);
//        controller.set('drug', null);
//        controller.set('fetchingDrugData', true);
//        var searchTerm = this.searchTerm;
//        controller.set('searchTerm', searchTerm);
//        $.ajax({
//            url: 'http://api.genderedreactions.com/drug/name/' + searchTerm,
//            data: {},
//            type: 'GET',
//            crossDomain: true,
//            dataType: 'jsonp',
//            success: function (response) {
//                controller.set('drug', response.drug);
//                controller.set('fetchingDrugData', false);
//            },
//            error: function (error, response) {
//                console.log(error);
//                controller.set('fetchingDrugData', false);
//                controller.set('drugNotFound', true);
//            }.bind(this)
//        });
//    }
});
