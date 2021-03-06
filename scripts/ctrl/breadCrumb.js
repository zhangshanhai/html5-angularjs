// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  var App;

  App = angular.module('ReaderProjectApp');

  App.controller('BreadCrumbCtrl', function($scope, $location) {
    $scope.items = [
      {
        name: '首页',
        href: '/'
      }
    ];
    if ($location.path() === '/newPost') {
      return $scope.items.push({
        name: '提交文章',
        href: '/newPost'
      });
    }
  });

}).call(this);
