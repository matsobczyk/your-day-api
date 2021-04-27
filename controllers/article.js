const Article = require('../models/Article');


exports.getArticle = (req,res,next) => {
    Article.find()
        .then((docs) => {
            res.status(200).json({
                message: 'List of all articles',
                info: docs,
            });
        })
        .catch((err) => res.status(500).json({ message: err}));
}
