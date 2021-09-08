import express, { Express } from "express";
import http from "http";

export const createExpressApp = (): Express => {
  const app = express();

  return app;
};

export const createHttpServer = (app: Express): http.Server => {
  const httpServer = http.createServer(app);

  return httpServer;
};

export const runHttpServer = (httpServer: http.Server, PORT) => {
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
};
