(function () {

    angular.module('seed')
        .controller('MainCtrl', MainCtrl)
        .controller('LoginCtrl', LoginCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {
        var vm = this;

        vm.appName = 'Seed Project';
    };

    LoginCtrl.$inject = ['UserService'];

    function LoginCtrl(UserService) {
        var vm = this;
        vm.email = '';
        vm.senha = '';
        
        vm.autentica = function() {
            UserService.autenticaUser(vm.email, vm.senha)
                .then(function(response) {
                    console.log(response.token);
                    localStorage.setItem('token', 'JWT ' + response.token);
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
        console.log(vm);
        
    };

})();