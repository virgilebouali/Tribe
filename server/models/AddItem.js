// models/barter.js
import mongoose from "mongoose";

const AddItemSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  need: {
    type: String,
    required: true,
  },
  postalcode: {
    type: Number,
    required: true,
  },
  owner: {
  type: mongoose.Schema.Types.ObjectId, ref: 'User' ,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    

  },
  created_at: {
    type: String
  }
});

const AddItem = mongoose.model("AddItem", AddItemSchema);

export default AddItem;
