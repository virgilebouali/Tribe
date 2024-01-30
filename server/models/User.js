import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({


  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 12,
  },
  image: {
    type: String,
    required: false
  },
  description: {
    type: String,
    min: 12, 
    max: 140,
  },
  points: {
    type: Number,
    default: 0,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  trocs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Barter',
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  }],
  inbox: [{
    type: Number,
    ref: 'Message',
  }],
});

// Supprimer l'index firstname_1
userSchema.index({ firstname: 1 }, { unique: false });

const User = mongoose.model('User', userSchema);
export default User;
