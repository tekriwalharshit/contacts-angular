var app = angular.module("ContactManager", [ ]);

app.controller("cmanagerCtrl", function($scope){
  
  $scope.list = [
    {id: 1, name: "Harshit", phone: "9884207490", email: "harshit.tekriwal96@gmail.com"}, 
    {id: 2, name: "Harry", phone: "9789641256", email: "tihsrah007@gmail.com "},
    {id: 3, name: "Aayush", phone: "8654769875", email: "mail@gmail.com"},
    {id: 4, name: "Rahul", phone: "8456987456", email: "mailr@gmail.com"},
    {id: 5, name: "Ajay", phone: "7458963211", email: "tihsrah007@yahoo.in"}
  ];
  
  $scope.addItem = function(){
    $scope.list.push({
      id: $scope.list.length + 1, 
      name: $scope.item.name, 
      phone: $scope.item.phone, 
      email: $scope.item.email
    });
    
    $scope.item = "";
  };
  
  $scope.delItem = function(item){
    $scope.list.splice($scope.list.indexOf(item),1);
  };
  
});
