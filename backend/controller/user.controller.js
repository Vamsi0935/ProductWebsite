const UserModel = require("../model/user.model");
const ContactModel = require("../model/contact.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
  try {
    const { fullname, email, phoneNumber, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists.....",
      });
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
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
        note: "User with this email does not exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password...",
      });
    }

    // Include user id in the token payload and response
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "vamsikrishnad"
    );

    res.status(200).json({
      success: true,
      message: "User Login successfully...",
      token,
      user: {
        id: user._id, 
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
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

module.exports = { registerUser, loginUser, contactUser };
