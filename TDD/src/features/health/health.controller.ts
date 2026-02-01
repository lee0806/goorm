import { Request, Response } from 'express';
import { successResponse } from '../../common/utils/response.util';

export const getHealthStatus = (_req: Request, res: Response) => {
  return successResponse(res, 'OK');
};
