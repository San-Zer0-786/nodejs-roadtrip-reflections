const express = require("express");
const routes = require("./routes/");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cloudinary = require("cloudinary");

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/medium";

/** configure cloudinary */
cloudinary.config({
  cloud_name: "chidumennamdi",
  api_key: "your_api_key", // Replace with your actual API key
  api_secret: "your_api_secret" // Replace with your actual API secret
});

/** connect to MongoDB datastore */
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use("/api", router);

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
