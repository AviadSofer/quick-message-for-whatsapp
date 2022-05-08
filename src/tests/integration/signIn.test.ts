import * as chai from 'chai';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { dbClose, dbConnect } from '../../helpers/dbConnect';
import app from '../../app';
import logger from '../../logger/logger';
import { User } from '../../models/User';

const { expect } = chai;
logger.level = 'fatal';

describe('login with user', () => {
  const randomString = (Math.random() + 1).toString(36).substring(7);
  const user = {
    mail: `${randomString}@gmail.com`,
    userName: randomString,
    password: '41234',
  };
  const { mail, userName, password } = user;

  before(async () => {
    await dbConnect();
    await User.deleteOne({ mail });
    await request(app).post('/api/signup').send(user);
  });
  after(async () => {
    await User.deleteOne({ mail });
    await dbClose();
  });

  it('login with correct user', async () => {
    const res = await request(app).post('/api/signin').send({ userName, password });
    expect(res.statusCode).to.equal(200);
    // should verify and not fail
    const foo = jwt.verify(res.body.token, `rrrrrrrr${process.env.JWT_KEY}`);
    console.log(foo);
  });

  it('incorrect userName, should return 401', async () => {
    const res = await request(app).post('/api/signin').send({ userName: 'userName', password });
    expect(res.statusCode).to.equal(401);
  });

  it('incorrect password, should return 401', async () => {
    const res = await request(app).post('/api/signin').send({ userName, password: 'password' });
    expect(res.statusCode).to.equal(401);
  });
});
