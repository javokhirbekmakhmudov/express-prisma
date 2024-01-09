import type {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";

export const errorHandler = async (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  res.status(500).json({message: "Internal Server Error"});
};
