(function () {

    angular.module('seed')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {

        var service =  {
            newUser : newUser,
            removeUser : removeUser,
            getUser : getUser,
            autenticaUser : autenticaUser
        };

        return service;

        function autenticaUser(email, senha) {
            return $http.post('/token', {
                email: email,
                password: senha
            })
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.error(error.data);
                throw new Error('Não foi possível executar o serviço.');
            })
        }

        function newUser() {

        };

        function removeUser() {

        };

        function getUser() {
            return $http.get('/user')
                .then(function(result) {
                    return result.data;
                })
                .catch(function(error) {
                    console.error(error);
                    throw new Error('Não foi possível executar o serviço.');
                });
        }
    }

})();