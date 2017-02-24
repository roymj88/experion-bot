'use strict';

angular.module('inspinia')
  .controller('BotController', function (botService) {

    var vm = this;
	
	vm.leaveRequestLoading = true;
	
	botService.getLeaveRequest().then(function(result){
		vm.leaveRequestData = result.data.data;
	});

	botService.getTravelRequest().then(function(result){
		vm.travelRequestData = result.data.data;
	});

  });
