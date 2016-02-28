
myApp.controller("customerController", ["$scope", "masterFactory", "customertService", function ($scope, masterFactory, customertService) {
    $scope.buttonName = "Add Customer";
    $scope.hobbies = masterFactory.getHobbies();
    $scope.countries = masterFactory.getCountry();
    $scope.states = masterFactory.getStates();
    $scope.cities = masterFactory.getCity();

    $scope.customer = {
        hobbies: []
    };

    $scope.cancel = function () {
        $scope.customer = {};
    }

    $scope.submit = function () {

        var customerData = customertService.addCustomer($scope.customer);

        customerData.then(function (res) {

            alert("Customer registered successfully");
            $scope.customers = res.data;
            //  $location.path('/studentlist');
            $scope.customer = {};
            $scope.buttonName = "Add Customer";

        })
    }

    var customerlist = customertService.getCustomers();
    customerlist.then(function (res) {
        $scope.customers = res.data;

    })

    $scope.getCustomerById = function (customer) {
        $scope.customer = customer;
        $scope.customer.dob = new Date(Date.parse($scope.customer.dob));
        $scope.buttonName = "Update Customer";
    }

    $scope.deleteCustomer = function (customerId) {
        var customerList = customertService.deleteCustome(customerId);

        customerList
        .then(function (response) {
            $scope.customers = response.data;
        }, function () {
            alert('Error in de;ete customer');
        })
    }



} ])

