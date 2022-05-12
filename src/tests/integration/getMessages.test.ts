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

describe('login with user', () => {
  const randomString = (Math.random() + 1).toString(36).substring(7);
  const user = {
    fullName: 'Joan Huan',
    mail: `${randomString}@gmail.com`,
    userName: randomString,
    password: '41234',
  };
  const { mail, userName } = user;

  let token: string;

  before(async () => {
    await dbConnect();
    await User.deleteOne({ mail });
    const newUser = await request(app).post('/api/signup').send(user);
    token = newUser.body.token;
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
      message: 'invalid token',
    });
  });

  it('POST TEST - post new message with token, and without phoneNumber/textMessage', async () => {
    const newPost = await request(app).post('/api/get-messages')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        phoneNumber: '0541234567',
        textMessage: 'Hi!',
      });
    expect(newPost.statusCode).to.equal(201);

    // textMessage missing
    const resWithoutTextMessage = await request(app).post('/api/get-messages')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        phoneNumber: '0541234567',
      });
    expect(resWithoutTextMessage.statusCode).to.equal(401);

    // phoneNumber missing
    const resWithoutPhoneNumber = await request(app).post('/api/get-messages')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        textMessage: '0541234567',
      });
    expect(resWithoutPhoneNumber.statusCode).to.equal(401);
  });

  it('GET TEST - sould get the relevant messages', async () => {
    const messages = await request(app).get('/api/get-messages')
      .set({ Authorization: `Bearer ${token}` });
    expect(messages.statusCode).to.equal(200);
    expect(messages.body).to.containSubset([{
      userName,
      phoneNumber: '0541234567',
      textMessage: 'Hi!',
    }]);
  });
});
