const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  Article = mongoose.model('Article');


  module.exports.createArticle = async (req, res) => {
  const article = await Article.create(req.body);
  res.status(201).json({
    err: null,
    msg: 'Article was created successfully.',
    data: article
  });
};
  module.exports.saveArticle = async (req, res) => {
  const article = await Article.update(
      {"_id" : req.body._id},
      {$set: { "Name" : req.body.Name,
              "Dates" : req.body.Dates,
              "Content" : req.body.Content,
              "Author" : req.body.Author,
      }}
      );
  res.status(201).json({
    err: null,
    msg: 'Article was edited successfully.',
    data: article
  });
};
  module.exports.deleteArticle = async (req, res) => {
  const article = await Article.deleteOne(
      {"_id" : req.body.articleId}
      );
  res.status(201).json({
    err: null,
    msg: 'Article was Deleted successfully.',
    data: article
  });
};

 module.exports.getArticles = async (req, res) => {
  const articles = await Article.find().exec();
    return res.status(200).json({
      err: null,
      article: articles,
      msg: 'testing articles',
      data: null
    });
}

 module.exports.getArticle = async (req, res) => {
   var articeId = req.params.articleId
  const article = await Article.find({_id:articeId}).exec();
    return res.status(200).json({
      err: null,
      article: article,
      msg: 'testing articles',
      data: null
    });
}
