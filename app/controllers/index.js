import
Ember
from
'ember';

import
AutocompleteDrug
from
'../mixins/autocomplete-drug';

export default
Ember.Controller.extend(AutocompleteDrug, {
    actions: {
        getAdverseEffectsForDrug: function () {
            this.transitionToRoute('drug', this.get('searchTerm'));
            this.set('searchTerm', '');
        },

        autocompleteSelected: function (name) {
            this.get('autocompleteNames').clear();
            this.set('searchTerm', name);
            this.send('getAdverseEffectsForDrug');
        }
    }

});
