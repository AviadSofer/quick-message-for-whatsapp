import { User } from '../models/User';

const isHttpReqUndefind = (fullName: string, mail: string, userName: string, password: string) => {
  // check if some of the fields === undefind
  if (!fullName || !mail || !userName || !password) {
    throw new Error('You have to whrite full name, user name, email and password :(');
  } else {
    return mail;
  }
};

const isMailAndUserNameAlradyExist = async (mail: string, userName: string) => {
  // check if the mail and also the userName is already exist in the DB
  const findMail = await User.find({ mail });
  const findUserName = await User.find({ userName });
  if (findMail.length > 0 && findUserName.length > 0) {
    throw new Error(`mail: ${mail} and user: ${userName} already used :(`);
  } else {
    return mail;
  }
};

const isMailAlreadyExist = async (mail: string) => {
  // check if the mail is already exist in the DB
  const findMail = await User.find({ mail });
  if (findMail.length > 0) {
    throw new Error(`the mail:${mail} is already used :(`);
  } else {
    return mail;
  }
};

const isUserNameAlradyExist = async (userName: string) => {
  // check if the userName is already exist in the DB
  const findUserName = await User.find({ userName });
  if (findUserName.length > 0) {
    throw new Error(`the user:${userName} is already used :(`);
  } else {
    return userName;
  }
};

export {
  isHttpReqUndefind, isMailAndUserNameAlradyExist, isMailAlreadyExist, isUserNameAlradyExist,
};
