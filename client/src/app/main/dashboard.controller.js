'use strict';

angular.module('inspinia')
  .controller('DashboardController', function ($rootScope, $state, mainService) {

    var vm = this;

    vm.userRequestLoading = true;
    mainService.getUserRequest().then(function(result){
    	var userRequestConfig = {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: result.data.data.title
		    },
		    subtitle: {
		        text: ''
		    },
		    xAxis: {
		        categories: result.data.data.categories,
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
		    series: result.data.data.series
		};
  		vm.userRequestConfig = userRequestConfig;
	    vm.userRequestLoading = false;

	});


    vm.platformRequestLoading = true;
	mainService.getPlatformRequest().then(function(result){

		var platformRequestConfig = {
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false,
	            type: 'pie'
	        },
	        title: {
	            text: result.data.data.title
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
	            data: result.data.data.data
	        }]
	    };
  		vm.platformRequestConfig = platformRequestConfig;
  		vm.platformRequestLoading = false;

	});


    vm.alexaRequestLoading = true;
	mainService.getAlexaRequest().then(function(result){
	    var alexaRequestConfig = {
		    chart: {
		        type: 'column',
		    },
		    title: {
		        text: result.data.data.title
		    },
		    subtitle: {
		        text: ''
		    },
		    xAxis: {
		        categories: result.data.data.categories,
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
		    series: result.data.data.data
		};
  		
  		vm.alexaRequestConfig = alexaRequestConfig;
  		vm.alexaRequestLoading = false;


	});

  });
