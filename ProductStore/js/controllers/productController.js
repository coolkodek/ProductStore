
myApp.controller("productController", ["$scope", "masterFactory", "productService", function ($scope, masterFactory, productService) {

    $scope.buttonName = "Add Product";
    $scope.cancel = function () {
        $scope.product = {};
    }

    $scope.submit = function () {

        var productData = productService.addProduct($scope.product);

        productData.then(function (res) {
            alert("Product added successfully");
            $scope.products = res.data;
            $scope.product = {};
            $scope.buttonName = "Add Product";
        })
    }

    var productlist = productService.getProducts();
    productlist.then(function (res) {
        $scope.products = res.data;
    })

    $scope.getProductById = function (product) {
        $scope.product = product;
        $scope.buttonName = "Update Product";
    }

    $scope.deleteProduct = function (productId) {
        var productList = productService.deleteProduct(productId);

        productList
        .then(function (response) {
            $scope.products = response.data;
        }, function () {
            alert('Error in delete products');
        })
    }

} ])

