import '@testing-library/jest-dom';

beforeAll(() => { // add some mock cookie
  Object.defineProperty(document, 'cookie', {
    value: 'justSomeCookie=true',
  });
});
