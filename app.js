
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const dotenv = require('dotenv')

dotenv.config();
app.use(bodyParser.json());
const authRoute = require('./routes/auth.js');
const adminRoute = require('./routes/admin.js');
const userRoute = require('./routes/user.js');
app.use('/user', authRoute);
app.use('/admin', adminRoute );
app.use('/user', userRoute );


mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true }, 
    () =>
    console.log('connected to db')
    );


app.get('/', (req, res) => {
    res.send('Make Your Day!')
})

app.listen(3000)

