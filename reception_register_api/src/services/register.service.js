import {registerRepository} from '../repositories';
import {registerValidator} from '../validators';

export default {
  listEntry: async (query) => {
    let {date} = query;
    if (!date) {
      date = new Date().toISOString().split('T')[0];
    }
    const filters = {
      created: {
        $gte: new Date(`${date}T00:00:00Z`),
        $lte: new Date(`${date}T23:59:59Z`),
      },
    };

    const data = await registerRepository.listEntry(filters);
    return data;
  },
  createEntry: async (user, payload) => {
    const validatedData = await registerValidator
        .createEntry
        .validateAsync(payload);
    const data = await registerRepository.createEntry({
      ...validatedData,
      userId: user._id,
    });
    return data;
  },
  retrieveEntry: async (id) => {
    const data = await registerRepository.retrieveEntry(id);
    return data;
  },
  updateEntry: async (id, user, payload) => {
    const validatedData = await registerValidator
        .updateEntry
        .validateAsync(payload);
    const data = await registerRepository.updateEntry(id, {
      ...validatedData,
      userId: user._id,
    });
    return data;
  },
  partialUpdateEntry: async (id, user, payload) => {
    const validatedData = await registerValidator
        .partialUpdateEntry
        .validateAsync(payload);
    const data = await registerRepository.partialUpdateEntry(id, {
      ...validatedData,
      userId: user._id,
    });
    return data;
  },
  destroyEntry: async (id) => {
    const data = await registerRepository.destroyEntry(id);
    return data;
  },
};
