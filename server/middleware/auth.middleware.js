const { verifyToken } = require("../services/token.services");
module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error();
    }
    const userData = verifyToken(token);
    if (!userData) {
      throw new Error();
    }
    req.user = userData;
    next();
  } catch (err) {
    res.status(401).json({
      response: false,
      message: "Token not found",
    });
  }
};
