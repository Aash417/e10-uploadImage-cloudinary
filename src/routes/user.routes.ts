import { Router } from 'express';
import { test } from './../controllers/user.controller';

const router  = Router();

router.route('/upload').get(test);

export default router;
