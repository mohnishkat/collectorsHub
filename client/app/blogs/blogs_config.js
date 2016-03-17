(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
        .state("admin-all-blogs", {
            url: "/blogs",
            templateUrl: "app/blogs/blogs-page.html",
            controller: "BlogsCtrl"
        })
        .state("admin-create-blog", {
            url: "/blog/new",
            templateUrl: "app/blogs/create.html",
            controller: "BlogsCtrl"
        })
        .state("admin-update-blog", {
            url: "/blog/:id/update",
            templateUrl: "app/blogs/update.html",
            controller: "BlogsCtrl"
        })
        .state("user-all-blogs", {
            url: "/allblogs",
            templateUrl: "app/blogs/all-blogs.html",
            controller: "BlogsCtrl"
        })
        .state("user-blog", {
            url: "/blogs",
            templateUrl: "app/blogs/blog-page.html",
            controller: "BlogsCtrl"
        });
  }

})();
