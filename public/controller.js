var pagecount=1;
var isFetching=false;

galleryApp.controller('ctrl',  function ($scope, authService){

    authService.getImages(pagecount)
    .then(function(output) {
        $scope.obj=output;
    });

    //scrolling 
    $scope.getMoreImages = function() {
        pagecount++;
        authService.getImages(pagecount)
        .then(function(output) {    
            $scope.obj=output;
        });
  }
}); 
