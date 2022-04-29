import * as chai from 'chai';
import request from 'supertest';
import { dbClose, dbConnect } from '../../helpers/dbConnect';
import app from '../../app';
import logger from '../../logger/logger';
import { User } from '../../models/User';

const { expect } = chai;
logger.level = 'fatal';

describe('creating new user', () => {
  const user = {
    mail: '53454ri4956r1@gmail.com',
    userName: 'dra52535ratri14',
    password: '41234',
  };

  before(async () => dbConnect());
  after(async () => {
    await User.deleteOne(user);
    dbClose();
  });

  it('create available user', async () => {
    const res = await request(app).post('/api/signup').send(user);
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.include(`success, user:${user.userName} created :)`);
  });

  it('try to create empty user, should return 400', async () => {
    const res = await request(app).post('/api/signup').send();
    expect(res.statusCode).to.equal(400);
  });

  it('try to create the same user, should return 409', async () => {
    const res = await request(app).post('/api/signup').send(user);
    expect(res.statusCode).to.equal(409);
  });
});
