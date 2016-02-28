
myApp.service("customertService", function ($http) {

    this.addCustomer = function (customer) {
        var response, operationType;
        if (customer._id != undefined) {
            operationType = 'U';
        } else {
            operationType = 'A';
        }

        response = $http({
            method: "post",
            url: "http://localhost:3934/Customer/AddCustomer",
            data: { customer: angular.toJson(customer), type: operationType },
            dataType: "json"
        });


        return response;
    }

    this.getCustomers = function () {
        return $http.get("http://localhost:3934/Customer/GetCustomer");
    }

    this.deleteCustome = function (customerId) {
        var response = $http({
            method: "post",
            url: "http://localhost:3934/Customer/DeleteCustomer",
            data: { customerId: customerId },
            dataType: "json"
        });
        return response;
    }

});