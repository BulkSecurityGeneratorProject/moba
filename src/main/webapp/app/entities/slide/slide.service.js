(function() {
    'use strict';
    angular
        .module('mobaApp')
        .factory('Slide', Slide);

    Slide.$inject = ['$resource'];

    function Slide ($resource) {
        var resourceUrl =  'api/slides/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
