const jwt = require('jsonwebtoken');


module.exports = function auth (req, res, next){
    const token =  req.header('inv-token');
    if(!token) return res.status(400).send('Acces Denied!');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRETInv);
        req.inv = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
}