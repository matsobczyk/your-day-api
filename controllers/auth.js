const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// exports.register = (async (req, res) => {
//     //data validation
//     const {error} = registerValidation(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
    
//     //check if email is already in database
//     const emailExist = await User.findOne({email: req.body.email});
//     if(emailExist) return res.status(400).send('Email already in database!');

//     //hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(req.body.password, salt);

//     const user = new User ({
//         name: req.body.name,
//         email: req.body.email,
//         password: hashPassword,
//         date: req.body.date,
//     });
//     try {
//         const savedUser = await user.save();
//         res.send({user: user._id});
//     }catch(err){
//         res.status(400).send(err);
//     }

// });

//login
// exports.login = (async (req, res) => {
//     //validation
//     const { error } = loginValidation(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     //checking if email does not exists
//     const user = await User.findOne({ email: req.body.email});
//     if (!user) return res.status(400).send('Email not found');

//     //checking if password is correct
//     const validPass = await bcrypt.compare(req.body.password, user.password);
//     if(!validPass) return res.status(400).send('Invalid password');

//     //create and assign a token
//     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
//     res.header('auth-token', token).send(token);



// })