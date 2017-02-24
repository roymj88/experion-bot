'use strict';

angular.module('inspinia')
	.factory('botService', function($http, API_URL, $log, $q) {

		var leaveRequestObj = function() {
     		var deferred = $q.defer();
     		
     		var req = {
			 	method: 'GET',
				url: API_URL+ 'api/bot/leaverequest',
			};
			
			$http(req).then(function(data){
				deferred.resolve(data);
			}, function(msg, code){
				deferred.reject(msg);
				$log.error(msg, code);
			});
     		
     		return deferred.promise;
  		};

  		var travelRequestObj = function() {
     		var deferred = $q.defer();
     		
     		var req = {
			 	method: 'GET',
				url: API_URL+ 'api/bot/travelrequest',
			};
			
			$http(req).then(function(data){
				deferred.resolve(data);
			}, function(msg, code){
				deferred.reject(msg);
				$log.error(msg, code);
			});
     		
     		return deferred.promise;
  		};



	return {
  		getLeaveRequest: leaveRequestObj,
  		getTravelRequest: travelRequestObj
	}
	
});
