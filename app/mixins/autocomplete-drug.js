import Ember from 'ember';

export default Ember.Mixin.create({
    searchTerm: '',

    autocompleteNames: function () {
        /*
         * Remove this once we have a working
         * autocomplete API
         */
        return [];

        var searchTerm = this.get('searchTerm');
        if(!searchTerm.length)
            return [];
        return this.get('autocompleteDrug').filter(function (drug) {
            return drug.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1;
        }).splice(0, 5);
    }.property('searchTerm.length'),
});
