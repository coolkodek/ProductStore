
myApp.service("blogService", function ($http) {

    this.addPost = function (post) {
        debugger;
        var response;
        if (post._id != undefined) {
            operationType = 'U';
        } else {
            operationType = 'A';
        }

        response = $http({
            method: "post",
            url: "http://localhost:3934/Blog/AddPost",
            data: { post: angular.toJson(post), type: operationType },
            dataType: "json"
        });
        return response;
    }

    this.getPosts = function () {
        return $http.get("http://localhost:3934/Blog/GetPosts");
    }

    this.deletePost = function (postId) {
        var response = $http({
            method: "post",
            url: "http://localhost:3934/Blog/DeletePost",
            data: { postId: postId },
            dataType: "json"
        });
        return response;
    }

});