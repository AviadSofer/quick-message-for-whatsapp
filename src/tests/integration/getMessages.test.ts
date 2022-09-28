import * as chai from 'chai';
import request from 'supertest';
import 'dotenv/config';
import chaiSubset from 'chai-subset';
import { dbClose, dbConnect } from '../../helpers/dbConnect';
import app from '../../app';
import logger from '../../logger/logger';
import { User } from '../../models/User';
import { Message } from '../../models/Message';

chai.use(chaiSubset);
const { expect } = chai;
logger.level = 'fatal';

describe('getMessages.test.ts', () => {
  const randomString = (Math.random() + 1).toString(36).substring(7);
  const user = {
    fullName: 'Joan Huan',
    mail: `${randomString}@gmail.com`,
    userName: randomString,
    password: '41234',
  };
  const { mail, userName } = user;

  let tokenCookie: string;

  before(async () => {
    await dbConnect();
    await User.deleteOne({ mail });
    const newUser = await request(app).post('/api/signup').send(user);
    const cookies = newUser.headers['set-cookie'];
    tokenCookie = cookies.filter((value: string) => value.split('token=')[1]);
  });
  after(async () => {
    await User.deleteOne({ mail });
    await Message.deleteOne({ userName });
    await dbClose();
  });

  it('sould fail, try to post new message without token', async () => {
    const newPost = await request(app).post('/api/get-messages').send({});
    expect(newPost.statusCode).to.equal(401);
    expect(newPost.body).to.include({
      message: `invalid token, at ${Date.now()}.`,
    });
  });

  it('POST TEST - post new message with token (should work), and without phoneNumber (should fail)', async () => {
    const newPost = await request(app).post('/api/get-messages')
      .set('Cookie', [tokenCookie])
      .send({
        phoneNumber: '0541234567',
        textMessage: 'Hi!',
      });
    expect(newPost.statusCode).to.equal(201);

    // phoneNumber missing
    const resWithoutPhoneNumber = await request(app).post('/api/get-messages')
      .set('Cookie', [tokenCookie])
      .send({
        textMessage: '0541234567',
      });
    expect(resWithoutPhoneNumber.statusCode).to.equal(401);
  });

  it('GET TEST - should get the relevant messages', async () => {
    const messages = await request(app).get('/api/get-messages')
      .set('Cookie', [tokenCookie]);
    expect(messages.statusCode).to.equal(200);
    expect(messages.body).to.containSubset([{
      userName,
      phoneNumber: '0541234567',
      textMessage: 'Hi!',
    }]);
  });
});
