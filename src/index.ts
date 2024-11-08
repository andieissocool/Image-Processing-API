import express from 'express';
import routes from './routes/index';
import logger from './utilities/logger';

const app = express();
const port = 3000;

app.use('/api', logger, routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
