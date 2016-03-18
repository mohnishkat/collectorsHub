(function() {
  'use strict';

  angular
    .module('app')
    .factory('blogsAPI', blogsAPI);

    blogsAPI.inject = ['$http'];

    function blogsAPI($http) {
      return{
        allBlogs:allBlogs,
        editBlog:editBlog,
        updateBlog:updateBlog,
        deleteBlog:deleteBlog,
        createBlog:createBlog
      }

      // get all blogs
      function allBlogs() {
          return $http.get("/api/blogs/blogs");
      }
      // edit blog
      function editBlog(id) {
          return $http.get("/api/blogs/blog/" + id + "/edit");
      }

      // update blog
      function updateBlog(blog) {
          return $http.post("/api/blogs/blog/" + blog._id + "/update", blog);
      }

      // delete blog
      function deleteBlog(id) {
          return $http.post("/api/blogs/blog/" + id + "/delete");
      }

      // create blog
      function createBlog(blog) {
          return $http.post("/api/blogs/blog/create", blog);
      }

    }
})();
