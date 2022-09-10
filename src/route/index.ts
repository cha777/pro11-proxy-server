import express from 'express';
import type { Express } from 'express';
import path from 'path';
import proxyRoutes from './proxy-routes';

export const initializeRoutes = (app: Express): void => {
  let isStaticPageLoaded = false;

  app.use('/', proxyRoutes);

  app.use('/', (_req, res, next) => {
    if (isStaticPageLoaded) {
      next();
    } else {
      const assetsPath = path.join(__dirname, '../../assets/dist');

      app.use(express.static(assetsPath));
      isStaticPageLoaded = true;

      return res.sendFile(path.join(assetsPath, 'index.html'));
    }
  });
};
