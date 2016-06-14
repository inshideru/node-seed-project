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
                .state('index.dois', {
                    url: "/list",
                    templateUrl: "partials/state1.list.html",
                    controller: function ($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })
                .state('state2', {
                    url: "/state2",
                    templateUrl: "partials/state2.html"
                })
                .state('state2.list', {
                    url: "/list",
                    templateUrl: "partials/state2.list.html",
                    controller: function ($scope) {
                        $scope.things = ["A", "Set", "Of", "Things"];
                    }
                });

        }]);
})();