import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware';
import { test, uploadImage } from './../controllers/user.controller';

const router = Router();

router
  .route('/upload')
  .get(test)
  .post(
    upload.fields([
      {
        name: 'image',
        maxCount: 1,
      },
    ]),
    uploadImage
  );

export default router;
