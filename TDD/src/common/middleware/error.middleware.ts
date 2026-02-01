import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../types/response.types';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  const response: ErrorResponse = {
    success: false,
    message: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString(),
  };

  res.status(500).json(response);
};
