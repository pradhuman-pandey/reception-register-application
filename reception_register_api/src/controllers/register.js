import {
  createRegisterService,
  destoryRegisterService,
  listRegisterService,
  partialUpdateRegisterService,
  retrieveRegisterService,
  updateRegisterService,
} from '../services';
import {registerCreateSchema, registerUpdateSchema} from '../validators';

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Response}
 */
export async function createRegister(request, response) {
  try {
    const validatedData = await registerCreateSchema.validateAsync(
        request.body,
    );
    const data = await createRegisterService(validatedData, request.user);
    return response.status(201).json(data);
  } catch (e) {
    return response.status(400).json(e);
  }
}

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Response}
 */
export async function listRegister(request, response) {
  const queryParams = request.query;
  const data = await listRegisterService(request.user, queryParams);
  return response.status(200).json(data);
}

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Response}
 */
export async function retrieveRegister(request, response) {
  const {id} = request.params;
  const data = await retrieveRegisterService(id, request.user);
  if (!data) return response.status(404).json({detail: 'Not found.'});
  return response.status(200).json(data);
}

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Response}
 */
export async function updateRegister(request, response) {
  const {id} = request.params;
  const register = await retrieveRegisterService(id, request.user);
  if (!register) return response.status(404).json({detail: 'Not found.'});
  try {
    const validatedData = await registerCreateSchema.validateAsync(
        request.body,
    );
    const data = await updateRegisterService(register._id, validatedData);
    return response.status(200).json(data);
  } catch (e) {
    return response.status(400).json(e);
  }
}

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Response}
 */
export async function partialUpdateRegister(request, response) {
  const {id} = request.params;
  const register = await retrieveRegisterService(id, request.user);
  if (!register) return response.status(404).json({detail: 'Not found.'});
  try {
    const validatedData = await registerUpdateSchema.validateAsync(
        request.body,
    );
    const data = await partialUpdateRegisterService(
        register._id,
        validatedData,
    );
    return response.status(200).json(data);
  } catch (e) {
    return response.status(400).json(e);
  }
}

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Response}
 */
export async function destoryRegister(request, response) {
  const {id} = request.params;
  const register = await retrieveRegisterService(id, request.user);
  if (!register) return response.status(404).json({detail: 'Not found.'});
  const data = await destoryRegisterService(register._id);
  return response.status(204).json(data);
}
