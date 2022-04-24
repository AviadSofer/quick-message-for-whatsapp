import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { isUserNameAlradyExist } from '../controllers/signUpValidation';
import { dbClose, dbConnect } from './dbConnect';
import createUser from '../controllers/createUser';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('check if userName already exist in the DB', () => {
  before(async () => dbConnect());
  after(async () => dbClose());

  const user = {
    mail: '53454ri495r1@gmail.com',
    userName: 'dra5235ratri14',
    password: '41234',
  };

  it('should return userName, because the userName not exist', async () => {
    // check the userName
    const userName = await isUserNameAlradyExist(user.userName);
    // expect the result be equal to the userName
    expect(userName).to.equal(user.userName);
  });

  it('should throw error, because the mail exist', async () => {
    // create new user
    await createUser(user.mail, user.userName, user.password);
    // after this, check if userName already exist, expect to throw error
    await expect(isUserNameAlradyExist(user.userName)).to.be.rejectedWith(Error);
  });
});
