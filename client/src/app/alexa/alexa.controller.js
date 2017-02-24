'use strict';

angular.module('inspinia')
  .controller('AlexaController', function ($state) {

    var vm = this;
	console.log($state.current);

	// alexaService.getLeaveRequest().then(function(result){

	// });

	// alexaService.getTravelRequest().then(function(result){

	// });

	
	var leaveRequestData = {
		"status": 1,
		"message": "Successfully loaded leave list",
		"code": 200,
		"data": [
			{
				"start_date": "2017-02-16",
				"end_date": "2017-02-16",
				"leave_type": "Casual Leave",
				"request_source": "Slack",
				"user": "Sahad",
				"status": false
			},
			{
				"start_date": "2017-02-20",
				"end_date": "2017-02-20",
				"leave_type": "Casual Leave",
				"request_source": "Skype",
				"user": "Vishnu",
				"status": false
			},
			{
				"start_date": "2017-02-20",
				"end_date": "2017-02-20",
				"leave_type": "Casual Leave",
				"request_source": "FB Messenger",
				"user": "Roy",
				"status": false
			},
			{
				"start_date": "2017-02-20",
				"end_date": "2017-02-20",
				"leave_type": "Casual Leave",
				"request_source": "Telegram",
				"user": "Jayan",
				"status": false
			},
			{
				"start_date": "2017-02-20",
				"end_date": "2017-02-20",
				"leave_type": "Earned Leave",
				"request_source": "Slack",
				"user": "Afsal",
				"status": false
			}
		]
	};

	var travelRequestData = {
		"status": 1,
		"message": "Successfully loaded leave list",
		"code": 200,
		"data": [
			{
				"start_date": "2017-02-16",
				"end_date": "2017-02-16",
				"leave_type": "Casual Leave",
				"request_source": "Slack",
				"user": "Sahad",
				"status": false
			},
			{
				"start_date": "2017-02-20",
				"end_date": "2017-02-20",
				"leave_type": "Casual Leave",
				"request_source": "Skype",
				"user": "Vishnu",
				"status": false
			},
			{
				"start_date": "2017-02-20",
				"end_date": "2017-02-20",
				"leave_type": "Casual Leave",
				"request_source": "FB Messenger",
				"user": "Roy",
				"status": false
			},
			{
				"start_date": "2017-02-20",
				"end_date": "2017-02-20",
				"leave_type": "Casual Leave",
				"request_source": "Telegram",
				"user": "Jayan",
				"status": false
			},
			{
				"start_date": "2017-02-20",
				"end_date": "2017-02-20",
				"leave_type": "Earned Leave",
				"request_source": "Slack",
				"user": "Afsal",
				"status": false
			}
		]
	};

	vm.leaveRequestData = leaveRequestData.data;
	vm.itemsByPage = 15;

  });
