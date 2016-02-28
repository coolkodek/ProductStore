

myApp.controller("storeController", ["$scope", "$routeParams", "$location", "productService", "customertService", "orderService", function ($scope, $routeParams, $location, productService, customertService, orderService) {
    //  get store and cart from service
    var productlist = productService.getProducts();
    productlist.then(function (res) {
        $scope.store = res.data;
    })

    $scope.cart = new shoppingCart("myStore");

    var customerList = customertService.getCustomers();
    customerList.then(function (res) {
            $scope.customers = res.data;
    })

    //$scope.getCustomerDetails = function (customer) {
    //    $scope.selectedCustomer = customer;
    //}

   
    if ($routeParams.name != null) {
        var productlist = productService.getProducts();
        productlist.then(function (res) {
            $scope.store = res.data;

            angular.forEach($scope.store, function (product) {
                if (product.name === $routeParams.name) {
                    $scope.product = product;
                }
            })
        })
    }



    $scope.submitOrder = function () {

        var order = {};
        order.customerName = $scope.customer.name;
        order.phone = $scope.customer.phone;
        order.email = $scope.customer.email;
        order.address = $scope.customer.address;
        order.item = $scope.cart.items;
        order.totalItemCount = $scope.cart.getTotalCount();
        order.totalPrice = $scope.cart.getTotalPrice();
        order.orderDateTime = new Date();


        var orderPlace = orderService.addOrder(order);
        orderPlace.then(function (res) {
            if (res.status === 200)
            {
                order = {};
                localStorage.clear();
                $location.path("/orderList");
                }
        })

    }

    var orderList = orderService.getOrders();
    orderList.then(function (res) {
         $scope.orders = res.data;
    })

    $scope.deleteOrder = function (orderId) {

        var orderList = orderService.deleteOrder(orderId);

        orderList.then(function (res) {
            $scope.orders = res.data;
        }, function () {
            alert('Error in delete order');
        })
    }
    


} ])

