'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var ProjectSchema = new mongoose.Schema({
  name: String,
  /*owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'   
  }*/
  owner: String,
  active: Boolean,
  favorite: {
  	type: Boolean,
  	default: false
  }
},{
  timestamps: true
});

export default mongoose.model('Project', ProjectSchema);
