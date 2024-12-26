const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token);
  if (!token) return res.status(401).send('Access Denied');
  try{
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  }
  catch(err)
  {
    res.status(400).send('Invalid Token');
  }
};

module.exports = {checkToken};