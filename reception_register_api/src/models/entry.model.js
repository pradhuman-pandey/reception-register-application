import {Schema, model} from 'mongoose';

const entrySchema = new Schema(
    {
      userId: {type: Schema.Types.ObjectId, required: true},
      date: {type: Date, required: true, default: Date.now},
      name: {type: String, required: true},
      company: {type: String, required: true},
      personToMeet: {type: String, required: true},
      mobile: {type: Number, required: true},
      purpose: {type: String, required: true},
      in: {type: Date, required: true},
      sign: {type: String, required: true},
      out: {type: Date, required: false},
      securitySign: {type: String, required: false},
      remarks: {type: String, required: false},
    },
    {timestamps: {createdAt: 'created', updatedAt: 'updated'}},
);

const Entry = model('Entry', entrySchema);

export default Entry;
