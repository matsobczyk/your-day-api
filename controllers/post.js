const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
exports.getPosts = (async (req, res) => {
    const decoded = await jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);
    try {
        const posts = await Post.find().exec();
        const user = await User.findById(decoded);
        res.json([posts, user.name]);
    } catch (error) {
        res.json(error);
    }

});

exports.getPost = (async (req, res) => {
    const decoded = await jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);
    try {
        const post = await Post.findById(req.params.postID);
        res.json(decoded);
    } catch (error) {
        res.json(error);
    }

});
exports.postPost = (async (req, res) => {
    const decoded = await jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);  
    const post = new Post ({
        author: decoded._id,
        text: req.body.text
    });
    try {
        const savedPost = await post.save();
        res.send(savedPost);
    }catch(err){
        res.status(400).send(err);
    } 
});
exports.patchPost = (async (req, res) => {
    const decoded = await jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);
    try{
        const updatedPost = await Post.updateOne(
            {$set: {author: decoded._id, text: req.body.text}}
            );
        res.json(updatedPost);
    }catch(err){
        res.json(err);
    }
});
exports.deletePost = (async (req, res) => {
    const decoded = await jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);
    try{
        const removedPost = await Post.deleteOne({id: req.params.postID, author: decoded._id});
        res.json(removedPost);
    }catch(err){
        res.json(err);
    }
})

