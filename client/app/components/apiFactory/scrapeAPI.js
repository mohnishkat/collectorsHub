(function() {
  'use strict';

  angular
    .module('app')
    .factory('scrapeAPI', scrapeAPI);

    scrapeAPI.inject = ['$http'];

    function scrapeAPI($http) {
      return{
        getScrapeDetails:getScrapeDetails
      }

      function getScrapeDetails(link){
        return $http.post('/api/links/scrape', link);
      }
    }
})();
