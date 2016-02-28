
myApp.service("productService", function ($http) {

    this.addProduct = function (product) {
        var response, operationType;
        if (product._id != undefined) {
            operationType = 'U';
        } else {
            operationType = 'A';
        }

        response = $http({
            method: "post",
            url: "http://localhost:3934/Product/AddProduct",
            data: { product: angular.toJson(product), type: operationType },
            dataType: "json"
        });
        return response;
    }

    this.getProducts = function () {
        return $http.get("http://localhost:3934/Product/GetProduct");
    }

    this.deleteProduct = function (productId) {
        var response = $http({
            method: "post",
            url: "http://localhost:3934/Product/DeleteProduct",
            data: { productId: productId },
            dataType: "json"
        });
        return response;
    }

});