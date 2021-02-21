const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    let token = jwt.sign({user},
      SECRET,
      {expiresIn: '24h'}
      )
      console.log(token)
    // TODO: Send back a JWT instead of the user
    res.json({ token: token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

