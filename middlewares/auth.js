const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token =  req.header('auth-token');
    if(!token) return res.status(400).send('Acces Denied!');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid auth token');
    }
}


const authAdmin = (req, res, next) => {
    const token =  req.header('auth-token');
    if(!token) return res.status(400).send('Acces Denied!');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRETAdmin);
        req.admin = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid auth token');
    }
}

module.exports.auth = auth;
module.exports.authAdmin = authAdmin;