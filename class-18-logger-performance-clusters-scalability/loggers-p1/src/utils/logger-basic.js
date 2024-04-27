import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: "http"}),
    new winston.transports.File({
      filename: `./errors-warn.logs`,
      level: 'warn'
    })
  ]
})

export const useLogger = (req, res, next) => {
  req.logger = logger
  req.logger.http(
    `Method: ${req.method}, url: ${
      req.url
    } - time: ${new Date().toLocaleTimeString()}`
  );
  next()
}