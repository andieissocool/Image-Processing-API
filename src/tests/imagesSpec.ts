import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('api endpoint', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('images endpoint', () => {
  it('gets the images endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
  it('gets the images endpoint with data', async () => {
    const response = await request.get('/api/images');
    // expect(response.text).toBe('Processed data');
  });
});
