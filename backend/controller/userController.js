const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const {generateToken} = require('../utils/generateToken');

const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password, picture} = req.body;

  // console.log(req.body);

  const userExists = await User.findOne({email});

  if (userExists) {
    res.status(400);
    throw new Error('user already exist');
  }

  const user = await User.create({
    name,
    email,
    password,
    picture,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      idAdmin: user.isAdmin,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Error Occured!');
  }
});

const authUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;

  console.log(email);
  const user = await User.findOne({email});

  console.log(user.matchPassword, 'user');

  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      idAdmin: user.isAdmin,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
  }
});

module.exports = {registerUser, authUser};