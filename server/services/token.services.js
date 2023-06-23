require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenGeneration = async (payload) => {
  const { id } = payload;

  const token = await jwt.sign(
    {
      id: id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "2 days",
    }
  );

  return token;
};

const verifyToken = async (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = { tokenGeneration, verifyToken };
