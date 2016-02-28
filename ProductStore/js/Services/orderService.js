
myApp.service("orderService", function ($http) {

    this.addOrder = function (order) {
        var response;

        response = $http({
            method: "post",
            url: "http://localhost:3934/Store/AddOrder",
            data: { order: angular.toJson(order) },
            dataType: "json"
        });

        return response;
    }


    this.getOrders = function () {
        return $http.get("http://localhost:3934/Store/GetOrder");
    }

    this.deleteOrder = function (orderId) {
        var response = $http({
            method: "post",
            url: "http://localhost:3934/Store/DeleteOrder",
            data: { orderId: orderId },
            dataType: "json"
        });
        return response;
    }


})