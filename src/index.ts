import express from 'express';
import http from 'http';
import appConfig from './app-config';
import { initializeRoutes } from './route';

const app = express();
const server = http.createServer(app);
const port = appConfig.PORT ?? 9898;

initializeRoutes(app);

server.listen(port, '127.0.0.1', () => {
  console.log(`Express server started on port ${port}`);
});
