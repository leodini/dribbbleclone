const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log(`db connected`)
);

const PORT = process.env.PORT || 3131;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(routes);
