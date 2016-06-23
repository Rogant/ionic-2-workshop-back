'use strict';

import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  name: String,
  uuid: String,
  active: Boolean
});

export default mongoose.model('User', UserSchema);
