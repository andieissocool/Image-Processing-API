import express from 'express';
import { processImage } from '../../services/imageProcessor';
import path from 'path';

const images = express.Router();

images.get('/', async (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  const response = await processImage(filename, width, height);
  const fullUrl = `${req.protocol}://${req.get('host')}/api/images/${filename}-thumb.jpg`;

  const filePath = path.join(
    __dirname,
    `../../../assets/thumbs/${filename}-thumb.jpg`,
  );
  res.sendFile(filePath);
});

export default images;
