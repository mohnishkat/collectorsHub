'use strict';

var express = require("express");
var router = express.Router();
var controller = require('./blog.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

/**
 * Render Main Page
 */
//router.get("/", controller.getBlogsPage);
/**
 * Render blog by url param id
 */
//router.get("/blog/programming/:name/:id", controller.getBlogByIdPage);
/**
 * Render Blog Page
 */
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

// /**
// * Render Sitemap.xml
// */
// router.get("/sitemap.xml", function(req, res) {
//     blog.find({}).sort({ created_at: -1 }).exec(function(err, blogs) {
//
//         if(err) throw(err);
//
//         res.setHeader('content-type', 'application/xml');
//         res.render("sitemap", {
//             blogs: blogs
//         });
//     });
// });
