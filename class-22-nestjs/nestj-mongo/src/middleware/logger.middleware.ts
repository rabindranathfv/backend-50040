import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export default class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `${req.method} at ${req.url} time ${new Date().toLocaleString()}`,
    );
    next();
  }
}
