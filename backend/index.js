const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register")
const login = require("./routes/login");

const products = require("./products")

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
  res.send("WelCome to our Online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
  });

const port = process.env.PORT || 5000;
const uri =  process.env.DB_URI;

app.listen(port, console.log(`Server running on port 5000 ${port}`));


mongoose
   .connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongDB Connection Successful...")) 
.catch((err) => console.log("MongDB Connection failed", err.message));
