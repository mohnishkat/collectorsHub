'use strict';

var blog = require('./blogs.model');
var config = require('../../config/environment');

// exports.getBlogsPage = function(req, res) {
//     blog.find({}).sort({ created_at: -1 }).exec(function(err, blogs) {
//         if(err) throw(err);
//
//         res.render("client/index", {
//             title: "Dimitri Mikadze",
//             blogs: blogs,
//             desc: "Dimitri Mikadze Personal Blog",
//             url: "/"
//         });
//     });
// };

// exports.getBlogByIdPage = function(req, res) {
//
//     var name = req.params.name;
//     var id = req.params.id;
//
//     blog.findById(id, function(req, blog) {
//        res.render("client/blog/blog", {
//            title: name.split('-').join(' '),
//            blog: blog,
//            desc: blog.short_desc,
//            url: "/blog/programming/" + name + "/" + id
//        })
//     });
// };

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
