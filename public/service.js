galleryApp.factory('authService',
  ['$http',
  function ($http) {
    var service= {};
    service.getImages =  function(pagecount){
        var promise = 
          $http.get('api/animals/'+pagecount)
          // handle success
          .then(function (res) {

            var output=JSON.parse(res.data);
             return output;
          });
          
        return promise;

    };
    return service;
}]);