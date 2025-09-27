const userModel = require("../models/user.model");
const foodPartnerModel = require('../models/foodpartner.model')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { fullName, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({
    email,
  });
  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already exits",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User registered",
    token,
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(401).json({
      message: "Unauthorised",
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Invalid password or email",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "Logged in",
    token,
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function logoutController(req,res) {
  res.clearCookie('token')
  res.status(200).json({
    message:"user logged out"
  })
}

async function registerFoodPartnerController(req, res) {
  const { fullName, email, password } = req.body;
  const isAccountAlready = await foodPartnerModel.findOne({
    email,
  });
  if (isAccountAlready) {
    return res.status(400).json({
      message: "User already exits",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const foodPartner = await foodPartnerModel.create({
    fullName,
    email,
    password: hashedPassword,
  });
  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User registered",
    user: {
      _id: foodPartner._id,
      email: foodPartner.email,
      fullName: foodPartner.fullName,
    },
  });
}

async function loginFoodPartnerController(req, res) {
  const { email, password } = req.body;

  const user = await foodPartnerModel.findOne({
    email,
  });

  if (!user) {
    return res.status(401).json({
      message: "Unauthorised",
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Invalid password or email",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "Logged in",
    token,
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function logoutFoodPartnerController(req,res) {
  res.clearCookie('token')
  res.status(200).json({
    message:"user logged out"
  })
}

module.exports = {
  registerController,loginController,logoutController,registerFoodPartnerController,loginFoodPartnerController,logoutFoodPartnerController
};
