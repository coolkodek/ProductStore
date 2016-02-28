

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var myApp = angular.module("myStore", ["ngRoute", "checklist-model"]);

myApp.config(['$routeProvider', function ($routeProvider) {
   // alert("inside me");
    $routeProvider.
       when('/customer', {
           templateUrl: 'partials/addCustomer.htm',
           controller:  'customerController'
       }).
        when('/product', {
            templateUrl: 'partials/addProduct.htm',
            controller: 'productController'
        }).
      when('/store', {
          templateUrl: 'partials/store.htm',
          controller: 'storeController'
      }).
      when('/products/:name', {
          templateUrl: 'partials/product.htm',
          controller: 'storeController'
      }).
      when('/cart', {
          templateUrl: 'partials/shoppingCart.htm',
          controller: 'storeController'
      }).
      when('/orderList', {
          templateUrl: 'partials/orderList.html',
          controller: 'storeController'
      }).
      when('/blog', {
          templateUrl: 'partials/blog/blog.html',
          controller: 'blogController'
      }).
      when('/addPost', {
          templateUrl: 'partials/blog/addPost.html',
          controller: 'addPostController'
         }).
       
      otherwise({
          redirectTo: '/store'
      });
} ]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).



  