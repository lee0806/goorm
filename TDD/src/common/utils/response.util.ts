import { Response } from 'express';
import { ApiResponse } from '../types/response.types';

export const successResponse = <T>(
  res: Response,
  message: string,
  data?: T,
  statusCode: number = 200
): Response => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    ...(data && { data }),
    timestamp: new Date().toISOString(),
  };

  return res.status(statusCode).json(response);
};
