require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
  const dbUrl = process.env.DB_URL;
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
    })
    .then(() => console.log("Database Connected Successfully...✅"))
    .catch((error) => console.log("Database Failed to connect...❌", error));
};

module.exports = dbConnect;
