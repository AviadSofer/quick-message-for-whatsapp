import { expect } from 'chai';
import { isHttpReqUndefind } from '../controllers/signUpAuthentication';

describe('should pass only if there no empty arguments', () => {
  const someText = 'something';
  const nothing = '';

  it('should pass because everything is Ok', () => {
    const mail = isHttpReqUndefind(someText, someText, someText);
    expect(mail).to.equal(someText);
  });

  it('should fail because mail is empty', () => {
    expect(() => isHttpReqUndefind(nothing, someText, someText)).to.throw();
  });

  it('should fail because userName is empty', () => {
    expect(() => isHttpReqUndefind(someText, nothing, someText)).to.throw();
  });

  it('should fail because password is empty', () => {
    expect(() => isHttpReqUndefind(someText, someText, nothing)).to.throw();
  });
});
