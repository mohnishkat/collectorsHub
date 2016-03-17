(function() {
  'use strict';

  angular
    .module('app')
    .controller('BlogsCtrl', BlogsCtrl);

  BlogsCtrl.$inject = ['$scope', '$state', '$stateParams', 'blogsAPI', 'Auth'];

  function BlogsCtrl($scope, $state, $stateParams, blogsAPI, Auth) {

    /**
     * All blogs/Delete Blog Controller
     */
        $scope.blog = {};

        // Get All Blogs
        blogsAPI.allBlogs().then(function(res){
            $scope.blogs = res.data;
            console.log(res.data);
        });

        // Delete Blog
        $scope.deleteBlog = function(id) {
            blogsAPI.deleteBlog(id).then(function(result) {
                if(result.data.success) {
                    $state.go($state.current, {}, { reload: true });
                }
            });
        };

        if($stateParams.id) {
            blogsAPI.editBlog($stateParams.id).then(function(res) {
                $scope.blog = res.data;
            });
        }

        // Create blog
        $scope.createBlog = function() {
            blogsAPI.createBlog($scope.blog).then(function(result) {
                if(result.data.success) {
                    $state.go("admin-all-blogs");
                    console.log(result.data);
                }
            });
        };

        // Update blog
        $scope.updateBlog = function(blog) {
            blogsAPI.updateBlog(blog).then(function(result) {
                if(result.data.success) {
                    $state.go("admin-all-blogs");
                    console.log(result.data);
                }
            });
        };
    }
})();
