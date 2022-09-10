import express from 'express';
import type { Express } from 'express';
import path from 'path';
import proxyRoutes from './proxy-routes';
import { srcDirectory } from '../directories';

export const initializeRoutes = (app: Express): void => {
  let isStaticPageLoaded = false;

  app.use('/', proxyRoutes);

  app.use('/', (_req, res, next) => {
    if (isStaticPageLoaded) {
      next();
    } else {
      app.use(express.static(srcDirectory));
      isStaticPageLoaded = true;

      return res.sendFile(path.join(srcDirectory, 'index.html'));
    }
  });
};
