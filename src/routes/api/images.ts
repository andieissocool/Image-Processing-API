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

  res.send(response);

  // /api/images?filename=fjord&width=200&height=200
  // res.redirect(fullUrl);

  // res.send(`
  //   <html>
  //     <body>
  //       <h1>Processed Image</h1>
  //       <img src="${fullUrl}" alt="Processed Image" />
  //     </body>
  //   </html>
  // `);
});

export default images;
