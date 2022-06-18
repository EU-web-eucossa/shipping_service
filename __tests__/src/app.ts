require('module-alias/register');

import app ,{start}from '../../src/app';
import request from 'supertest';

// group test using describe
describe('GET /', () => {
  start();
  it('returns status code 200 ', async () => {
    const res = await request(app).get('/');

    // toEqual recursively checks every field of an object or array.
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({msg: 'server development in progress'});
    
  });

});
