'use strict';

var express = require("express");
var router = express.Router();
var controller = require('./blog.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

router.get("/blogs-page", controller.getBlogPage);
/**
 * render Create new blog page
 */
router.get("/blog/new", controller.createBlogPage);
/**
 * Render Update Blog Page
 */
router.get("/blog/update", controller.updateBlogPage);
/**
 * return JSON all blogs
 */
router.get("/blogs", controller.getAllBlogs);

// =========================================
//              Angular Routes
// =========================================

/**
 * Angular Render Update blog
 */
router.get("/blog/:id/edit", controller.getBlog);

/**
 * Angular Post Create Blog
 */
router.post("/blog/create", controller.createBlog);
/**
 * Angular Post Update blog
 */
router.post("/blog/:id/update", controller.updateBlog);
/**
 * Angular Post Delete Blog
 */
router.post("/blog/:id/delete", controller.deleteBlog);

module.exports = router;
