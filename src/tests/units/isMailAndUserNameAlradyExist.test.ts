import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { isMailAndUserNameAlradyExist } from '../../controllers/signUpValidation';
import { dbClose, dbConnect } from '../dbConnect';
import createUser from '../../controllers/createUser';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('check if mail & userName already exist in the DB', () => {
  before(async () => dbConnect());
  after(async () => dbClose());

  const user = {
    fullName: 'Joan Huan',
    mail: '53454ri495r1@gmail.com',
    mail1: '53454ri495r2@gmail.com',
    userName: 'dra5235ratri1',
    userName1: 'dra5235ratri2',
    password: '41234',
  };
  const {
    fullName, mail, mail1, userName, userName1, password,
  } = user;

  it('should pass, because just mail or just userName exist', async () => {
    // create new user
    await createUser(fullName, mail1, userName1, password);

    // just mail exist
    const Mail1 = await isMailAndUserNameAlradyExist(mail1, userName);
    expect(Mail1).to.equal(mail1);

    // just userName exist
    const Mail = await isMailAndUserNameAlradyExist(mail, userName1);
    expect(Mail).to.equal(mail);

    // mail & userName not exist
    expect(await isMailAndUserNameAlradyExist(mail, userName)).to.equal(mail);
  });

  it('should throw error, because the mail & userName exist', async () => {
    await expect(isMailAndUserNameAlradyExist(mail1, userName1)).to.be.rejectedWith(Error);
  });
});
