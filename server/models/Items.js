// models/Item.js
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  category: { type: String, required: true },
  need: { type: String, required: true },
  postalcode: { type: String, required: true },
  owner: { type: String, required: true },
  image: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
