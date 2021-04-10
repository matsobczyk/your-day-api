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

exports.deleteUser = (req,res,next) => {
    const id = req.params.UserId;
    User.findByIdAndDelete()
        .then((docs) => {
            res.status(200).json({
                message: 'User with id '+ id +'has beeen succesfully deleted',
                info: docs,
            });
        })
        .catch((err) => res.status(500).json({ message: err}));
}