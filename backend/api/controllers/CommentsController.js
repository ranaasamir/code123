const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  Comments = mongoose.model('Comments');



module.exports.addComment = async (req, res) => {
const comment = await Comments.create(req.body);
res.status(201).json({
  err: null,
  msg: 'Comment was created successfully.',
  data: Comments
});
  console.log('tes4');
};

module.exports.getComments = async (req, res) => {
    var articeId = req.params.articleId
    const comments = await Comments.find({articleId:articeId}).exec();
   return res.status(200).json({
     err: null,
     comments: comments,
     msg: 'testing comments',
     data: null
   });
   console.log('test3');
}
