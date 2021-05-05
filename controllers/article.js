const Articles = require('../models/Articles');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('b9e4e3ad0e2b490bb7628960ed097477');

exports.getArticles = (async (req, res) => {
    const notes = await Articles.find();
    res.json(notes);
});

exports.updateArticles = (async (req, res) => {
    const data = await newsapi.v2.everything({
                    q: 'bitcoin',
                    sources: 'bbc-news,the-verge',
                    domains: 'bbc.co.uk, techcrunch.com',
                    language: 'en',
                    sortBy: 'relevancy',
                    page: 2
                  })

    try {
        const savedArticle = await Articles.updateOne(
            { $set: { articles: data.article } }
        );
        res.send(savedArticle);
    }catch(err){
        res.status(400).send(err.message);
    } 
})

// exports.updateArticles =(req, res,) => {
//     newsapi.v2.everything({
//             q: 'bitcoin',
//             sources: 'bbc-news,the-verge',
//             domains: 'bbc.co.uk, techcrunch.com',
//             language: 'en',
//             sortBy: 'relevancy',
//             page: 2
//           }).then(response => {
//             console.log(response);
//             const article =new Article({
//                     title: response.title,
//                     author: response.author,
//                     url: response.url,
//                     content: response.content
//                     })
//                     console.log(article)
//                     res.json(article);
//                     article.save;
//                 })
// }