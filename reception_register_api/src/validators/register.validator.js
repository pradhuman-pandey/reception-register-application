import Joi from 'joi';

export default {
  createEntry: Joi.object({
    name: Joi.string().min(3).required().label('Name'),
    company: Joi.string().min(3).required().label('Company'),
    personToMeet: Joi.string().required().label('Person to Meet'),
    mobile: Joi.number().min(10).required().label('Mobile'),
    purpose: Joi.string().required().label('Purpose'),
    in: Joi.date().required().label('In'),
    sign: Joi.string().min(3).required().label('Sign'),
    out: Joi.date().label('Out'),
    securitySign: Joi.string().label('Security Sign'),
    remarks: Joi.string().label('Remarks'),
  }),
  updateEntry: Joi.object({
    name: Joi.string().min(3).required().label('Name'),
    company: Joi.string().min(3).required().label('Company'),
    personToMeet: Joi.string().required().label('Person to Meet'),
    mobile: Joi.number().min(10).required().label('Mobile'),
    purpose: Joi.string().required().label('Purpose'),
    in: Joi.date().required().label('In'),
    sign: Joi.string().min(3).required().label('Sign'),
    out: Joi.date().label('Out'),
    securitySign: Joi.string().label('Security Sign'),
    remarks: Joi.string().label('Remarks'),
  }),
  partialUpdateEntry: Joi.object({
    name: Joi.string().min(3).label('Name'),
    company: Joi.string().min(3).label('Company'),
    personToMeet: Joi.string().label('Person to Meet'),
    mobile: Joi.number().min(10).label('Mobile'),
    purpose: Joi.string().label('Purpose'),
    in: Joi.date().label('In'),
    sign: Joi.string().min(3).label('Sign'),
    out: Joi.date().label('Out'),
    securitySign: Joi.string().label('Security Sign'),
    remarks: Joi.string().label('Remarks'),
  }),
};