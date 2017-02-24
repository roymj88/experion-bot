'use strict';

angular.module('inspinia')
  .controller('DashboardController', function ($rootScope, $state, mainService) {

    var vm = this;

    mainService.getUserRequest().then(function(result){
    	console.log(result);
    	var userRequestConfig = {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: 'User Requests Analysis'
		    },
		    subtitle: {
		        text: ''
		    },
		    xAxis: {
		        categories: [
		            "Leave", 
		            "Travel"
		        ],
		        crosshair: true
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: ''
		        }
		    },
		    tooltip: {
		        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
		        footerFormat: '</table>',
		        shared: true,
		        useHTML: true
		    },
		    plotOptions: {
		    	series: {
		            dataLabels: {
		                enabled: true,
		                format: '{point.y}'
		            }
		        },
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0
		        }
		    },
		    series: [{
		        name: 'Total',
		        data: [65, 59]

		    }, {
		        name: 'Attended',
		        data: [28, 48] 

		    }]
		};
  		vm.userRequestConfig = userRequestConfig;

	});

	mainService.getPlatformRequest().then(function(result){
		platformRequestConfig = {
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false,
	            type: 'pie'
	        },
	        title: {
	            text: 'Platform Specific Request Analysis'
	        },
	        tooltip: {
	            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	        },
	        plotOptions: {
	        	series: {
		            dataLabels: {
		                enabled: true,
		                format: '{point.name}: {point.y:.1f}%'
		            }
		        },
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: false
	                },
	                showInLegend: true
	            }
	        },
	        series: [{
	            name: 'Platforms',
	            colorByPoint: true,
	            data: [{
	                name: 'FB Messenger',
	                y: 56.33
	            }, {
	                name: 'Slack',
	                y: 24.03,
	                sliced: true,
	                selected: true
	            }, {
	                name: 'Twitter',
	                y: 10.38
	            }, {
	                name: 'Telegram',
	                y: 4.77
	            }, {
	                name: 'Skype',
	                y: 0.91
	            }]
	        }]
	    };
  		vm.platformRequestConfig = platformRequestConfig;

	});

	mainService.getAlexaRequest().then(function(result){
	    alexaRequestConfig = {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: 'Alexa Requests Analysis'
		    },
		    subtitle: {
		        text: ''
		    },
		    xAxis: {
		        categories: [
		            "Leave", 
		            "Travel"
		        ],
		        crosshair: true
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: ''
		        }
		    },
		    tooltip: {
		        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
		        footerFormat: '</table>',
		        shared: true,
		        useHTML: true
		    },
		    plotOptions: {
		    	series: {
		            dataLabels: {
		                enabled: true,
		                format: '{point.y}'
		            }
		        },
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0
		        }
		    },
		    series: [{
		        name: 'Total',
		        data: [100, 79]

		    }, {
		        name: 'Attended',
		        data: [88, 48] 

		    }]
		};
  		
  		vm.alexaRequestConfig = alexaRequestConfig;

	});

    

	





  });
