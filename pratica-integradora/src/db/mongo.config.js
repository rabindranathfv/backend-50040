const mongoose = require("mongoose");

const DB_HOST = "localhost";
const DB_NAME = "mongoStudenDB";
const DB_PORT = 27017;

const configConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

const mongoDBconnection = async () => {
  try {
    await mongoose.connect(configConnection.url, configConnection.options);
    console.log(`=================================`);
    console.log(
      `======= URL: ${configConnection.url.substring(0, 20)} =======`
    );
    console.log(`==== DB: ${DB_NAME}`);
    console.log(`=================================`);
  } catch (error) {
    console.log(
      "🚀 ~ file: mongo.config.js:24 ~ mongoDBconnection ~ error:",
      error
    );

    throw new Error(error);
  }
};

module.exports = {
  configConnection,
  mongoDBconnection,
};
