import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { isMailAlreadyExist } from '../../controllers/signUpValidation';
import { dbClose, dbConnect } from '../dbConnect';
import createUser from '../../controllers/createUser';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('check if mail already exist in the DB', () => {
  before(async () => dbConnect());
  after(async () => dbClose());

  const user = {
    fullName: 'Joan Huan',
    mail: '53454ri495r1@gmail.com',
    userName: 'dra5235ratri14',
    password: '41234',
  };

  it('should return mail, because the mail not exist', async () => {
    // check the mail
    const mail = await isMailAlreadyExist(user.mail);
    // expect the result be equal to the mail
    expect(mail).to.equal(user.mail);
  });

  it('should throw error, because the mail exist', async () => {
    // create new user
    await createUser(user.fullName, user.mail, user.userName, user.password);
    // after this, check if mail already exist, expect to throw error
    await expect(isMailAlreadyExist(user.mail)).to.be.rejectedWith(Error);
  });
});
