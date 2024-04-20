import { StatusCodes } from "http-status-codes";

export const DictionaryErrors = {
  ROUTING_ERROR: `ROUTING_ERROR`,
  INVALID_TYPES_ERROR: `INVALID_TYPES_ERROR`,
  CONTROLLER_ERROR: `CONTROLLER_ERROR`,
  SERVICE_ERROR: `SERVICE_ERROR`,
  DATABASE_ERROR: `DATABASE_ERROR`,
  INVALID_PARAMS_ERROR: `INVALID_PARAMS_ERROR`,
  INTERNAL_SERVER_ERROR: `INTERNAL_SERVER_ERROR`,
};

export class HttpResponse {
  OK(res, message, data) {
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      statusMessage: message,
      data,
    });
  }

  NotFound(res, message, data) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      statusMessage: message,
      data,
    });
  }

  Unauthorized(res, message, data) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: StatusCodes.UNAUTHORIZED,
      statusMessage: message,
      data,
    });
  }

  Forbbiden(res, message, data) {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: StatusCodes.FORBIDDEN,
      statusMessage: message,
      data,
    });
  }

  BadRequest(res, message, data) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      statusMessage: message,
      data,
    });
  }

  Error(res, message, data, codeError) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: message,
      data,
      codeError,
    });
  }
}
