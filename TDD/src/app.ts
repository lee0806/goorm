import express, { Application } from 'express';
import healthRouter from './features/health/health.routes';

export const createApp = (): Application => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use('/api/health', healthRouter);

  return app;
};
