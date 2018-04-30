const mongoose = require('mongoose');

module.exports.getLoggedInUser = async (req, res) => {
  if(req.session.loggedinuser==null){
    return res.status(403).json({
      err: null,
      msg: 'User not logged in',
      data: null
    });
  }
  else
  {
    res.status(200).json({
      msg: req.session.loggedinuser,
      id: req.session.loggedinuserid
    });
  }
}
