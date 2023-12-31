const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://user123456:user123456@cluster0.6n2feqd.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database Connected"));

  app.use("/api/user",userRoutes)
app.listen(5000, console.log("server started"));
