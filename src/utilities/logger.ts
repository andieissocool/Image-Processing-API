import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): void => {
  console.log(`method ${req.method}, path ${req.path}`);
  next();
};

export default logger;
