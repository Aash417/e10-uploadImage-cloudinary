import { Request, Response } from 'express';
import { uploadOnCloudinary } from '../utils/cloudinary';

export async function test(req: Request, res: Response) {
  res.status(200).json({
    message: 'ok',
  });
}

export async function uploadImage(req: Request, res: Response) {
  const avatarFiles = req.files as {
    [fieldname: string]: Express.Multer.File[];
  };
  const avatarLocalPath = avatarFiles['image']
    ? avatarFiles['image'][0].path
    : undefined;
  const uploadedAvatar = await uploadOnCloudinary(avatarLocalPath);

  res.status(200).json({
    coudinaryUrl: uploadedAvatar.url,
  });
}
