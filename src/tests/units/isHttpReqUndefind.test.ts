import { expect } from 'chai';
import { isHttpReqUndefind } from '../../controllers/signUpValidation';

describe('check if there no empty arguments', () => {
  const someText = 'something';
  const nothing = '';

  it('should return mail, because everything is Ok', () => {
    const mail = isHttpReqUndefind(someText, someText, someText, someText);
    expect(mail).to.equal(someText);
  });

  it('should throw error, because fullName is empty', () => {
    expect(() => isHttpReqUndefind(nothing, someText, someText, someText)).to.throw();
  });

  it('should throw error, because mail is empty', () => {
    expect(() => isHttpReqUndefind(someText, nothing, someText, someText)).to.throw();
  });

  it('should throw error, because userName is empty', () => {
    expect(() => isHttpReqUndefind(someText, someText, nothing, someText)).to.throw();
  });

  it('should throw error, because password is empty', () => {
    expect(() => isHttpReqUndefind(someText, someText, someText, nothing)).to.throw();
  });
});
