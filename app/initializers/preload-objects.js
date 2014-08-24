export default
{
    name: 'preload-objects',

    initialize:
    function (container, application) {
        application.deferReadiness();

        var store = container.lookup('store:main');

        $.ajax({
            url: 'http://api.genderedreactions.com/autocomplete',
            data: {},
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (response) {
                application.register('drug:autocomplete', response, { instantiate: false, singleton: true });
                application.inject('route', 'autocompleteDrug', 'drug:autocomplete');
                application.inject('controller', 'autocompleteDrug', 'drug:autocomplete');
                application.advanceReadiness();
            }.bind(this),
            error: function (error, response) {
                application.advanceReadiness();
            }.bind(this)
        });
    }
};
