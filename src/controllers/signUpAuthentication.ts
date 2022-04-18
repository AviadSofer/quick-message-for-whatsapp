import { User } from '../models/User';

const isHttpReqUndefind = (mail: string, userName: string, password: string) => {
  // check if some of the fields === undefind
  if (!mail || !userName || !password) {
    throw new Error('someone try to register, but forget fill all fields :(');
  } else {
    return mail;
  }
};

const isMailAlreadyExist = async (mail: string) => {
  // check if the mail is already exist in the DB
  const findMail = await User.find({ mail });
  if (findMail.length > 0) {
    throw new Error(`someone try to register, but his mail:${mail} is already used :(`);
  }
};

const isUserNameAlradyExist = async (userName: string) => {
  // check if the userName is already exist in the DB
  const findUserName = await User.find({ userName });
  if (findUserName.length > 0) {
    throw new Error(`someone try to register, but his user:${userName} is already used :(`);
  }
};

export { isHttpReqUndefind, isMailAlreadyExist, isUserNameAlradyExist };
