import express from 'express';
import images from './api/images';
import path from 'path';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello World!');
});

routes.use(
  '/images',
  express.static(path.join(__dirname, '../../assets/thumbs')),
);

routes.use('/images', images);

export default routes;
