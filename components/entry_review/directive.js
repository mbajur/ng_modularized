(function(){

  var app = angular.module("nemu.components.entryReview");

  app.directive("nemuEntryReview", [function(){
    return{
      scope: { },
      replace: true,
      
      templateUrl: "components/entry_review/template.html",
      controller: "nemu.components.entryReview.Controller",

      link: function($scope, $element, $attributes){
        // your DOM manipulation logic for this component goes here 
      }
    }; 
  }]); 

}());
