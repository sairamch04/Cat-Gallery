var pagecount=1;

galleryApp.controller('ctrl',  function ($scope, authService){

    authService.getImages(pagecount)
    .then(function(output) {        
       var output=JSON.parse(output);
        $scope.obj=output;
    });


	//Decrease the page count
    $scope.decrease =function(){
        pagecount--;
        if (pagecount<=0) {
            pagecount=1;
        }
        authService.getImages(pagecount)
        .then(function(output) {        
           var output=JSON.parse(output);
            $scope.obj=output;
        });

    };

	//Increase the page count
    $scope.increase = function(){
        pagecount++;
        authService.getImages(pagecount)
        .then(function(output) {        
           var output=JSON.parse(output);
            $scope.obj=output;
        });

    };

    //scrolling 
    $scope.getMoreImages = function() {
        pagecount++;
        console.log("called .");
        authService.getImages(pagecount)
        .then(function(output) {        
           var output=JSON.parse(output);
            $scope.obj=output;
        });
      }
}); 
