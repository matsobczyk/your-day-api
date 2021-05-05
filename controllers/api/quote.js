const Quote = require('../../models/Quote.js');

exports.getQuote = (req,res,next) => {
    Quote.find()
        .then((docs) => {
            res.status(200).json({
                message: 'List of all previuous quotes',
                info: docs,
            });
        })
        .catch((err) => res.status(500).json({ message: err}));
}




// https.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1", resp =>{
//     let data = "";

//     resp.on("data", chunk =>{
//         data += chunk;
//     });

//     resp.on("end", () =>{
//         let calledQuote = JSON.parse(data);
//         console.log(quote);
//         const quote =new Quote({
//             text: calledQuote.text,
//             author: calledQuote.author,
//             tag: calledQuote.tag
//         })
//         quote.save;
//     });
    
// })
// .on("error", err =>{
// console.log("error "+ err.message);
// });
