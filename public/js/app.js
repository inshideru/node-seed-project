(function () {

    angular.module('seed', ['ui.router', 'ngMessages'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/index/main');

            $stateProvider
                .state('index', {
                    url: '/index',
                    abstract: true,
                    templateUrl: '/views/content.html'
                })
                .state('index.main', {
                    url: "/main",
                    templateUrl: "views/main.html",
                    data: { pageTitle: 'Example view' }
                })
                .state('login', {
                    url: '/login',
                    templateUrl: '/views/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'login'
                })
                ;

        }]);
})();