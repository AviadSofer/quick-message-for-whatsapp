import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import checkUser from '../../controllers/signInValidation';
import { dbClose, dbConnect } from '../dbConnect';
import createUser from '../../controllers/createUser';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('validate userName/password before login', () => {
  const user = {
    mail: '53454ri495r1@gmail.com',
    userName: 'dra5235ratri14',
    password: '41234',
  };
  const { mail, userName, password } = user;

  before(async () => {
    await dbConnect();
    // create new user
    await createUser(mail, userName, password);
  });
  after(async () => dbClose());

  it('should throw error, because the userName/password incorrect', async () => {
    // expect throw error
    await expect(checkUser('userName', password)).to.be.rejectedWith(Error);
    await expect(checkUser(userName, 'password')).to.be.rejectedWith(Error);
  });

  it('should pass, because userName and password correct', async () => {
    // try to login
    await checkUser(userName, password);
  });
});
