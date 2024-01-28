// models/barter.js
import mongoose from 'mongoose';

const barterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  type: {
    type: String,
  },
  category: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const Barter = mongoose.model('Barter', barterSchema);

module.exports = Barter;
