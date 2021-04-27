const User = require('../models/User');
const mongoose = require('mongoose');


exports.getUsers = (req,res,next) => {
    User.find()
        .then((docs) => {
            res.status(200).json({
                message: 'List of all users',
                info: docs,
            });
        })
        .catch((err) => res.status(500).json({ message: err}));
}

exports.deleteUser = (async (req,res,next) => {
    const id = req.params.userId;
    User.findByIdAndDelete({_id:id})
        .then((docs) => {
            res.status(200).json({
                message: 'User with id '+ id +' has beeen succesfully deleted',
                info: docs,
            });
        })
        .catch((err) => res.status(500).json({ message: err}));
});