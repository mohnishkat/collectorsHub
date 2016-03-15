(function() {
  'use strict';

  angular
    .module('app')
    .factory('adminAPI', adminAPI);

  adminAPI.$inject = ['$http'];

  function adminAPI($http) {
    return {
      getUsers: getUsers,
      deleteUser: deleteUser,
      getOneUser: getOneUser
    }

    function getUsers() {
      var url = '/api/users';
      var request = $http.get(url, {
        cache: true
      });
      return (request.then(handleSuccess, handleError));
    }

    function getOneUser(id) {
      var url = '/api/users/' + id;
      var request = $http.get(url, {
        cache: true
      });
      return (request.then(handleSuccess, handleError));
    }

    function deleteUser(user) {
      return $http.delete('/api/users/' + user._id);
    }

    function handleError(response) {
      throw (response.data.message);
    }

    // handle success
    function handleSuccess(response) {
      return (response.data);
    }

  }
})();