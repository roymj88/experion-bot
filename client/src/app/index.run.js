(function() {
  'use strict';

  angular
    .module('inspinia')
    .run(runBlock);



  angular
    .module('inspinia')
   	.constant('API_URL', 'http://35.154.179.251:5000/');



  angular
    .module('inspinia')
    .factory('httpRequestInterceptor', function ($window) {
      return {
        request: function (config) {
          if($window.localStorage.getItem('AuthCode')){
            config.headers['Authorization'] = 'Bearer '+ $window.localStorage.getItem('AuthCode');
            config.headers['Accept'] = 'application/json;odata=verbose';
          }

          return config;
        }
      };
    });

  angular
      .module('inspinia')
      .config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
  });

  /** @ngInject */
  function runBlock($log, $http, $window) {

    $log.debug('runBlock end');

    if($window.localStorage.getItem('AuthCode')){
      $http.defaults.headers.common['Authorization'] = 'Basic '+ $window.localStorage.getItem('AuthCode');
      $http.defaults.headers.common['Accept'] = 'application/json;odata=verbose';
    }
  }

})();
