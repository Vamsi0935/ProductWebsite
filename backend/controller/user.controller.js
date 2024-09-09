const UserModel = require("../model/user.model");
const ContactModel = require("../model/contact.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../utils/error");

const registerUser = async (req, res, next) => {
  try {
    const { fullname, email, phoneNumber, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, "User already exist..."));
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully....",
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not found..."));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(404, "Wrong Credentials...."));
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      "vamsikrishnad"
    );
    const { password: pass, ...rest } = user._doc;

    res.cookie("access-token", token, { httpOnly: true }).status(200).json({
      success: true,
      message: "User Login successfully...",
      rest,
    });
  } catch (err) {
    next(err);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({
      success: true,
      message: "User logout successfully...",
    });
  } catch (error) {
    next(error);
  }
};

const contactUser = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new ContactModel({ name, email, message });
    await newContact.save();
    res.json({ success: true, message: "Contact saved..." });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error.." });
  }
};

module.exports = { registerUser, loginUser, logoutUser, contactUser };
