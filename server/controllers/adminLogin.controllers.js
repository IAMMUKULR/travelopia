require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

const {
  findExistingUser,
  comparePassword,
} = require("../services/adminLogin.services");
const { tokenGeneration } = require("../services/token.services");

module.exports = LoginAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!(userName && password)) {
      res.status(400).json({
        error: "All fields must be present",
      });
    }

    const existingUser = await findExistingUser({ userName });

    if (existingUser) {
      const matchedPassword = await comparePassword({
        password: password,
        userPassword: existingUser.password,
      });

      if (matchedPassword) {
        const token = await tokenGeneration({ id: existingUser._id });

        if (!token) {
          return res.json({
            message: "Token not generated",
          });
        }

        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: true,
        };
        res.cookie("token", token, options).json({
          message: "Login Successfully...✅",
          token: token,
          existingUser,
        });
      } else {
        res.status(500).json({
          error: "Invalid Password...❌",
        });
      }
    } else {
      res.status(404).json({
        error: "Admin not found...❌",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
