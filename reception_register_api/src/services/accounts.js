import {User} from '../models';
import {generateKey} from '../utils/token';

/**
 * Creates a new register service.
 * @param {Object} payload object associated with the user.
 * @return {Promise<Object>} that resolves to the newly created token data.
 */
export async function performLoginService(payload) {
  console.log(payload);
  const user = await User.findOne({email: payload.email, isActive: true});
  console.log(user)
  if (!user) return null;
  const match = await user.validatePassword(payload.password);
  if (!match) return null;
  if (!user.token) {
    user.token = {key: generateKey()};
    user.lastLogin = new Date();
    await user.save();
  }
  console.log(user.token.key);
  return {token: user.token.key};
}

/**
 * Creates a new register service.
 * @param {Object} user object associated with the user.
 * @return {Promise<Object>} that resolves to the user details.
 */
export async function retrieveUserService(user) {
  const detail = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    dateJoined: user.dateJoined,
  };
  return detail;
}

/**
 * Creates a new register service.
 * @param {Object} user object associated with the user.
 * @return {Promise<Object>} that resolves to empty object.
 */
export async function performLogoutService(user) {
  user.set('token', undefined, {strict: false});
  await user.save();
  return {};
}
