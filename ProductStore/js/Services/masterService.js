angular.module("myStore").factory("masterFactory", ['$filter',
  function ($filter) {

      var factory = {};

      var hobbies = [
        { value: "Drawing", text: "Drawing" },
        { value: "Singing", text: "Singing" },
        { value: "Dancing", text: "Dancing" },
        { value: "Cooking", text: "Cooking" },
    ];

      //'Drawing', 'Singing', 'Cooking']

      var countryList = [
                { "cid": 1, "country": "INDIA" },
                { "cid": 2, "country": "USA" },

        ];

      var stateList = [
                { "sid": 1, "state": "Maharashtra", "country": "INDIA" },
                { "sid": 2, "state": "Bihar", "country": "INDIA" },
        ];

      var cityList = [
                { "cityId": 1, "city": "Mumbai", "state": "Maharashtra" },
                { "cityId": 2, "city": "Pune", "state": "Maharashtra" },
                { "cityId": 3, "city": "Patna", "state": "Bihar" },
                { "cityId": 4, "city": "Gaya", "state": "Bihar" },

        ];


      factory.getHobbies = function () {
          return hobbies;
      };

      factory.getCountry = function () {
          return countryList;
      };

      factory.getStates = function () {
          return stateList;
      };

      factory.getCity = function () {
          return cityList;
      };

      factory.getState = function (country) {
          var states = ($filter('filter')(stateList, { country: country }));
          return states;
      };

      factory.getCities = function (state) {

          var Country = ($filter('filter')(cityList, { state: state }));
          return Country;
      };

      return factory;

  } ]);

