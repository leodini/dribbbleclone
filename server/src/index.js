const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("db connected")
);

app.use(routes);

const PORT = process.env.PORT || 3131;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
