import {Register} from '../models';

/**
 * Creates a new register service.
 *
 * @param {Object} payload object containing data for the new register.
 * @param {Object} user object associated with the register.
 * @return {Promise<Object>} resolves to the newly created register data.
 */
export async function createRegisterService(payload, user) {
  payload.user = user._id;
  const newRegister = new Register(payload);
  console.log(newRegister);
  const data = await newRegister.save();
  return data;
}

/**
 * Creates a new register service.
 *
 * @param {Object} user object associated with the register.
 * @return {Promise<Object>} that resolves to the newly created register data.
 */
export async function listRegisterService(user) {
  const data = await Register.find({user: user._id});
  return data;
}

/**
 * Creates a new register service.
 * @param {string} id identifier for register
 * @param {Object} user object associated with the register.
 * @return {Promise<Object>} that resolves to the newly created register data.
 */
export async function retrieveRegisterService(id, user) {
  const data = await Register.findOne({_id: id, user: user._id});
  return data;
}

/**
 * Creates a new register service.
 * @param {string} id identifier for register
 * @param {Object} payload object associated with the register.
 * @return {Promise<Object>} that resolves to the newly created register data.
 */
export async function updateRegisterService(id, payload) {
  const data = await Register.findOneAndUpdate(id, payload);
  return data;
}

/**
 * Creates a new register service.
 * @param {string} id identifier for register
 * @param {Object} payload object associated with the register.
 * @return {Promise<Object>} that resolves to the newly created register data.
 */
export async function partialUpdateRegisterService(id, payload) {
  const data = await Register.findOneAndUpdate(id, payload);
  return data;
}

/**
 * Creates a new register service.
 * @param {string} id identifier for register
 * @return {Promise<Object>} that resolves to the newly created register data.
 */
export async function destoryRegisterService(id) {
  const data = await Register.findOneAndDelete(id);
  return data;
}
