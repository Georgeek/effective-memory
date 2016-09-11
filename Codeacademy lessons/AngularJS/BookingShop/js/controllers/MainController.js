app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Zavtrak raduet menya!!';
  $scope.promo = 'A kogda gotovit Busya, to voobshe schastie!!';
	$scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg', 
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Game of Thrones', 
    price: 10, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'https://03fcd67fd51850d3ba6b-6cb392df11a341bce8c76b1898d0c030.ssl.cf3.rackcdn.com/large/9780/0074/9780007448036.jpg', 
    likes: 0,
    dislikes: 0
  }, 
   { 
    name: 'Program or be Programmed', 
    price: 9.5, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'http://i.imgur.com/IibDqjf.jpg', 
    likes: 0,
    dislikes: 0
  } 
	];
 $scope.plusOne = function (index) {
    $scope.products[index].likes += 1;
  };
 $scope.minusOne = function (index) {
    $scope.products[index].dislikes += 1;
  };
}]);