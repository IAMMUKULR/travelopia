require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./config/db.config");
const Trip = require("./routes/trip.routes");
const Admin = require("./routes/adminLogin.routes");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./uploads"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

dbConnect();

app.use("/api", Trip);
app.use("/api/admin", Admin);

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`Server is Running on PORT: ${Port}`);
});
