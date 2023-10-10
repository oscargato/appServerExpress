import { Request, Response, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';

const validateToken = (req: Request, resp: Response, next: NextFunction) => {
  const headerToken = req.headers['authorization'];

  if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
    try {
      const bearerToken = headerToken.slice(7);
      Jwt.verify(bearerToken, process.env.SECRET_KEY || 'Q%Wh6nqtpYbW3hPC');
      next();
    } catch (error) {
      resp.status(401).json({
        status: 401,
        msg: 'Token no valido',
      });
    }
  } else {
    resp.status(401).json({
      status: 401,
      msg: 'Acceso denegado',
    });
  }
};

export { validateToken };
