import winston from "winston";

// DEV LOGGER
const devLogger = winston.createLogger({
  transports: [new winston.transports.Console()],
  level: "verbose",
});

//  QA Logger

const qaLogger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: `errors-info.logs`,
      level: "info",
    }),
  ],
  level: "verbose",
});

// PROD LOGGER
const prodLogger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: `errors.log`,
      level: "warn",
    }),
  ],
  level: "http",
});

const loggersImplementation = {
  development: devLogger,
  qa: qaLogger,
  production: prodLogger,
};

export function dynamicLogger(req, res, next) {
  // console.log(
  //   "🚀 ~ file: logger.js:36 ~ dynamicLogger ~ process.env.NODE_ENV:",
  //   process.env.NODE_ENV
  // );
  // if (process.env.NODE_ENV === "production") {
  //   req.logger = loggersImplementation.production;
  // } else {
  //   req.logger = loggersImplementation.development;
  // }

  req.logger = loggersImplementation[`${process.env.NODE_ENV}`];
  next();
}
