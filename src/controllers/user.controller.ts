import { Request, Response } from 'express';

export async function test(req: Request, res: Response) {
  res.status(200).json({
    message: 'ok',
  });
}

export async function uploadImage(req: Request, res: Response) {
  res.status(200).json({
    message: 'in post',
  });
}