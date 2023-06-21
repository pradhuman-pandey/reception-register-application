import { Register } from '../models';

export async function createRegisterService(payload, user) {
  payload.user = user._id;
  const newRegister = new Register(payload);
  console.log(newRegister);
  const data = await newRegister.save();
  return data;
}

export async function listRegisterService(user) {
  const data = await Register.find({ user: user._id });
  return data;
}

export async function retrieveRegisterService(id, user) {
  const data = await Register.findOne({ _id: id, user: user._id });
  return data;
}

export async function updateRegisterService(id, payload) {
  const data = await Register.findOneAndUpdate(id, payload);
  return data;
}

export async function partialUpdateRegisterService(id, payload) {
  const data = await Register.findOneAndUpdate(id, payload);
  return data;
}

export async function destoryRegisterService(id) {
  const data = await Register.findOneAndDelete(id);
  return data;
}
