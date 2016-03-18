'use strict';

var blog = require('./blogs.model');
var config = require('../../config/environment');


exports.getBlogPage = function(req, res) {
    res.render("blogs/blogs-page.html");
};

exports.createBlogPage = function(req, res) {
    res.render("blogs/create.html");
};

exports.updateBlogPage = function(req, res) {
    res.render("blogs/update.html");
};

exports.getAllBlogs = function(req, res) {
    blog.find(function(err, blogs) {
        if(err) throw(err);

        res.json(blogs);
    });
};

exports.getBlog = function(req, res) {
    blog.findById(req.params.id, function(err, blog) {
        if(err) throw err;

        res.json(blog);
    });
};

exports.createBlog = function(req, res) {
    blog.create(req.body, function(err) {
        if(err) throw err;

        res.json({ success: true })
    });
};

exports.updateBlog = function(req, res) {

    blog.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if(err) throw err;

        res.json({success: true});
    });
};

exports.deleteBlog = function(req, res) {
    blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) throw err;

        res.json({success: true});
    });
};
