const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
app.use(cors())
const bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const dotenv = require('dotenv')

dotenv.config();
const authRoute = require('./routes/auth.js');
const adminRoute = require('./routes/admin.js');
const userRoute = require('./routes/user.js');
const postsRoute = require('./routes/posts.js');
const notesRoute = require('./routes/notes.js');
const weatherRoute = require('./routes/weather');
const quoteRoute = require('./routes/quotes');
app.use('/auth', authRoute);
app.use('/admin', adminRoute );
app.use('/user', userRoute );
app.use('/post',postsRoute);
app.use('/note', notesRoute);
app.use('/weather', weatherRoute);
app.use('/quote', quoteRoute);
mongoose.connect(
   process.env.DB_CONNECTION ,
    { useUnifiedTopology: true, useNewUrlParser: true }, 
    () =>
    console.log('connected to db')
    );

app.listen(3000)

