// app.config(function ($stateProvider) {

//     $stateProvider.state('jranks', {
//         url: '/jranks',
//         controller: 'JranksController',
//         templateUrl: 'js/jranks/jranks.html',
//         resolve: {
//         	allJranks: function(InventoryFactory) {
//         		return InventoryFactory.fetchByType('alcoholic_drink');
//         	}
//         }
//     });

//     $stateProvider.state('jrankItem', {
//         url: '/jranks/:id',
//         controller: 'JrankController',
//         templateUrl: 'js/jranks/jrank.html',
//         resolve: {
//           jrankItem: function (InventoryFactory, $stateParams) {
//             return InventoryFactory.fetchById($stateParams.id);
//           }
//         }
//     });

// });

// app.controller('JranksController', function ($scope, allJranks) {

//     $scope.jranks = allJranks;

// });

// app.controller('JrankController', function ($scope, jrankItem) {
    
//     $scope.jrankItem = jrankItem;

// });