import {STATUS_CODES} from 'http';

import {ValidationError} from 'joi';

import {registerService} from '@/services';

export default {
  listEntry: async (request, response) => {
    const data = await registerService.listEntry(request.query);
    return response.status(200).json(data);
  },
  createEntry: async (request, response) => {
    try {
      const data = await registerService.createEntry(
          request.user,
          request.body,
      );
      return response.status(201).json(data);
    } catch (err) {
      if (err instanceof ValidationError) {
        return response.status(400).json(err.details);
      }
      return response.status(500).json(err);
    }
  },
  retrieveEntry: async (request, response) => {
    const data = await registerService.retrieveEntry(request.params.id);
    if (!data) {
      return response.status(404).json({detail: STATUS_CODES[404]});
    }
    return response.status(200).json(data);
  },
  updateEntry: async (request, response) => {
    try {
      const data = await registerService.createEntry(
          request.params.id,
          request.user,
          request.body,
      );
      if (!data) {
        return response.status(404).json({detail: STATUS_CODES[404]});
      }
      return response.status(200).json(data);
    } catch (err) {
      if (err instanceof ValidationError) {
        return response.status(400).json(err.details);
      }
      return response.status(500).json(err.detail);
    }
  },
  partialUpdateEntry: async (request, response) => {
    try {
      const data = await registerService.createEntry(
          request.params.id,
          request.user,
          request.body,
      );
      if (!data) {
        return response.status(404).json({detail: STATUS_CODES[404]});
      }
      return response.status(200).json(data);
    } catch (err) {
      if (err instanceof ValidationError) {
        return response.status(400).json(err.details);
      }
      return response.status(500).json(err.detail);
    }
  },
  destroyEntry: async (request, response) => {
    const data = await registerService.destroyEntry(request.params.id);
    return response.status(204).json(data);
  },
};
