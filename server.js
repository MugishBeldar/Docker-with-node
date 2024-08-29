const express = require("express");
require("colors");
const connectDB = require("./config/db");
require('dotenv').config()
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const testRoute = require('./routes/testRoutes')
const postRoute = require('./routes/postRouters')
connectDB();
const app = express();
app.use(express.json()); 

app.use("/api/v1/test", testRoute);

// localhost:3000/api/v1/post
app.use('/api/v1/post', postRoute);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow)
);
