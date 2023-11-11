import { Request, Response, NextFunction } from 'express';
import { ctpClient } from '../common/buildClient'; // Adjust the import path as necessary

export const commercetoolsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Attach the commercetools client to the request object
    req.ctpClient = ctpClient;

    next();
  } catch (error) {
    res.status(500).send("Error initializing commercetools client");
  }
};
