import { Router } from 'express';
import { test, uploadImage } from '../controllers/user.controller';
import { upload } from '../middlewares/multer.middleware';

const router = Router();

router
  .route('/uploadImage')
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
