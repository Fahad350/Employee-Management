import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../model/userSchema.js";

export const handleRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(402).json({
        message: "All fields required!",
      });
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists!",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({ name, email, password: hashPassword });
    res.status(201).json({
      message: "register new user successfully!",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      messsage: "user registeration error",
      error: error.message,
    });
  }
};

export const handLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await user.findOne({ email });
    if (!isUserExist) {
      return res.status(404).json({
        message: "user not found!",
      });
    }
    const comp = await bcrypt.compare(password, isUserExist.password);
    if (!comp) {
      return res.status(404).json({
        message: "email or password inncorect",
      });
    }

    const token = jwt.sign(
      {
        id: isUserExist._id,
        email: isUserExist.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 1000, // 1 hour
      })
      .status(200)
      .json({
        message: "user loged in successfully!",

        user: {
          id: isUserExist._id,
          email: isUserExist.email,
        },
        token,
      });
  } catch (error) {
    res.status(500).json({
      message: "login error",
      error: error.message,
    });
  }
};

export const handleLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "Logout Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "logout error",
      error: error.message,
    });
  }
};
