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
    fullName: 'Joan Huan',
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
    const cookies = res.headers['set-cookie'];
    const tokenCookie = cookies.filter((value: string) => value.split('token=')[1]);
    const token = tokenCookie[0].split('token=')[1].split(';')[0];
    expect(res.statusCode).to.equal(201);
    // should verify and not fail
    jwt.verify(token, `${process.env.JWT_KEY}`);
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
