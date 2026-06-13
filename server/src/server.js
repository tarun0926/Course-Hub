require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const categoryRoutes = require("./routes/categoryRoute")

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);
app.use("/categories", categoryRoutes);

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is Running at Port ${PORT}`);
});
