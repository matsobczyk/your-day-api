const CronJob = require('cron').CronJob;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const https = require("https");
const NewsAPI = require('newsapi');
var cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const newsapi = new NewsAPI('b9e4e3ad0e2b490bb7628960ed097477');




dotenv.config();
app.use(bodyParser.json());
const authRoute = require('./routes/auth.js');
const adminRoute = require('./routes/admin.js');
const userRoute = require('./routes/user.js');
const todosRoute = require('./routes/todos.js');
const notesRoute = require('./routes/notes.js');
const gitRoute = require('./routes/git.js');
app.use('/auth', authRoute);
app.use('/admin', adminRoute );
app.use('/user', userRoute );
app.use('/todos',todosRoute);
app.use('/notes', notesRoute);
app.use('/git', gitRoute);

mongoose.connect(
   process.env.DB_CONNECTION ,
    { useUnifiedTopology: true, useNewUrlParser: true }, 
    () =>
    console.log('connected to db')
    );


app.get('/', (req, res) => {
    res.send('Make Your git')
})


var job = new CronJob('* * 8 * * *', function() {
    //calling quotes api
    https.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1", resp =>{
        let data = "";
    
        resp.on("data", chunk =>{
            data += chunk;
        });
    
        resp.on("end", () =>{
            let calledQuote = JSON.parse(data);
            console.log(quote);
            const quote =new Quote({
                text: calledQuote.text,
                author: calledQuote.author,
                tag: calledQuote.tag
            })
            quote.save;
        });
        
    })
    .on("error", err =>{
    console.log("error "+ err.message);
    });
    //calling newsapi
    // newsapi.v2.everything({
    //     q: 'bitcoin',
    //     sources: 'bbc-news,the-verge',
    //     domains: 'bbc.co.uk, techcrunch.com',
    //     language: 'en',
    //     sortBy: 'relevancy',
    //     page: 2
    //   }).then(response => {
    //     console.log(response);
    //     let news = JSON.parse(response);
    //     const article =new Article({
    //             title: response.title,
    //             author: response.author,
    //             url: response.url,
    //             content: response.content
    //             })
    //             console.log(article)
    //             article.save;
    
    // });
});
job.start();


app.listen(3000)

