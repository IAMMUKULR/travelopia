const Admin = require("../models/admin.models");
const bcrypt = require("bcryptjs");

const findExistingUser = async (payload) => {
  const { userName } = payload;

  const existingUser = await Admin.findOne({ userName });

  return existingUser;
};

const comparePassword = async (payload) => {
  const { password, userPassword } = payload;

  const matchedPassword = await bcrypt.compare(password, userPassword);

  return matchedPassword;
};

module.exports = { findExistingUser, comparePassword };
