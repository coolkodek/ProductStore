

myApp.controller("addPostController", ["$scope", "$http", "$filter", "$location", "blogService", function ($scope, $http, $filter, $location, blogService) {

    
    $scope.title = "Manish Blog App";

   // $scope.blog.posts = {};
  //  $http.get("http://localhost:3934/Blog/GetPost").then(function (res) {
      //  $scope.blog.posts = res.data;
    //  });
  
    
   // $scope.blog.post = {};
    $scope.addPost = function () {
        
        $scope.blog.posts = {};
        $scope.blog.post.createdOn = $filter('date')(new Date(), "dd/MMM/yyyy");
        $scope.blog.post.comments = [];
        $scope.blog.post.likes = 0;
        $scope.blog.post.isVerified = 0;
        //blog.posts.unshift(this.post);
        var blogdata = blogService.addPost($scope.blog.post);

        blogdata.then(function (res) {
           $scope.blog.posts = res.data;
            $scope.blog.post = {};
            $location.path("/blog");
        })
       
    };
}])


myApp.controller("blogController", ["$scope", "$http", "blogService", function ($scope, $http, blogService) {
   
    $scope.isPostShow = 0;
    
    $scope.postDetails = {};
    $scope.showPost = function (post) {
        $scope.postDetails = post;
        $scope.isPostShow = 1;
    }

    var blogPosts = blogService.getPosts();
    blogPosts.then(function (res) {
        $scope.posts = res.data;
    })
}])

myApp.controller("CommentController", ["$scope", "$filter", "blogService", function ($scope, $filter, blogService) {

    $scope.addComment = function (post) {
        $scope.comment.createdOn = $filter('date')(new Date(), "dd/MMM/yyyy");
        $scope.comment.isVerified = 0;
        post.comments.push($scope.comment);
        $scope.comment = {};
    };

    $scope.syncComment = function () {
            var blogdata = blogService.addPost($scope.postDetails);

        blogdata.then(function (res) {
            })
    };

    $scope.resetComment = function () {
          $scope.comment = {};
    }
}])