import {Entry} from '@/models';

export default {
  listEntry: async (filters) => {
    const data = await Entry.find(filters);
    return data;
  },
  createEntry: async (payload) => {
    const data = await Entry.create(payload);
    return data;
  },
  retrieveEntry: async (id) => {
    const data = await Entry.findById(id);
    return data;
  },
  updateEntry: async (id, payload) => {
    const data = await Entry.findByIdAndUpdate(id, payload);
    return data;
  },
  partialUpdateEntry: async (id, payload) => {
    const data = await Entry.findByIdAndUpdate(id, payload);
    return data;
  },
  destroyEntry: async (id) => {
    const data = await Entry.findByIdAndDelete(id);
    return data;
  },
};
