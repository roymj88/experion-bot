(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: "/login",
        templateUrl: "app/login/login.html",
        controller: "LoginController",
        controllerAs: "lc"
      })
      .state('forgotpassword', {
        url: "/forgotpassword",
        templateUrl: "app/forgot-password/forgot-password.html",
        controller: "ForgotPasswordController",
        controllerAs: "fpc"
      })
      .state('logout', {
        url: "/logout",
        controller: "LogoutController",
        controllerAs: "lgc"
      })
      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('index.main', {
        url: "/main",
        templateUrl: "app/main/main.html",
        data: { pageTitle: 'Example view' },
        controller:"DashboardController",
        controllerAs:"dc"
      })
      .state('index.bot', {
        url: "/bot",
        templateUrl: "app/bot/bot.html",
        data: { pageTitle: 'BOT Dashboard' },
        controller: "BotController",
        controllerAs: "bc"
      })
      .state('index.alexa', {
        url: "/alexa",
        templateUrl: "app/alexa/alexa.html",
        data: { pageTitle: 'Alexa Dashboard' },
        controller: "AlexaController",
        controllerAs: "ac"
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
