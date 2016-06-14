(function () {

    angular.module('seed')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {
        var vm = this;

        vm.appName = 'Seed Project';
        console.log(vm);
    };

})();