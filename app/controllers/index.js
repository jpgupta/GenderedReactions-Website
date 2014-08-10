import
Ember
from
'ember';

export default
Ember.Controller.extend({
    autocompleteNames: [],

//    autocompleteSearch: function () {
//        $.ajax({
//            url: 'http://pubchem.ncbi.nlm.nih.gov/pcautocp/pcautocp.cgi?dict=pc_compoundnames&q=' + this.get('searchTerm') + '&n=5',
//            data: {},
//            type: 'GET',
//            crossDomain: true,
//            dataType: 'jsonp',
//            success: function (response) {
//                this.get('autocompleteNames').clear();
//                this.get('autocompleteNames').pushObjects(response.autocp_array.splice(0,5));
//            }.bind(this),
//            error: function (error, response) {
//                this.get('autocompleteNames').clear();
//            }.bind(this)
//        });
//    }.observes('searchTerm'),

    actions: {
        getAdverseEffectsForDrug: function () {
            this.transitionToRoute('drug', this.get('searchTerm'));
            this.set('searchTerm', '');
        },

        autocompleteSelected: function(name) {
            this.get('autocompleteNames').clear();
            this.set('searchTerm', name);
            this.send('getAdverseEffectsForDrug');
        }
    }

});
