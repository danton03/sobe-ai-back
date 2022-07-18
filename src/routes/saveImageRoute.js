import { saveImage } from '../controllers/saveImageController.js';
import { Router } from "express";
import upload from '../middlewares/uploadImage.js';

const router = Router();

router.post('/upload-image', upload.single('image'), saveImage);

export default router;