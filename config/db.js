const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASWD, MONGO_IP, MONGO_PORT, MONGO_DATABASE } = require("./config");
require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      // without local host make it dynamic for local
      `mongodb://${MONGO_USER}:${MONGO_PASWD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DATABASE}`,
      {
        authSource: "admin",
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log(`<=========MongoDB Connected=========>: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
